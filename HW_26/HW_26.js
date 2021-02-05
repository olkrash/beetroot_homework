// 1. Создать объект, описывающий автомобиль (производитель, модель, год выпуска,
//средняя скорость), и следующие функции для работы с этим объектом:
function Car(vendor, model, year, speed) {
    this.vendor = vendor;
    this.model = model;
    this.year = year;
    this.speed = speed;
    // Функция для вывода на экран информации об автомобиле;
    this.print = function () {
        console.log(this.vendor, this.model, this.year, this.speed)
    };

    // Функция для подсчета необходимого времени для преодоления переданного
    //расстояния со средней скоростью. Учтите, что через каждые 4 часа дороги
    //водителю необходимо делать перерыв на 1 час.
    this.drive = function (distance) {
        let hours = distance / this.speed;
        let rest = Math.trunc(hours / 4);
        return hours + rest;
    };
}

let myCar = new Car("Nissan", "X-Trail", 2012, 60);
myCar.print();
console.log(myCar.drive(900));

// 2. Создать объект, описывающий время (часы, минуты, секунды), и следующие функции для работы с этим объектом:
function Time(hour, minute, second) {
    this.hour = hour;
    this.minute = minute;
    this.second = second;
    //Функция вывода времени на экран;
    this.print = function () {
        let formatTimeNum = function (num) {
            if (typeof num === 'undefined') {
                return "00";
            }
            if (num > 9) {
                return num.toString();
            }
            return "0" + num.toString();
        }
        console.log(`${formatTimeNum(this.hour)}:${formatTimeNum(this.minute)}:${formatTimeNum(this.second)}`)
    };
    // Функция изменения времени на переданное количество секунд;
    this.addSeconds = function (seconds) {
        //sum all seconds
        let num = this.second + seconds
        if (this.minute > 0) {
            num += this.minute * 60
        }

        if (this.hour > 0) {
            num += this.hour * 3600
        }

        if (num < 60) {
            this.second = num
            this.minute = 0
            this.hour = 0
        } else if (num < 3600) {
            this.second = num % 60;
            this.minute = (num - seconds) / 60;
            this.hour = 0
        }

        //get hours
        let secondsLeft = num % 3600;
        this.hour = (num - secondsLeft) / 3600;
        //get minutes and seconds
        this.second = secondsLeft % 60;
        this.minute = (secondsLeft - this.second) / 60;
    }
    // Функция изменения времени на переданное количество минут;
    this.addMinutes = function (minutes){
        this.addSeconds(minutes * 60);
    }
    // Функция изменения времени на переданное количество часов.
    this.addHours = function (hours){
        this.addSeconds(hours * 3600 );
    }
}

let myTime = new Time(3, 16, 34);
myTime.print();
myTime.addSeconds(-1000);
myTime.print();
myTime.addMinutes(45);
myTime.print();
myTime.addHours(59);
myTime.print();

//Учтите, что в последних 3-х функциях, при изменении одной части времени,
//может измениться и другая. Например, если ко времени «20:30:45» добавить
//30 секунд, то должно получиться «20:31:15», а не «20:30:75».


// // 3.Создать объект user  со свойствами name, age, role.
// const user = {
//             name: "name",
//     age: age,
//     role: "role",
// };
// //Создать второй объект admin и унаследовать все свойства объекта user , кроме значения
// //свойства role.
// const admin = Object.assign({}, user.age, user.name)
// //Также в объектах должны быть два метода, первый метод length() выводит
// //в консоль количество ключей в объекте,
// //при вызове метода  user.length()  должно отобразиться количество ключей;
// //второй метод checkPermission()  показывает alert с текстом "Access granted"
// //если role === 'admin', и "Access denied" если role === 'user'.
//
//
//
// // 4.Создать функцию createUser() которая создает объект со значениями
// //name, age, height, weight.
// function createUser (name = "Yourname",age = 30,height = 190,weight = 85){
//     return{
//         name,
//         age,
//         height,
//         weight,
//     }
// }
// //Функция должна вызываться так createUser('John', 39, 178, 67)
// console.log(createUser('John', 39, 178, 67));
// //Для свойств age, height, weight должен быть тип number, иначе вывести alert,
// //что неверный тип и объект не должен создаться.
// if (this.age, this.height, this.weight !== Number;)
//     console.log("Alert, these keys should have numeric sentence")
// //Если в функцию не переданы аргументы, вывести аргументы по умолчанию.

