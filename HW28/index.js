/*
 1) Реализовать класс, описывающий окружность. В классе должны быть следующие компоненты:

- поле, хранящее радиус окружности;
- get-свойство, возвращающее радиус окружности;
- set-свойство, устанавливающее радиус окружности;
- get-свойство, возвращающее диаметр окружности;
- метод, вычисляющий площадь круга, ограниченного такой окружностью;
- метод, вычисляющий длину окружности.
Продемонстрировать работу свойств и методов.
*/

class Circle {
    constructor (r) {
        if (r <= 0) {
            console.log("Radius must be > 0");
            return;
        }
        this.r = r;
    }
    get radius() {
        return this.r;
    }
    set radius(r) {
        this.r = r;
    }
    get diameter() {
        return this.r * 2;
    }
    area() {
        return (Math.PI * (this.r ** 2)).toFixed(2);
    }
    circleLength() {
        return (2 * Math.PI * this.r).toFixed(2);
    }
}

const o = new Circle (6);
console.log(o);
console.log(o.diameter);
console.log(o.area());
console.log(o.circleLength());
// 2) Реализовать класс, описывающий простой маркер. В классе должны быть следующие компоненты:
// поле, которое хранит цвет маркера;
// поле, которое хранит количество чернил в маркере (в процентах);
// метод для печати (метод принимает строку и выводит текст соответствующим цветом; текст выводится до тех пор, пока в маркере есть чернила; один не пробельный символ – это 0,5% чернил в маркере).
// Реализовать класс, описывающий заправляющийся маркер, унаследовав его от простого маркера и добавив метод для заправки маркера.
// Продемонстрировать работу написанных методов.
class Marker {
    constructor (color, inkPercent) {
        this.color = color;
        this.inkPercent = inkPercent;
    }
    print(line) {
        let content = document.getElementById('content');
        console.log(content);

        for(let i = 0; i < line.length; i++) {
            if (this.inkPercent !== 0) {
                if (line[i] === ' ') {
                    this.inkPercent += 0.5;
                }
                content.innerHTML += line[i];
                content.style.color = this.color;
                this.inkPercent -= 0.5;
            } else {
                document.write('Marker is over');
                break;
            }
        }
    }
}

const marker = new Marker('green', 5);
console.log(marker);

class FilledMarker extends Marker {
}

let marker2 = new FilledMarker ('red', 60);
let text = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis quibusdam dolorum molestias nulla vitae, aliquam mollitia deleniti laudantium cupiditate ipsam.';

marker2.print(text);

document.body.setAttribute("style", "font-size: 18px; text-align: center;");

//3) Реализовать класс Employee, описывающий работника, и создать массив работников банка.
//Реализовать класс EmpTable для генерации HTML-кода таблицы со списком работников банка.
//Массив работников необходимо передавать через конструктор, а получать HTML-код с помощью метода getHtml().
//Создать объект класса EmpTable и вывести на экран результат работы метода getHtml().
class Employee {
    constructor(name, job) {
        this.name = name;
        this.job = job;
    }
}

class EmpTable {
    constructor(employees) {
        this.employess = employees;
    }

    getHTML() {
        let table = '<table>\n'
        table += '<tr>\n'
        table += '<th>Name</th>\n'
        table += '<th>Job description</th>\n'
        table += '</tr>\n'
        for (let currEmp of this.employess) {
            table += '<tr>\n'
            table += '<td>' + currEmp.name + '</td>\n'
            table += '<td>' + currEmp.job + '</td>\n'
            table += '</tr>\n'
        }
        table += '</table>';
        return table
    }
}

let employees = [
    new Employee("Edik", 'kassir'),
    new Employee("Medvedik", 'uborshik'),
    new Employee("Vasya", 'guard'),
    new Employee("Petya", 'kassir'),
];

let table = new EmpTable(employees);
console.log(table.getHTML());