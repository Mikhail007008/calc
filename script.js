'use strict';

const income = 'freelance',
	mission = 100000,
	period = 12,
	money = +prompt('Ваш месячный доход?'),
	addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую'),
	deposit = confirm('Есть ли у вас депозит в банке?'),
	exp1 = prompt('Введите обязательную статью расходов?', 'Кредит'),
	cost1 = +prompt('Во сколько это обойдется?'),
	exp2 = prompt('Введите обязательную статью расходов?', 'Отдых'),
	cost2 = +prompt('Во сколько это обойдется?'),
	budgetMonth = money - (cost1 + cost2),
	result = mission / budgetMonth,
	budgetDay = budgetMonth / 30;

if (budgetDay>=1200){
	alert('У вас высокий уровень дохода');
} else if (600<=budgetDay){
	alert('У вас средний уровень дохода');
} else if (budgetDay>=0){
	alert('К сожалению у вас уровень дохода ниже среднего');
}else if (budgetDay<0){
	alert('Что то пошло не так');
}

console.log(typeof money, typeof income, typeof deposit);
console.log(addExpenses.length);
console.log('Front-end is coming');
console.log('Период равен ' + period + ' месяцев.' + ' Цель заработать ' + mission + ' долларов.');
console.log(addExpenses.toLowerCase(). split(', '));
console.log(budgetDay);
console.log(money);
console.log(addExpenses);
console.log(deposit);
console.log('Бюджет на месяц:', budgetMonth);
console.log('Цель будет достигнута за', Math.ceil(result), 'месяцев');
console.log('Бюджет на день:', Math.floor(budgetDay));