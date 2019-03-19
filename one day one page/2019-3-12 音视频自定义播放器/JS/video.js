/* eslint-disable */
var playNode = document.querySelector(".playNode");
var videoNode = document.querySelector(".videoNode");
var fullscreen = document.querySelector(".fullscreen");
var loadNode = document.querySelector(".loadNode");
var timeNow = document.querySelector(".timeNow");
var timeTotal = document.querySelector(".timeTotal");
var crlNode = document.querySelector(".crlNode");
var currentTimeLine = document.querySelector(".currentTimeLine");
var loadWarp = document.querySelector(".loadWarp");
var controlsNode = document.querySelector(".controlsNode");
var html = document.querySelector("html");
var volumeMuted = document.querySelector(".volumeMuted");
// 封装一些参数到集合里,省的变量名不够用
var videoPlayer = {
    MousedownState: 0,
    timeTotalNum: 0,
};
var soundVolume = {
    MousedownState: 0,
    // 预设音量,今后可以改为读取本地的.
    rate: 1,
    mutedBefore: 1,
};
var volumeWarp = document.querySelector(".volumeWarp");
var volumeSlider = document.querySelector(".volumeSlider");
var volumeSliderLine = document.querySelector(".volumeSliderLine");
var volumeSliderCrl = document.querySelector(".volumeSliderCrl");

function timeNumFix(num) {
    // if (num < 10) {
    //     num = "0" + num;
    // }
    //  三目运算符的实践
    return num < 10 ? "0" + num : num;
}
// canPauseNode存在代表播放中
function videoPlay() {
    videoNode.play();
    playNode.classList.add("playing");
}

function videoPause() {
    videoNode.pause();
    playNode.classList.remove("playing");
}
videoNode.addEventListener("ended", function() {
    playNode.classList.remove("playing");
})
playNode.onclick = function() {
    //HTML5新增了classList这种新的操作类名方法
    // add(value)：将给定的字符串值添加到列表中。如果值已经存在，就不添加了。
    // contains(value)：表示列表中是否存在给定的值，如果存在则返回 true，否则返回 false。
    // remove(value)：从列表中删除给定的字符串。
    // toggle(value)：如果列表中已经存在给定的值，删除它；如果列表中没有给定的值，添加它
    // 
    // 控制图标
    if (this.classList.contains("playing")) {
        videoPause();
    } else {
        videoPlay();
    }
    // 我把toggle拆到function里了,为了其他方式播放时也能切换图标;
    // this.classList.toggle("playing");
}
// 全屏,为省事只写webkit的,还有原版的,moz版没写.
fullscreen.onclick = function() {
    videoNode.webkitRequestFullscreen();
}
// 总时间,当加载完成时显示
videoNode.addEventListener("canplay", function() {
    timeTotal.innerHTML = timeNumFix(parseInt(videoNode.duration / 60)) + ":" + timeNumFix(parseInt(videoNode.duration % 60));
    videoPlayer.timeTotalNum = videoNode.duration;
    moveVolumeBar(soundVolume.rate);
})
// 播放时,修改当前时间,进度条移动
// 为了能停止自动更新进度条,我将这条拆出来写.
function timeupDate() {
    // 修改当前时间,移动进度条
    const now = videoNode.currentTime;
    moveProgressBar(now / videoPlayer.timeTotalNum);
}
videoNode.addEventListener("timeupdate", timeupDate);

// 点击与拖动进度条
loadNode.addEventListener("mousedown", function(e) {
    videoNode.removeEventListener("timeupdate", timeupDate);
    videoPlayer.MousedownState = 1;
    // 移动进度条
    moveProgressBar(mousePosition(e, loadNode));
    // 挂上移动鼠标时进度条随动
    html.addEventListener("mousemove", videoFollowMouse);
    // 拆写,用于移除事件
    function videoFollowMouse(e) {
        if (videoPlayer.MousedownState !== 0) {
            moveProgressBar(mousePosition(e, loadNode));
        }
    }
    // 松开鼠标时改变播放时间
    html.addEventListener("mouseup", function(e) {
        if (videoPlayer.MousedownState !== 0) {
            html.removeEventListener("mousemove", videoFollowMouse);
            videoNode.currentTime = (mousePosition(e, loadNode)) * videoPlayer.timeTotalNum;
            videoPlay();
            videoNode.addEventListener("timeupdate", timeupDate);
            videoPlayer.MousedownState = 0;
        }
    });
});


// 获取鼠标与进度条相对位置
function mousePosition(e, ele) {
    const ev = e || event;
    const l = ev.pageX;
    console.log(ev.pageX);
    let evTarget = ele;
    let evLeft = evTarget.offsetLeft;
    while (evTarget.offsetParent !== null) {
        evLeft += evTarget.offsetParent.offsetLeft;
        evTarget = evTarget.offsetParent;
    }
    console.log(evLeft);
    var rate = (l - evLeft) / ele.offsetWidth;
    // if (rate < 0) {
    //     rate = 0;
    // }
    // if (rate > 1) {
    //     rate = 0.999;
    // }
    // 三目运算符
    rate = rate < 0 ? 0 : rate;
    rate = rate >= 1 ? 0.9999 : rate;
    return rate;
}

// 移动进度条
function moveProgressBar(rate) {
    currentTimeLine.style.width = (rate * 100) + "%";
    crlNode.style.left = (rate * 100) + "%";
    // 修改当前时间
    timeNow.innerHTML = timeNumFix(parseInt((rate * videoPlayer.timeTotalNum) / 60)) + ":" + timeNumFix(parseInt((rate * videoPlayer.timeTotalNum) % 60));
}

// offsetleft是距离文档或者已定位的父元素的左侧距离;
// offsetWidht是实际宽度;

// 音量条就好写很多,现成的系统直接套用就好.
// 音量条相关API: volume volumechange
volumeWarp.addEventListener("mousedown", function(e) {
    moveVolumeBar(mousePosition(e, volumeWarp));
    soundVolume.MousedownState = 1;
    html.addEventListener("mousemove", volumeFollowMouse);
    // 拆写,用于移除事件
    function volumeFollowMouse(e) {
        if (soundVolume.MousedownState !== 0) {
            moveVolumeBar(mousePosition(e, volumeSlider));
        }
    }
    html.addEventListener("mouseup", function(e) {
        if (soundVolume.MousedownState !== 0) {
            html.removeEventListener("mousemove", volumeFollowMouse);
            soundVolume.MousedownState = 0;
        }
    });
});
// 移动音量条
function moveVolumeBar(rate) {
    volumeSliderLine.style.width = (rate * 100) + "%";
    volumeSliderCrl.style.left = (rate * 100) + "%";
    videoNode.volume = rate;
    soundVolume.rate = rate;
}
// 静音图标
volumeMuted.addEventListener("click", function(e) {
    volumeMuted.classList.toggle("muted");
    if (volumeMuted.classList.contains("muted")) {
        soundVolume.mutedBefore = soundVolume.rate;
        moveVolumeBar(0);
    } else {
        moveVolumeBar(soundVolume.mutedBefore);
    }
});
// 如果音量变为0,则图标class加入muted
videoNode.addEventListener("volumechange", function(e) {
    if (videoNode.volume === 0) {
        volumeMuted.classList.add("muted");
    } else {
        volumeMuted.classList.remove("muted");
    }
});