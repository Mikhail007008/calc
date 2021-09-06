'use strict';

const book = document.querySelectorAll('.book'),
	aHref = document.querySelectorAll('a'),
	ulCollection = document.querySelectorAll('ul'),
	liCollection = document.querySelectorAll('li'),
	newEl = document.createElement('li'),
	ad = document.querySelector('.adv');

//Удаляем рекламу
ad.remove();
//Восстанавливаем порядок книг
book[2].before(book[0], book[4], book[3], book[5]);
//Меняем картинку заднего фона
document.body.style.backgroundImage = 'url(./image/you-dont-know-js.jpg)';
//Исправляем заголовок в книге 3
aHref[4].textContent = 'Книга 3. this и Прототипы Объектов';
//Восстанавливаем порядок глав во второй книге
book[0].appendChild(ulCollection[0]).append(liCollection[4], liCollection[5], liCollection[7], liCollection[9], liCollection[2], liCollection[10]);
//Восстанавливаем порядок глав в пятой книге
// book[5].children('ul').append(liCollection[53], liCollection[51], liCollection[54], liCollection[56]);
book[5].appendChild(ulCollection[5]).append(liCollection[53], liCollection[51], liCollection[48], liCollection[47],
liCollection[52], liCollection[50]);
// ul[5].append(li[49]);
// ul[5].append(li[50]);
// ul[5].append(li[48]);
// ul[5].append(li[52]);
// ul[5].append(li[53]);
// ul[5].append(li[51]);
// ul[5].append(li[54]);
// ul[5].append(li[56]);
newEl.textContent = 'Глава 8: За пределами ES6';
// ul[2].append(newEl);
// ul[2].append(li[26]);
