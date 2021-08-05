'use strict';

//lesson01
let money;

let income;

let addExpenses;

let deposit;

let mission;

let period;

alert('Front-end');

console.log('Front-end is coming');

//lesson02
const money = 50000,
	income = 'freelance',

	addExpenses = 'Car, Wife, AgainWife',

	deposit = false,

	mission = 100000,

	period = 12,

	budgetDay = money / 30;

console.log(typeof money, typeof income, typeof deposit);

console.log(addExpenses.length);

console.log('Период равен ' + period + ' месяцев.' + ' Цель заработать ' + mission + ' долларов.');

console.log(addExpenses.toLowerCase(). split(', '));

console.log(budgetDay);

//lesson03
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

//lesson04
const income = 'freelance',
	mission = 100000,
	money = +prompt('Ваш месячный доход?'),
	deposit = confirm('Есть ли у вас депозит в банке?'),
	addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую'),
	exp1 = prompt('Введите обязательную статью расходов?', 'Кредит'),
	cost1 = +prompt('Во сколько это обойдется?'),
	exp2 = prompt('Введите обязательную статью расходов?', 'Отдых'),
	cost2 = +prompt('Во сколько это обойдется?'),
	accumulatedMonth = getAccumulatedMonth(),
	budgetDay = accumulatedMonth / 30;

const getExpensesMonth = function(){
	return cost1 + cost2;
};
const getTargetMonth = function(){
	return mission / accumulatedMonth;
};
const getStatusIncome = function(){
	if (budgetDay>=1200){
		return alert('У вас высокий уровень дохода');
	} else if (600<=budgetDay){
		return alert('У вас средний уровень дохода');
	} else if (budgetDay>=0){
		return alert('К сожалению у вас уровень дохода ниже среднего');
	}else if (budgetDay<0){
		return alert('Что то пошло не так');
	}
};

function showTypeOf(data){
	console.log(data, typeof(data));
}
function getAccumulatedMonth(){
	return money - (cost1 + cost2);
}

showTypeOf(money);
console.log(getExpensesMonth());
console.log(accumulatedMonth);
console.log(getTargetMonth());
getStatusIncome();
