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
	main = document.querySelector('.main'),
	incomeItems = document.querySelectorAll('.income-items'),
	expensesItems = document.querySelectorAll('.expenses-items');

class AppData {
	constructor(){
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
		this.foo = () =>{
			console.log(this);
		};
	}

	start() {

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

		const inputsText = main.querySelectorAll('[type=text]');
		for (let i = 0; i < inputsText.length; i++){
			inputsText[i].disabled = true;
		}
		buttonStart.style.display = 'none';
		buttonCancel.style.display = 'initial';
		buttonStart.disabled = true;

	}

	reset() {
		const inputs = main.querySelectorAll('input'),
			inputsText = main.querySelectorAll('[type=text]');

			for (let i = 0; i < inputs.length; i++) {
				inputs[i].value = '';
			}
			for (let i = 0; i < inputsText.length; i++){
				inputsText[i].disabled = false;
			}
			
			for(let i = 1; i < this.incomeItems.length; i++){
				this.incomeItems[i].parentNode.removeChild(this.incomeItems[i]);
			}

			for(let i = 1; i < this.expensesItems.length; i++){
				this.expensesItems[i].parentNode.removeChild(this.expensesItems[i]);
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

	}

	showResult(){
		resultTotalBudgetMonthValue.value = this.budgetMonth;
		budgetDayValue.value = Math.ceil(this.budgetDay);
		expensesMonthValue.value = this.expensesMonth;
		additionalExpensesValue.value = this.addExpesnses.join(', ');
		additionalIncomeValue.value = this.addIncome.join(', ');
		targetMonthValue.value = Math.ceil(this.getTargetMonth());
		periodAmount.value = periodSelect.value;
		periodSelect.addEventListener('input', this.calcSavedMoney.bind(this));
	}

	addExpensesBlock(){
		const cloneExpensesItem = expensesItems[0].cloneNode(true);
		expensesItems[0].parentNode.insertBefore(cloneExpensesItem, plus2);
		this.expensesItems = document.querySelectorAll('.expenses-items');

		if(expensesItems.length === 3){
			plus2.style.display = 'none';
		}
	}

	getExpenses(){
		expensesItems.forEach((item) => {
			const itemExpenses = item.querySelector('.expenses-title').value;
			const cashExpenses = item.querySelector('.expenses-amount').value;

			if(itemExpenses !=='' && cashExpenses !== ''){
				this.expenses[itemExpenses, this] = cashExpenses;
			}
		}, this);
	}

	addIncomeBlock(){
		const cloneIncomeItem = incomeItems[0].cloneNode(true);
		incomeItems[0].parentNode.insertBefore(cloneIncomeItem, plus1);
		this.incomeItems = document.querySelectorAll('.income-items');

		if(incomeItems.length === 3){
			plus1.style.display = 'none';
		}
	}

	getIncome(){
		incomeItems.forEach((item) => {
			const itemIncomes = item.querySelector('.income-title').value;
			const cashIncomes = item.querySelector('.income-amount').value;

			if(itemIncomes !=='' && cashIncomes !==''){
				this.income[itemIncomes] = cashIncomes;
			}
		}, this);
	}

	getAddExpenses(){
		const addExpesnses = additionalExpensesItem.value.split(',');
		addExpesnses.forEach((item) => {
			item = item.trim();
			if(item !== ''){
				this.addExpesnses.push(item);
			}
		}, this);
	}

	getAddIncome(){
		additionalIncomeItem.forEach((item) => {
			const itemValue = item.value.trim();
			if(itemValue !== ''){
				this.addIncome.push(itemValue);
			}
		}, this);
	}

	getExpensesMonth(){
		for (let key in this.expenses) {
			this.expensesMonth += +this.expenses[key];
		}
	}

	getBudget(){
		for(let key in this.income){
			this.budget += +this.income[key];
		}
		this.budgetMonth = this.budget - this.expensesMonth;
		this.budgetDay = this.budgetMonth / 30;
	}

	getTargetMonth(){
		return targetAmount.value / this.budgetMonth;
	}

	calcSavedMoney(){
		incomePeriodValue.value = this.budgetMonth * periodSelect.value;
	}

	buttonStartOn(){
		if(salaryAmount.value !== ''){
			buttonStart.disabled = false;

		}else{
			buttonStart.disabled = true;
		}
	}

	rangeFunc(event){
		periodAmount.textContent = event.target.value;
	}

	eventListeners(){
		buttonStart.disabled = true;
		salaryAmount.addEventListener('input', this.buttonStartOn.bind(this));
		buttonStart.addEventListener('click', this.start.bind(this));
		buttonCancel.addEventListener('click', this.reset.bind(this));
		plus1.addEventListener('click', this.addIncomeBlock.bind(this));
		plus2.addEventListener('click', this.addExpensesBlock.bind(this));
		periodSelect.addEventListener('input', this.rangeFunc.bind(this));
	}
}
const appData = new AppData();

appData.eventListeners();