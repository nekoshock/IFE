/* eslint-disable */
// 封装一个getElementsByClassName()的方法.
window.onload = function () {
    function byCN(className) {
        return typeof (className) === "string" ? document.getElementsByClassName(className) : className;
    }
    // 获取元素
    var navButton = byCN("nav-button"),
        nav = byCN("nav")[0],
        bannerSlide = byCN("banner-slide"),
        banner = byCN("banner")[0],
        index = 0,
        timer;
    // 定时器
    function setI() {
        timer = setInterval(nextPic, 1000);
    }

    function clearI() {
        clearInterval(timer);
    }

    function clickIt() {
        var arr = Array.from(navButton);
        index = arr.indexOf(this);
        change();
    }

    function nextPic() {
        index += 1;
        if (index > 3) {
            index = 0;
        }
        change();
    }

    function change() {
        for (var i = 0, j = bannerSlide.length; i < j; i += 1) {
            navButton[i].className = removeClass(navButton[i], "nav-active");
            bannerSlide[i].className = removeClass(bannerSlide[i], "slide-active");
        }
        navButton[index].className += " nav-active";
        bannerSlide[index].className += " slide-active";
    }

    function removeClass(ele, cl) {
        return ele.className.replace(cl, "");
    }
    // 下面写的都不对 就大概这样了
    setI();
    nav.onmouseout = setI;
    nav.onmouseover = clearI;
    banner.onmouseout = setI;
    banner.onmouseover = clearI;
    for (var i = 0, j = navButton.length; i < j; i += 1) {
        navButton[i].onclick = clickIt;
    }
}