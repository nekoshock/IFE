let attime;
let stopid;
let stopid2;
let num = 0;

function clock() {
    const time = new Date();
    attime = `${time.getFullYear()}年${time.getMonth() + 1}月${time.getDate()}日 ${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`;
    document.getElementById("clock").value = attime;
}

function clockDoIt() {
    stopid = setInterval(clock, 100);
}
window.load(clockDoIt());

function settimeout() {
    setTimeout(() => {
        window.open("http://www.baidu.com", "_blank", "");
    }, 3000);
}

function start() {
    document.getElementById("timeout").value = num;
    num += 1;
    stopid2 = setTimeout(start, 1000);
}

function stop() {
    clearTimeout(stopid2);
}
