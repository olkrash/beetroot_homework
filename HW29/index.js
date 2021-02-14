'use strict';
// 1. Создать страницу, которая выводит нумерованный список песен:

const playList = [
    {
        author: "LED ZEPPELIN",
        song: "STAIRWAY TO HEAVEN"
    },
    {
        author: "QUEEN",
        song: "BOHEMIAN RHAPSODY"
    },
    {
        author: "LYNYRD SKYNYRD",
        song: "FREE BIRD"
    },
    {
        author: "DEEP PURPLE",
        song: "SMOKE ON THE WATER"
    },
    {
        author: "JIMI HENDRIX",
        song: "ALL ALONG THE WATCHTOWER"
    },
    {
        author: "AC/DC",
        song: "BACK IN BLACK"
    },
    {
        author: "QUEEN",
        song: "WE WILL ROCK YOU"
    },
    {
        author: "METALLICA",
        song: "ENTER SANDMAN"
    }
];

const content = document.getElementById("content");
const ul = document.createElement('ul');

content.append(ul);

for(let i of playList) {

    const li = document.createElement('li');
    const p = document.createElement('p');

    p.append(i.author, ' : ', i.song);
    li.append(p);
    ul.append(li);
}

/*
2. Создать HTML-страницу с кнопкой "Открыть" и модальным окном.
 На модальном окне должен быть текст и кнопка "Закрыть". Изначально модальное окно не отображается.
 При клике на кнопку "Открыть" появляется модальное окно, на кнопку "Закрыть" – исчезает.
*/

const btn = document.createElement('button');
const span = document.createElement('span');
const contentModal = document.getElementById('content-modal');
span.textContent = "Open";
btn.append(span);
contentModal.append(btn);

btn.addEventListener('click', () => {
    const modal = document.createElement('div')
    modal.setAttribute('id', 'modal');

    const modalText = document.createElement('p');
    modalText.textContent = "Nothing";
    modal.append(modalText);

    const closeBtn = document.createElement('button');
    const closeBtnText = document.createElement('span');
    closeBtnText.textContent = "Close";
    closeBtn.append(closeBtnText);
    modal.append(closeBtn);
    contentModal.append(modal);

    btn.disabled = true;
    closeBtn.addEventListener('click', () => {
        modal.remove();
        btn.disabled = false;
    });
});

/*
 3. Создать HTML-страницу со светофором и кнопкой, которая переключает светофор на следующий цвет.
*/

const red = document.getElementById('red');
const yellow = document.getElementById('yellow');
const green = document.getElementById('green');
const toggle = document.getElementById('toggle');

toggle.addEventListener('click', () => {

    if (red.classList.contains('red')) {
        red.classList.remove('red');
        yellow.classList.add('yellow');
    } else if (yellow.classList.contains('yellow')) {
        yellow.classList.remove('yellow');
        green.classList.add('green');
    } else if (green.classList.contains('green')) {
        green.classList.remove('green');
        red.classList.add('red');
    }

});
