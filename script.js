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

const appData = {
	addIncome: [],
	income: {},
	expenses: {},
	addExpesnses: [],
	deposit: false,
	percentDeposit: 0,
	moneyDeposit: 0,
	mission: 50000,
	period: 12,
	budget: money,
	budgetDay: 0,
	budgetMonth: 0,
	expensesMonth: 0,
	buttonStart: document.getElementById('start'),
	plus1: document.getElementsByTagName('button')[0],
	plus2: document.getElementsByTagName('button')[1],
	checkbox: document.querySelector('#deposit-check'),
	additionalIncomeItem: document.querySelectorAll('.additional_income-item'),
	budgetDayValue: document.getElementsByClassName('result-total')[1],
	expensesMonthValue: document.getElementsByClassName('result-total')[2],
	additionalIncomeValue: document.getElementsByClassName('result-total')[3],
	additionalExpensesValue: document.getElementsByClassName('result-total')[4],
	incomePeriodValue: document.getElementsByClassName('result-total')[5],
	targetMonthValue: document.getElementsByClassName('result-total')[6],
	salaryAmount: document.querySelectorAll('input')[0],
	incomeTitle: document.querySelectorAll('input')[1],
	incomeAmount: document.querySelectorAll('input')[2],
	expensesTitle: document.querySelectorAll('input')[5],
	expensesAmount: document.querySelectorAll('input')[6],
	additionalExpensesItem: document.querySelectorAll('input')[7],
	depositAmount: document.querySelectorAll('input')[9],
	depositPercent: document.querySelectorAll('input')[10],
	targetAmount: document.querySelectorAll('input')[11],
	resultTotalBudgetMonthValue: document.querySelectorAll('input')[13],
	range: document.querySelector('[type="range"]'),
	asking: function(){

		if(confirm('Есть ли у вас дополнительный заработок?')){
			let itemIncome,
				cashIncome;
			do {
			itemIncome = prompt('Какой у вас дополнительный заработок?', 'Таксую');
			}
			while (isNumber(itemIncome));
			do{
			cashIncome = +prompt('Сколько в месяц вы на этом зарабатываете?', '10000');
			}
			while (!isNumber(cashIncome));

			appData.income[itemIncome] = cashIncome;
		}

		const addExpesnses = prompt('Перечислите возможные расходы через запятую');
			appData.addExpesnses = addExpesnses.toLowerCase().split(',');
			appData.deposit = confirm('Есть ли у вас депозит в банке?');
		let firstQuest = 0,
			secondQuest = 0;
			
		for (let i = 0; i < 2; i ++) {
			do {
				firstQuest = prompt('Введите обязательную статью расходов?');
			}
			while(isNumber(firstQuest));
			do{
				secondQuest = +prompt('Во сколько это обойдется?');	
				appData.expenses[firstQuest] = secondQuest;		
			}
				while((!isNumber(secondQuest)));
		}
	},

	getExpensesMonth: function(){
		for (let key in appData.expenses) {
			appData.expensesMonth += appData.expenses[key];
		}
			return appData.expensesMonth;
	},

	getBudget: function(){
		appData.budgetMonth = appData.budget - appData.expensesMonth;
		appData.budgetDay = appData.budgetMonth / 30;
	},

	getTargetMonth: function(){
		return appData.mission / appData.budgetMonth;
	},

	getStatusIncome: function(){
		if (appData.budgetDay>=1200){
			return console.log('У вас высокий уровень дохода');
		} else if (600<=appData.budgetDay){
			return console.log('У вас средний уровень дохода');
		} else if (appData.budgetDay>=0){
			return console.log('К сожалению у вас уровень дохода ниже среднего');
		}else if (appData.budgetDay<0){
			return console.log('Что то пошло не так');
		}
	},

	infoTarget: function(){
		while(appData.getTargetMonth() < 0){
			console.log('Цель не будет достигнута');
			break;
		}
		while(appData.getTargetMonth() > 0){
			console.log(`Цель будет достигнута за ${Math.ceil(appData.getTargetMonth())} месяца`);
			break;
		}
	},

	getInfoDeposit: function(){
		if(appData.deposit){
			do {
				appData.percentDeposit = prompt('Какой годовой процент?', '10');
			}
			while(!isNumber(appData.percentDeposit));
			do {
				appData.moneyDeposit = prompt('Какая сумма заложена?', '10000');
			}
			while(!isNumber(appData.moneyDeposit));
		}
	},

	calcSavedMoney: function(){
		return appData.budgetMonth * appData.period;
	}
};

appData.asking();
appData.getInfoDeposit();
appData.getExpensesMonth();
console.log('Расходы за месяц: ' + appData.expensesMonth);
appData.getBudget();
appData.infoTarget();
appData.getStatusIncome();

const fixMass = function(str){
	return str
	.map(
		(word, index) => word[0].toUpperCase() + word.slice(1)
	)
	.join(', ');
}; 

console.log(fixMass(appData.addExpesnses));

for(let key in appData){
	console.log('Наша программа включает в себя данные: ' + 'Свойство: ' + key + ' Значение: ' + appData[key]);}
