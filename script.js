'use strict';

const isNumber = function(n) {
	return !isNaN(parseFloat(n)) && isFinite(n);
};

let money;
const start = function() {
	do{
		money = prompt('Ваш месячный доход?');
	}
	while(!isNumber(money)); 
};
start();

let appData = {
	income: {},
	addIncome: [],
	expenses: {},
	addExpesnses: [],
	deposit: false,
	mission: 50000,
	period: 12,
	asking: function(){
		const addExpesnses = prompt('Перечислите возможные расходы через запятую');
			appData.addExpesnses = addExpesnses.toLowerCase().split(',');
			appData.deposit = confirm('Есть ли у вас депозит в банке?');
		let sum = 0;
			
		for (let i = 0; i < 2; i ++) {
			appData.expenses [i] = prompt('Введите обязательную статью расходов?');
			do{
				sum += +prompt('Во сколько это обойдется?');
			}
				while((!isNumber(sum)));
			}
		console.log(appData.expenses);
		return sum;
		}


};
appData.asking();

appData.budget = money;
appData.budgetDay = 0;
appData.budgetMonth = 0;
appData.expensesMonth = 0;
appData.expenses = {};


// appData.getExpensesMonth = function(){

// appData.getExpensesMonth();

const expensesAmount = appData.getExpensesMonth();
console.log('Расходы за месяц: ' + expensesAmount);

appData.getAccumulatedMonth = function(){
	return money - expensesAmount;
};
console.log(appData.getAccumulatedMonth());
// appData.getAccumulatedMonth();

const accumulatedMonth = appData.getAccumulatedMonth();

appData.getTargetMonth = function(){
	return appData.mission / accumulatedMonth;
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
	while(appData.getTargetMonth() < 0){
		console.log('Цель не будет достигнута');
		break;
	}
	while(appData.getTargetMonth() > 0){
		console.log(`Цель будет достигнута за ${Math.ceil(appData.getTargetMonth())} месяца`);
		break;
	}
};

infoTarget();
getStatusIncome();