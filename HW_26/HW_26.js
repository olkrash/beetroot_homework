// 1. Создать объект, описывающий автомобиль (производитель, модель, год выпуска,
//средняя скорость), и следующие функции для работы с этим объектом:
function Car(make, model, year, score) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.score = score;
}
const myCar = new Car("Nissan", "X-Trail", 2008, 60);

// function print () {
//     document.write(${car.vendor});
//     document.write(${car.model});
//     document.write(${car.year});
//     document.write(${car.score});
// }
// function dist (distance) {
//     let result = distance / car.score;
//     let relax = 0;
//     result = Math.trunc(result) + (((result - (Math.trunc(result))) * 60) / 100)
//     for (let hour = 1; hour <= result; hour++) {
//         if (hour % 5 === 0) {
//             relax++;
//             result++;
//         }
//     }
//     result = result.toFixed(2).split(".");
//     if (relax === 0) {
//         document.write("Что бы пройти эту дистанцию: ${distance} km. Вам нужно - ${result[0]}h. ${result[1]}m. И вам не понадобится отдых.");
//     } else {
//         document.write("Что бы пройти эту дистанцию: ${distance} km. Вам нужно - ${result[0]}h. ${result[1]}m. ${relax}h. Вы потратили на отдых.");
//
//             }
//
//             }
//
//
//
//             car.print();
//             car.TimeFromDistance(800);

// Функция для вывода на экран информации об автомобиле;
// Функция для подсчета необходимого времени для преодоления переданного
//расстояния со средней скоростью. Учтите, что через каждые 4 часа дороги
//водителю необходимо делать перерыв на 1 час.

// 2. Создать объект, описывающий время (часы, минуты, секунды), и следующие функции для работы с этим объектом:Функция вывода времени на экран;
const timeMachine = {
    time: {
        hour: "hour",
        minute: "minute",
        second: "second",
    }
}
console.log(timeMachine);

// Функция изменения времени на переданное количество секунд;
// Функция изменения времени на переданное количество минут;
// Функция изменения времени на переданное количество часов.
//Учтите, что в последних 3-х функциях, при изменении одной части времени,
//может измениться и другая. Например, если ко времени «20:30:45» добавить
//30 секунд, то должно получиться «20:31:15», а не «20:30:75».
// 3.Создать объект user  со свойствами name, age, role.
const user = {
            name: "name",
    age: age,
    role: "role",
};
//Создать второй объект admin и унаследовать все свойства объекта user , кроме значения
//свойства role.
const admin = Object.assign({}, user.age, user.name)
//Также в объектах должны быть два метода, первый метод length() выводит
//в консоль количество ключей в объекте,
//при вызове метода  user.length()  должно отобразиться количество ключей;
//второй метод checkPermission()  показывает alert с текстом "Access granted"
//если role === 'admin', и "Access denied" если role === 'user'.



// 4.Создать функцию createUser() которая создает объект со значениями
//name, age, height, weight.
function createUser (name = "Yourname",age = 30,height = 190,weight = 85){
    return{
        name,
        age,
        height,
        weight,
    }
}
//Функция должна вызываться так createUser('John', 39, 178, 67)
console.log(createUser('John', 39, 178, 67));
//Для свойств age, height, weight должен быть тип number, иначе вывести alert,
//что неверный тип и объект не должен создаться.
if (this.age, this.height, this.weight !== Number;)
    console.log("Alert, these keys should have numeric sentence")
//Если в функцию не переданы аргументы, вывести аргументы по умолчанию.

