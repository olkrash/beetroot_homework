// 1.Написать функцию, которая принимает 2 числа и возвращает -1, если первое меньше, чем второе; 1 – если первое больше, чем второе; и 0 – если числа равны.
function numCompare(a = 1, b = 1) {
    if (a < b) {
        console.log(-1);
    } else if (a > b) {
        console.log(1);
    } else {
        console.log(0);
    }
}

numCompare(2, 1);

// // 2.Написать функцию, которая вычисляет факториал переданного ей числа.
function getFactorial(num = 3) {
    return (num !== 1) ? num * getFactorial(num - 1) : 1;
}

console.log(getFactorial(5));

// 3.Написать функцию, которая принимает три отдельные цифры и превращает их в одно число. Например: цифры 1, 4, 9 превратятся в число 149.
function numConcat(num1, num2, num3) {
    let toString = num1.toString() + num2.toString() + num3.toString();
    return Number(toString);
}

console.log(numConcat(1, 4, 9));

// 4.Написать функцию, которая принимает длину и ширину прямоугольника и вычисляет его площадь. Если в функцию передали 1 параметр, то она вычисляет площадь квадрата.
function totalArea(a, b) {
    if (typeof b !== "undefined") {
        return (a * 2) + (b * 2);
    } else {
        return a * 4;
    }
}

console.log(totalArea(3, 7));

// 5.Написать функцию, которая проверяет, является ли переданное ей число совершенным. Совершенное число – это число, равное сумме всех своих собственных делителей.
function getPerfect() {
    return [
        6,
        28,
        496,
        8128,
        33550336,
        8589869056,
        137438691328,
    ];
}

function numPerfect(num) {
    let arrPerfect = getPerfect();

    return arrPerfect.includes(num);
}

console.log(numPerfect(6));

// 6.Написать функцию, которая принимает минимальное и максимальное значения для диапазона, и выводит только те числа из диапазона, которые являются совершенными. Используйте написанную ранее функцию, чтобы узнавать, совершенное число или нет.
function numsPerfect(min, max) {
    let result = [];
    let perfect = getPerfect()
    for (let i in perfect) {
        let num = perfect[i]
        if (num >= min && num <= max) {
            result.push(num);
        }
    }
    return result;
}

console.log(numsPerfect(1, 10000000));

// 7.Написать функцию, которая принимает время (часы, минуты, секунды) и выводит его на экран в формате «чч:мм:сс».Если при вызове функции минуты и/или секунды не были переданы, то выводить их как 00.
function formatTimeNum(num) {
    if (typeof num === 'undefined') {
        return "00";
    }
    if (num > 9) {
        return num.toString();
    }
    return "0" + num.toString();
}

function setToTime(hours, minutes, seconds) {
    return formatTimeNum(hours) + ":" + formatTimeNum(minutes) + ":" + formatTimeNum(seconds);
}

console.log(setToTime(9, 34));

// 8.Написать функцию, которая принимает часы, минуты и секунды и возвращает это время в секундах.
function timeToSeconds(hours, minutes, seconds) {
    return hours * 3600 + minutes * 60 + seconds;
}

console.log(timeToSeconds(1, 2, 3));

// 9.Написать функцию, которая принимает количество секунд, переводит их в часы, минуты и секунды и возвращает в виде строки «чч:мм:сс».
function timeToString(num) {
    let minutes, hours, seconds = 0;
    if (num < 60) {
        return `00:00:${num}`;
    } else if (num < 3600) {
        seconds = num % 60;
        minutes = (num - seconds) / 60;
        return `00:${formatTimeNum(minutes)}:${formatTimeNum(seconds)}`;
    }

    //get hours
    let secondsLeft = num % 3600;
    hours = (num - secondsLeft) / 3600;
    //get minutes and seconds
    seconds = secondsLeft % 60;
    minutes = (secondsLeft - seconds) / 60;

    return `${formatTimeNum(hours)}:${formatTimeNum(minutes)}:${formatTimeNum(seconds)}`;
}

console.log(timeToString(9000));

// 10.Написать функцию, которая считает разницу между датами. Функция принимает 6 параметров, которые описывают 2 даты, и возвращает результат в виде строки «чч:мм:сс». При выполнении задания используйте функции из предыдущих 2-х заданий: сначала обе даты переведите в секунды, узнайте разницу в секундах, а потом разницу переведите обратно в «чч:мм:сс»
function dateDifference(hours1, minutes1, seconds1, hours2, minutes2, seconds2) {
    let date1 = timeToSeconds(hours1, minutes1, seconds1);
    let date2 = timeToSeconds(hours2, minutes2, seconds2);
    let diff = Math.abs(date1 - date2);
    return timeToString(diff);
}

// поскольку написано, что нужно использовать 2 предыдущих задания, буду считать, что инпут в часах, минутах, секундах

console.log(dateDifference(23, 7, 50, 1, 40, 8));