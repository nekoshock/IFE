/* eslint-disable */
$(function () {
    // 索引值
    var index = 0;
    var $_bannerSlide = $(".banner-slide");
    var $_dot = $(".dot");
    // 定时器
    var interval = setInterval(function () {
        index += 1;
        changePage();
    }, 2000);
    // 箭头按钮下一页事件
    $(".next").click(function () {
        index += 1;
        changePage();
    })
    // 箭头按钮上一页事件
    $(".prev").click(function () {
        index -= 1;
        changePage();
    })
    // 切换页事件
    function changePage() {
        const length = $_bannerSlide.length;
        if (index >= length) {
            index = index % length;
        }
        if (index < 0) {
            index += 5;
        }

        $_bannerSlide.removeClass("slide-active").eq(index).addClass("slide-active");
        if (index < 2) {
            $_dot.removeClass().addClass("dot dot-brown");

        } else {
            $_dot.removeClass().addClass("dot dot-white");
        }
        $_dot.eq(index).addClass("dot-active");
    }
    // 为圆球绑定点击时修改index,并触发切换页
    $_dot.click(function () {
        index = $_dot.toArray().indexOf(this);
        changePage();
    });
    // 移入取消interval事件
    // 移出恢复interval事件
    $(".carousel").hover(function () {
        clearInterval(interval);
    }, function () {
        interval = setInterval(function () {
            index += 1;
            changePage();
        }, 2000)
    })
});