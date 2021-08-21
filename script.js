'use strict';

const collection = document.querySelector('.books'),
	elems = document.querySelectorAll('.book'),
	body = document.querySelector('body'),
	a = document.querySelectorAll('a'),
	ul = document.querySelectorAll('ul'),
	li = document.querySelectorAll('li'),
	newEl = document.createElement('li'),
	ad = document.querySelector('.adv');

ad.remove();
collection.prepend(elems[4]);
collection.prepend(elems[0]);
collection.prepend(elems[1]);
collection.append(elems[2]);
body.style.backgroundImage = 'url(./image/you-dont-know-js.jpg)';
a[4].textContent = 'Книга 3. this и Прототипы Объектов';
ul[0].append(li[4]);
ul[0].append(li[5]);
ul[0].append(li[7]);
ul[0].append(li[9]);
ul[0].append(li[2]);
ul[0].append(li[10]);
ul[5].append(li[49]);
ul[5].append(li[50]);
ul[5].append(li[48]);
ul[5].append(li[52]);
ul[5].append(li[53]);
ul[5].append(li[51]);
ul[5].append(li[54]);
ul[5].append(li[56]);
newEl.textContent = 'Глава 8: За пределами ES6';
ul[2].append(newEl);
ul[2].append(li[26]);
