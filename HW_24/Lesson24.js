// 1.Подсчитать сумму всех чисел в заданном пользователем диапазоне.
const fromNumber = +prompt('Provide the from number');
const endNumber = +prompt('Provide to number');
let result = 0;
for (let i = fromNumber; i <= endNumber; i++) {
    result += i;
}
console.log(result)

// 2.Запросить 2 числа и найти только наибольший общий делитель.
const twoNumbers = prompt('Enter two digits using coma: ')
let twoArr = twoNumbers.split(',');
let firstNum = +twoArr[0]
let secondNum = +twoArr[1]
for (let i = firstNum; i >= 1; i--) {
    if (firstNum % i === 0 && secondNum % i === 0) {
        console.log(i);
        break;
    }
}

// 3.Запросить у пользователя число и вывести все делители этого числа.
const mainNumber = +prompt('Enter the number to find all dividers');
let arr = [];
for (let i = mainNumber - 1; i >= 1; i--) {
    if (mainNumber % i === 0) {
        arr.push(i);
    }
}
console.log(arr);

// 4.Определить количество цифр в введенном числе.
const num = prompt('Enter any number: ');
console.log('You entered ' + num.length + ' digits');

// 5.Запросить у пользователя 10 чисел и подсчитать, сколько он ввел положительных, отрицательных и нулей. При этом также посчитать, сколько четных и нечетных. Вывести статистику на экран. Учтите, что достаточно одной переменной (не 10) для ввода чисел пользователем.
const enterDigits = prompt('Enter 10 digits using coma');
let digitArr = enterDigits.split(",");
let positive = 0;
let negative = 0;
let zeros = 0;
let odd = 0;
let even = 0;
for (let digit of digitArr) {
    digit = +digit;
    if (digit === 0) {
        zeros++;
        continue;
    }

    if (digit % 2 === 0) {
        even++;
    } else {
        odd++;
    }

    if (digit < 0) {
        negative++;
    } else {
        positive++;
    }
}
console.log('Odds: ' + odd + '\nEvens ' + even + '\nZeros ' + zeros + '\nNegatives ' + negative + '\nPositives ' + positive);

// 6. Зациклить калькулятор. Запросить у пользователя 2 числа и знак, решить пример, вывести результат и спросить, хочет ли он решить еще один пример. И так до тех пор, пока пользователь не откажется.
while (true) {
    const enterDigits = prompt('Enter 2 digits and operator for resolving using comas for example: 2, 2, + . Your turn: ');
    const digitArr = enterDigits.split(',');
    let result = 0;
    switch (digitArr[2]) {
        case "-" :
            result = digitArr[0] - digitArr[1];
            break;
        case "+" :
            result = digitArr[0] + digitArr[1];
            break;
        case "/" :
            result = digitArr[0] / digitArr[1];
            break;
        case "*" :
            result = digitArr[0] * digitArr[1];
            break;
    }
    console.log(result);
    let answer = prompt('Would you like to calculate more? (yes, no)');
    if (answer === 'no') {
        break;
    }
}

// 7. Запросить у пользователя число и на сколько цифр его сдвинуть. Сдвинуть цифры числа и вывести результат (если число 123456 сдвинуть на 2 цифры, то получится 345612).
let userNumber = prompt('Enter any number: ');
let firstTwoDigits = userNumber.substr(0, 2);
userNumber = userNumber.substr(2);
console.log('New number is ' + userNumber + firstTwoDigits);

// 8.Зациклить вывод дней недели таким образом: «День недели. Хотите увидеть следующий день?» и так до тех пор, пока пользователь нажимает OK.
let currentDate = new Date();
while (true) {
    console.log(new Intl.DateTimeFormat('ru-RU', {weekday: 'long'}).format(currentDate));

    let question = confirm('День недели. Хотите увидеть следующий день ?')
    if (!question) {
        break;
    }
    currentDate.setDate(currentDate.getDate() + 1);
}

// 9. Вывести таблицу умножения для всех чисел от 2 до 9. Каждое число необходимо умножить на числа от 1 до 10.
for (let num = 2; num <= 9; num++) {
    for (let multiplier = 1; multiplier <= 10; multiplier++) {
        console.log(num.toString() + "x" + multiplier.toString() + "=" + num * multiplier);
    }
}

// 10. Игра «Угадай число». Предложить пользователю загадать число от 0 до 100 и отгадать его следующим способом: каждую итерацию цикла делите диапазон чисел пополам, записываете результат в N и спрашиваете у пользователя «Ваше число > N, < N или == N?». В зависимости от того, что указал пользователь, уменьшаете диапазон. Начальный диапазон от 0 до 100, поделили пополам и получили 50. Если пользователь указал, что его число > 50, то изменили диапазон на от 51 до 100. И так до тех пор, пока пользователь не выберет == N.//
let fromNum = 0;
let toNum = 100;
outerLoop: while (true) {
    let currNum = Math.round((fromNum + toNum) / 2);
    let question = prompt(`Ваше число > ${currNum}, < ${currNum} или = ${currNum}?`);
    switch (question) {
        case "=" :
            console.log('Thanks for the game !')
            break outerLoop;
        case '>' :
            fromNum = currNum + 1;
            break;
        case '<' :
            toNum = currNum - 1;
            break;
    }
}