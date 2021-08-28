'use strict';

const buttonStart = document.getElementById('start'),
	plus1 = document.getElementsByTagName('button')[0],
	plus2 = document.getElementsByTagName('button')[1],
	checkbox = document.querySelector('#deposit-check'),
	additionalIncomeItem = document.querySelectorAll('.additional_income-item'),
	budgetDayValue = document.getElementsByClassName('budget_day-value')[0],
	expensesMonthValue = document.getElementsByClassName('expenses_month-value')[0],
	additionalIncomeValue = document.getElementsByClassName('result-total')[3],
	additionalExpensesValue = document.getElementsByClassName('result-total')[4],
	incomePeriodValue = document.getElementsByClassName('result-total')[5],
	targetMonthValue = document.getElementsByClassName('result-total')[6],
	salaryAmount = document.querySelector('.salary-amount'),
	incomeTitle = document.querySelector('.income-items input[class=income-title]'),
	expensesTitle = document.querySelector('div.expenses-items input[class=expenses-title]'),
	additionalExpensesItem = document.querySelector('.additional_expenses-item'),
	depositAmount = document.querySelector('.deposit-amount'),
	depositPercent = document.querySelector('.deposit-percent'),
	targetAmount = document.querySelector('.target-amount'),
	resultTotalBudgetMonthValue = document.getElementsByClassName('budget_month-value')[0],
	periodSelect = document.querySelector('[type=range]'),
	periodAmount = document.querySelector('.period-amount');

let incomeItems = document.querySelectorAll('.income-items'),
	expensesItems = document.querySelectorAll('.expenses-items');

const appData = {
	addIncome: [],
	income: {},
	expenses: {},
	addExpesnses: [],
	deposit: false,
	percentDeposit: 0,
	moneyDeposit: 0,
	budget: 0,
	budgetDay: 0,
	budgetMonth: 0,
	expensesMonth: 0,

	start: function() {
		appData.budget = +salaryAmount.value;

		appData.getExpenses();
		appData.getIncome();
		appData.getExpensesMonth();
		appData.getAddExpenses();
		appData.getAddIncome();
		appData.getBudget();
		appData.calcSavedMoney();
		appData.showResult();
	},

	showResult: function(){
		resultTotalBudgetMonthValue.value = appData.budgetMonth;
		budgetDayValue.value = Math.ceil(appData.budgetDay);
		expensesMonthValue.value = appData.expensesMonth;
		additionalExpensesValue.value = appData.addExpesnses.join(', ');
		additionalIncomeValue.value = appData.addIncome.join(', ');
		targetMonthValue.value = Math.ceil(appData.getTargetMonth());
		periodAmount.value = periodSelect.value;
		periodSelect.addEventListener('input', appData.calcSavedMoney);
	},

	addExpensesBlock: function(){
		let cloneExpensesItem = expensesItems[0].cloneNode(true);
		expensesItems[0].parentNode.insertBefore(cloneExpensesItem, plus2);
		expensesItems = document.querySelectorAll('.expenses-items');

		if(expensesItems.length === 3){
			plus2.style.display = 'none';
		}
	},

	getExpenses: function(){
		expensesItems.forEach(function(item){
			let itemExpenses = item.querySelector('.expenses-title').value;
			let cashExpenses = item.querySelector('.expenses-amount').value;

			if(itemExpenses !=='' && cashExpenses !== ''){
				appData.expenses[itemExpenses] = cashExpenses;
			}
		});
	},

	addIncomeBlock: function(){
		let cloneIncomeItem = incomeItems[0].cloneNode(true);
		incomeItems[0].parentNode.insertBefore(cloneIncomeItem, plus1);
		incomeItems = document.querySelectorAll('.income-items');

		if(incomeItems.length === 3){
			plus1.style.display = 'none';
		}
	},

	getIncome: function(){
		incomeItems.forEach(function(item){
			let itemIncomes = item.querySelector('.income-title').value;
			let cashIncomes = item.querySelector('.income-amount').value;

			if(itemIncomes !=='' && cashIncomes !==''){
				appData.income[itemIncomes] = cashIncomes;
			}
		});
	},

	getAddExpenses: function(){
		let addExpesnses = additionalExpensesItem.value.split(',');
		addExpesnses.forEach(function(item){
			item = item.trim();
			if(item !== ''){
				appData.addExpesnses.push(item);
			}
		});
	},

	getAddIncome: function(){
		additionalIncomeItem.forEach(function(item){
			let itemValue = item.value.trim();
			if(itemValue !== ''){
				appData.addIncome.push(itemValue);
			}
		});
	},

	getExpensesMonth: function(){
		for (let key in appData.expenses) {
			appData.expensesMonth += +appData.expenses[key];
		}
	},

	getBudget: function(){
		for(let key in appData.income){
			appData.budget += +appData.income[key];
		}
		appData.budgetMonth = appData.budget - appData.expensesMonth;
		appData.budgetDay = appData.budgetMonth / 30;
	},

	getTargetMonth: function(){
		return targetAmount.value / appData.budgetMonth;
	},

	calcSavedMoney: function(){
		incomePeriodValue.value = appData.budgetMonth * periodSelect.value;
	},

	buttonStartOn: function(){
		if(salaryAmount.value !== ''){
			buttonStart.disabled = false;

		}else{
			buttonStart.disabled = true;
		}
	},

	rangeFunc: function(event){
		periodAmount.textContent = event.target.value;
	}
};

buttonStart.disabled = true;
salaryAmount.addEventListener('input', appData.buttonStartOn);
buttonStart.addEventListener('click', appData.start);
plus1.addEventListener('click', appData.addIncomeBlock);
plus2.addEventListener('click', appData.addExpensesBlock);
periodSelect.addEventListener('input', appData.rangeFunc);
