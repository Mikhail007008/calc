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
