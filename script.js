'use strict';

const isNumber = function(n) {
	return !isNaN(parseFloat(n)) && isFinite(n);
};

const income = 'freelance',
	mission = 100000,
	period = 12,
	deposit = confirm('Есть ли у вас депозит в банке?'),
	addExpesnses = prompt('Перечислите возможные расходы через запятую');

let expenses = [],
	money;

const start = function() {
	do{
		money = prompt('Ваш месячный доход?');
	}
	while(!isNumber(money)); 
};
start();

const showTypeOf = function(data){
	console.log(data, typeof data);
};
showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);

console.log(addExpesnses.toLocaleLowerCase().split(','));

const getExpensesMonth = function(){
	let sum = 0;
	for (let i = 0; i < 2; i ++) {
		expenses [i] = prompt('Введите обязательную статью расходов?');
		do{
			sum = prompt('Во сколько это обойдется?');
		}
			while((!isNumber(sum)));
	}
	console.log(expenses);
	return sum;
};

const expensesAmount = getExpensesMonth();
console.log('Расходы за месяц: ' + expensesAmount);


const getAccumulatedMonth = function(){
	return money - expensesAmount;
};
const accumulatedMonth = getAccumulatedMonth();

const getTargetMonth = function(){
	return mission / accumulatedMonth;
};

const budgetDay = accumulatedMonth / 30;

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

const infoTarget = function(){
	while(getTargetMonth() < 0){
		console.log('Цель не будет достигнута');
		break;
	}
	while(getTargetMonth() > 0){
		console.log(`Цель будет достигнута за ${Math.ceil(getTargetMonth())} месяца`);
		break;
	}
};

infoTarget();
getStatusIncome();