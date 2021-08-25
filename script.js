'use strict';

const book = document.querySelectorAll('.book'),
	aHref = document.querySelectorAll('a'),
	ulCollection = document.querySelectorAll('ul'),
	liCollection = document.querySelectorAll('li'),
	newEl = document.createElement('li'),
	ad = document.querySelector('.adv');

ad.remove();
book[2].before(book[0], book[4], book[3], book[5]);

document.body.style.backgroundImage = 'url(./image/you-dont-know-js.jpg)';

aHref[4].textContent = 'Книга 3. this и Прототипы Объектов';

ulCollection[0].append(liCollection[4], liCollection[5], liCollection[7], liCollection[9], liCollection[2], liCollection[10]);


ulCollection[5].prepend(liCollection[46], liCollection[50]);
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
