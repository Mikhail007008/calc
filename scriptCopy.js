'use strict';

const buttonStart = document.getElementById('start'),
	buttonCancel = document.getElementById('cancel'),
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
	periodAmount = document.querySelector('.period-amount'),
	main = document.querySelector('.main');

let incomeItems = document.querySelectorAll('.income-items'),
	expensesItems = document.querySelectorAll('.expenses-items');

const AppData = function(){
	this.addIncome = [];
	this.income = {};
	this.expenses = {};
	this.addExpesnses = [];
	this.deposit = false;
	this.percentDeposit = 0;
	this.moneyDeposit = 0;
	this.budget = 0;
	this.budgetDay = 0;
	this.budgetMonth = 0;
	this.expensesMonth = 0;
	this.foo = function(){
		console.log(this);
	};
};

AppData.prototype.start = function() {

	this.budget = +salaryAmount.value;

	this.getExpenses();
	this.getIncome();
	this.getExpensesMonth();
	this.getAddExpenses();
	this.getAddIncome();
	this.getBudget();
	this.calcSavedMoney();
	this.showResult();
	this.foo();

	let inputsText = main.querySelectorAll('[type=text]');
	for (var i = 0; i < inputsText.length; i++){
		inputsText[i].disabled = true;
	}
	buttonStart.style.display = 'none';
	buttonCancel.style.display = 'initial';
	buttonStart.disabled = true;

};

AppData.prototype.reset = function() {
	let inputs = main.querySelectorAll('input'),
		inputsText = main.querySelectorAll('[type=text]');

		for (let i = 0; i < inputs.length; i++) {
			inputs[i].value = '';
		}
		for (var i = 0; i < inputsText.length; i++){
			inputsText[i].disabled = false;
		}
		
		for(let i = 1; i < incomeItems.length; i++){
			incomeItems[i].parentNode.removeChild(incomeItems[i]);
		}

		for(let i = 1; i < expensesItems.length; i++){
			expensesItems[i].parentNode.removeChild(expensesItems[i]);
		}

		buttonStart.style.display = 'initial';
		buttonCancel.style.display = 'none';

		this.budget = 0;
		this.addIncome = [];
		this.income = {};
		this.expenses = {};
		this.addExpesnses = [];
		this.deposit = false;
		this.percentDeposit = 0;
		this.moneyDeposit = 0;
		this.budget = 0;
		this.budgetDay = 0;
		this.budgetMonth = 0;
		this.expensesMonth = 0;

		periodSelect.value = 0;
		periodAmount.innerHTML = periodSelect.value;

};

AppData.prototype.showResult = function(){
	this.showResult.bind(AppData);
	resultTotalBudgetMonthValue.value = this.budgetMonth;
	budgetDayValue.value = Math.ceil(this.budgetDay);
	expensesMonthValue.value = this.expensesMonth;
	additionalExpensesValue.value = this.addExpesnses.join(', ');
	additionalIncomeValue.value = this.addIncome.join(', ');
	targetMonthValue.value = Math.ceil(this.getTargetMonth());
	periodAmount.value = periodSelect.value;
	periodSelect.addEventListener('input', this.calcSavedMoney.bind(this));
};

AppData.prototype.addExpensesBlock = function(){
	let cloneExpensesItem = expensesItems[0].cloneNode(true);
	expensesItems[0].parentNode.insertBefore(cloneExpensesItem, plus2);
	expensesItems = document.querySelectorAll('.expenses-items');

	if(expensesItems.length === 3){
		plus2.style.display = 'none';
	}
};

AppData.prototype.getExpenses = function(){
	expensesItems.forEach(function(item){
		let itemExpenses = item.querySelector('.expenses-title').value;
		let cashExpenses = item.querySelector('.expenses-amount').value;

		if(itemExpenses !=='' && cashExpenses !== ''){
			this.expenses[itemExpenses, this] = cashExpenses;
		}
	}, this);
};

AppData.prototype.addIncomeBlock = function(){
	let cloneIncomeItem = incomeItems[0].cloneNode(true);
	incomeItems[0].parentNode.insertBefore(cloneIncomeItem, plus1);
	incomeItems = document.querySelectorAll('.income-items');

	if(incomeItems.length === 3){
		plus1.style.display = 'none';
	}
};

AppData.prototype.getIncome = function(){
	incomeItems.forEach(function(item){
		let itemIncomes = item.querySelector('.income-title').value;
		let cashIncomes = item.querySelector('.income-amount').value;

		if(itemIncomes !=='' && cashIncomes !==''){
			this.income[itemIncomes] = cashIncomes;
		}
	}, this);
};

AppData.prototype.getAddExpenses = function(){
	let addExpesnses = additionalExpensesItem.value.split(',');
	addExpesnses.forEach(function(item){
		item = item.trim();
		if(item !== ''){
			this.addExpesnses.push(item);
		}
	}, this);
};

AppData.prototype.getAddIncome = function(){
	additionalIncomeItem.forEach(function(item){
		let itemValue = item.value.trim();
		if(itemValue !== ''){
			this.addIncome.push(itemValue);
		}
	}, this);
};

AppData.prototype.getExpensesMonth = function(){
	for (let key in this.expenses) {
		this.expensesMonth += +this.expenses[key];
	}
};

AppData.prototype.getBudget = function(){
	for(let key in this.income){
		this.budget += +this.income[key];
	}
	this.budgetMonth = this.budget - this.expensesMonth;
	this.budgetDay = this.budgetMonth / 30;
};

AppData.prototype.getTargetMonth = function(){
	return targetAmount.value / this.budgetMonth;
};

AppData.prototype.calcSavedMoney = function(){
	incomePeriodValue.value = this.budgetMonth * periodSelect.value;
};

AppData.prototype.buttonStartOn = function(){
	if(salaryAmount.value !== ''){
		buttonStart.disabled = false;

	}else{
		buttonStart.disabled = true;
	}
};

AppData.prototype.rangeFunc = function(event){
	periodAmount.textContent = event.target.value;
};

AppData.prototype.eventListeners = function(){
	buttonStart.disabled = true;
	salaryAmount.addEventListener('input', this.buttonStartOn.bind(this));
	buttonStart.addEventListener('click', this.start.bind(this));
	buttonCancel.addEventListener('click', this.reset.bind(this));
	plus1.addEventListener('click', this.addIncomeBlock.bind(this));
	plus2.addEventListener('click', this.addExpensesBlock.bind(this));
	periodSelect.addEventListener('input', this.rangeFunc.bind(this));
};

const appData = new AppData();

appData.eventListeners();
