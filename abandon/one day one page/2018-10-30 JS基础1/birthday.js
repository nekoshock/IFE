function prom(word) {
    return prompt("请输入你的" + word);
}

var birthdayYear = prom("出生年份");
var birthdayMouth = prom("出生月份");
var birthdayDay = prom("出生日期");
var birthday;

function isLeapYear(year) {
    if ((year % 100 != 0 && year % 4 == 0) || year % 400 == 0) {
        return 29;
    }
    return 28;

}

function firstHalfYear(mouth, year) {
    var day = 0;
    for (var i = 1; i < mouth && i != 8; i += 1) {
        if (i % 2 == 0 && i != 2) {
            day += 30;
        } else if (i == 2) {
            day += isLeapYear(year);
        } else {
            day += 31;
        }
    }
    return day;
}

function lastHalfYear(mouth) {
    var day = 0;
    for (var i = 8; i < mouth; i += 1) {
        if (i % 2 == 0) {
            day += 31;
        } else {
            day += 30;
        }
    }
    return day;
}
birthday = firstHalfYear(birthdayMouth, birthdayYear) + lastHalfYear(birthdayMouth) + parseInt(birthdayDay, 10);
document.write("您的生日是" + birthdayYear + "的第" + birthday + "天.");
