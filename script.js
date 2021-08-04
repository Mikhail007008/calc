'use strict';

let money;
let income;
let addExpenses;
let deposit;
let mission;
let period;

alert('Front-end');
console.log('Front-end is coming');

let budgetDay = money / 30;
money = 50000,
income = 'freelance',
addExpenses = 'Car, Wife, AgainWife',
deposit = false,
mission = 100000,
period = 12;

console.log(typeof money, typeof income, typeof deposit);
console.log(addExpenses.length);
console.log('Front-end is coming');
console.log('Период равен ' + period + ' месяцев.' + ' Цель заработать ' + mission + ' долларов.');
console.log(addExpenses.toLowerCase(). split(', '));
console.log(budgetDay);
	
money = +prompt('Ваш месячный доход?');
console.log(money);

addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
console.log(addExpenses);

deposit = confirm('Есть ли у вас депозит в банке?');
console.log(deposit);

let cost1, cost2;
let exp1 = prompt('Введите обязательную статью расходов?', 'Кредит / Отдых');
	if (exp1 === 'Кредит'){
		 cost1 = +prompt('Во сколько это обойдется?');
	}

let exp2 = prompt('Введите обязательную статью расходов?', 'Кредит / Отдых');
	if (exp2 === 'Отдых'){
		 cost2 = +prompt('Во сколько это обойдется?');
	}

let budgetMonth = money - (cost1 + cost2);
console.log('Бюджет на месяц:', budgetMonth);

let result = mission / budgetMonth;
console.log('Цель будет достигнута за', Math.ceil(result), 'месяцев');

budgetDay = budgetMonth / 30;
console.log('Бюджет на день:', Math.floor(budgetDay));

if (budgetDay>=1200){
	alert('У вас высокий уровень дохода');
} else if (600<=budgetDay){
	alert('У вас средний уровень дохода');
} else if (budgetDay>=0){
	alert('К сожалению у вас уровень дохода ниже среднего');
}else if (budgetDay<0){
	alert('Что то пошло не так');
}
