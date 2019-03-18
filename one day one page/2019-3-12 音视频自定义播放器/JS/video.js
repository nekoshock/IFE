/* eslint-disable */
var playNode = document.querySelector(".playNode");
var videoNode = document.querySelector(".videoNode");
var fullscreen = document.querySelector(".fullscreen");
var loadNode = document.querySelector(".loadNode");
var loadNodeWidth = loadNode.offsetWidth;
var timeNow = document.querySelector(".timeNow");
var timeTotal = document.querySelector(".timeTotal");
var timeTotalNum;
var crlNode = document.querySelector(".crlNode");
var currentTimeLine = document.querySelector(".currentTimeLine");
var loadWarp = document.querySelector(".loadWarp");
var controlsNode = document.querySelector(".controlsNode");
var body = document.querySelector("body");
var VideoplayerMousedownState = 0;

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
    timeTotalNum = videoNode.duration;
})
// 播放时,修改当前时间,进度条移动
// 为了能停止自动更新进度条,我将这条拆出来写.
function timeupDate() {
    // 修改当前时间,移动进度条
    const now = videoNode.currentTime;
    moveProgressBar(now / timeTotalNum);
}
videoNode.addEventListener("timeupdate", timeupDate);

// 点击与拖动进度条
loadNode.addEventListener("mousedown", function(e) {
    videoNode.removeEventListener("timeupdate", timeupDate);
    VideoplayerMousedownState = 1;
    // 移动进度条
    moveProgressBar(mousePosition(e));
    // 挂上移动鼠标时进度条随动
    body.addEventListener("mousemove", followMouse);
    // 拆写,用于移除事件
    function followMouse(e) {
        if (VideoplayerMousedownState !== 0) {
            moveProgressBar(mousePosition(e));
        }
    }
    // 松开鼠标时改变播放时间
    body.addEventListener("mouseup", function(e) {
        if (VideoplayerMousedownState !== 0) {
            body.removeEventListener("mousemove", followMouse);
            videoNode.currentTime = (mousePosition(e)) * timeTotalNum;
            videoPlay();
            videoNode.addEventListener("timeupdate", timeupDate);
            VideoplayerMousedownState = 0;
        }
    });
});


// 获取鼠标与进度条相对位置
function mousePosition(e) {
    const ev = e || event;
    const l = ev.pageX;
    let evTarget = loadNode;
    let evLeft = evTarget.offsetLeft;
    while (evTarget.offsetParent !== null) {
        evLeft += evTarget.offsetParent.offsetLeft;
        evTarget = evTarget.offsetParent;
    }
    var rate = (l - evLeft) / loadNodeWidth;
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


function moveProgressBar(rate) {
    // 移动进度条
    currentTimeLine.style.width = (rate * 100) + "%";
    crlNode.style.left = (rate * 100) + "%";
    // 修改当前时间
    timeNow.innerHTML = timeNumFix(parseInt((rate * timeTotalNum) / 60)) + ":" + timeNumFix(parseInt((rate * timeTotalNum) % 60));
}

// offsetleft是距离文档或者已定位的父元素的左侧距离;
// offsetWidht是实际宽度;