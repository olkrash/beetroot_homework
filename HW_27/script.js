// 1. Создать массив «Список покупок». Каждый элемент массива является объектом, который содержит название продукта, необходимое количество и куплен или нет. Написать несколько функций для работы с таким массивом.

let shoppingList = [
    {
        name: "bread",
        quantity: 2,
        status: "bought"
    },
    {
        name: "milk",
        quantity: 3,
        status: "non-bought"
    },
    {
        name: "meat",
        quantity: 1,
        status: "bought"
    },
]

//Вывод всего списка на экран таким образом, чтобы сначала шли некупленные продукты, а потом – купленные.
function sortCart() {
    shoppingList.sort(function (a, b) {
        if (a.status > b.status) {
            return -1;
        }
        if (a.status < b.status) {
            return 1;
        }
        return 0;
    })
}

//Добавление покупки в список. Учтите, что при добавлении покупки с уже существующим в списке продуктом, необходимо увеличивать количество в существующей покупке, а не добавлять новую.
function addToCart(name, quantity) {
    for (let index in shoppingList) if (shoppingList[index].name === name) {
        shoppingList[index].quantity += quantity;
        return
    }
    shoppingList.push({
        name: name,
        quantity: quantity,
        status: "non-bought"
    })
}

// Покупка продукта. Функция принимает название продукта и отмечает его как купленный.
function buyCart(name, status) {
    for (let index in shoppingList) if (shoppingList[index].name === name) shoppingList[index].status = 'bought';
}

addToCart('ginger', 1);
buyCart('milk');
sortCart();
console.log(shoppingList);

/*2. Создать массив, описывающий чек в магазине. Каждый элемент массива состоит из названия товара, количества и цены за единицу товара. Написать следующие функции:
Распечатка чека на экран;
Подсчет общей суммы покупки;
Получение самой дорогой покупки в чеке;
Подсчет средней стоимости одного товара в чеке.*/
let buysArr = [
    {
        name: 'item1',
        quantity: 1,
        priceperquantity: 1
    },
    {
        name: 'item2',
        quantity: 1,
        priceperquantity: 2
    },
    {
        name: 'item3',
        quantity: 1,
        priceperquantity: 3
    },
    {
        name: 'item4',
        quantity: 1,
        priceperquantity: 4
    },
]
console.log(buysArr);

function theSumOfBought(buys) {
    let total = 0;
    buys.map((item) => {
        return total = total + (item.quantity * item.priceperquantity);
    })
    return total;
}

function theMostExpensiveBought(buys) {
    let maxCost = 0;
    for (let index in buys)
        if (buys[index].priceperquantity > maxCost) {
            maxCost = buys[index].priceperquantity
        }
    return maxCost;

}

function theAveregeSum(buys) {
    let total = 0;
    for (let index in buys) {
        total += buys[index].priceperquantity
    }
    return total / buys.length;
}

console.log(theSumOfBought(buysArr));
console.log(theMostExpensiveBought(buysArr));
console.log(theAveregeSum(buysArr));

//3. Создать массив CSS-стилей (цвет, размер шрифта, выравнивание, подчеркивание и т. д.). Каждый элемент массива – это объект, состоящий из двух свойств:
//название стиля и значение стиля. Написать функцию, которая принимает массив стилей и текст, и выводит этот текст с помощью document.write() в тегах <p></p>,
//добавив в открывающий тег атрибут style со всеми стилями, перечисленными в массиве.
const style = [
    {
        name: "text-align",
        value: "center"
    },
    {
        name: "text-transform",
        value: "capitalize"
    },
    {
        name: "text-overflow",
        value: "ellipsis"
    },
    {
        name: "font-size",
        value: "1rem"
    },
    {
        name: "color",
        value: "#555555"
    },
    {
        name: "letter-spacing",
        value: "2px"
    },
    {
        name: "font-weight",
        value: "300"
    },
    {
        name: "border",
        value: "1px solid red"
    },
    {
        name: "font-style",
        value: "oblique"
    },
    {
        name: "font-stretch",
        value: "extra-expanded"
    }
];
const text = `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    Reprehenderit, rem sit eaque temporibus sint explicabo.
    Quod placeat quos inventore quas magni architecto, cupiditate assumenda enim,
    eum exercitationem ex sunt iste?`;

let styleText = (arr = [], text = '') => {
    document.write('<p style = "');

    for (let i of arr) {
        document.write(`${i.name}: ${i.value}; `);
    }

    document.write('">' + text + "</p>");
};

styleText(style, text);

//4. Создать массив аудиторий академии. Объект-аудитория состоит из названия, количества посадочных мест (от 10 до 20)
//и названия факультета, для которого она предназначена. Написать несколько функций для работы с ним. Вывод на экран всех аудиторий;
// Вывод на экран аудиторий для указанного факультета;
// Вывод на экран только тех аудиторий, которые подходят для переданной группы. Объект-группа состоит из названия, количества студентов и названия факультета;
// Функция сортировки аудиторий по количеству мест;
// Функция сортировки аудиторий по названию (по алфавиту).
let academyRooms = [
    {
        name: "d",
        places: 14,
        faculty: 'Engineering'
    },
    {
        name: "c",
        places: 15,
        faculty: 'Software'
    },
    {
        name: "b",
        places: 16,
        faculty: 'IT'
    },
    {
        name: "a",
        places: 17,
        faculty: 'Back-end'
    },
]

const group = {
    name: "FE2020",
    count: "15",
    faculty: "Software",
};

function showAcademyRoom(arr) {
    let academyRooms = [];
    for (let i of arr) {
        academyRooms.push(i.name);
    }
    return `All rooms: ${academyRooms.join('; ')}.`;
}

function showAcademyRooms(arr, group) {
    let academyRooms = [];
    for (const i of arr) {
        if (i.faculty.toLowerCase() === group.faculty.toLowerCase()) {
            academyRooms.push(i.name);
        }
    }
    return `All rooms for "${group.faculty}" faculty: ${academyRooms.join('; ')}.`;
}

function sortAcademyRoomsByPlaces(arr) {
    return arr.sort(function (a, b) {
        return parseFloat(a.places) - parseFloat(b.places);
    });
}

function sortAcademyRoomsByNames(arr) {
    return arr.sort(function (a, b) {
        if (a.name < b.name) {
            return -1;
        }
        if (a.name > b.name) {
            return 1;
        }
        return 0;
    });
}

console.log(showAcademyRoom(academyRooms));
console.log(showAcademyRooms(academyRooms, group));
console.log(sortAcademyRoomsByPlaces(academyRooms));
console.log(sortAcademyRoomsByNames(academyRooms));
