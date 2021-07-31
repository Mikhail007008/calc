const money = 50000,
	income = 'freelance',

	addExpenses = 'Car, Wife, AgainWife',

	deposit = false,

	mission = 100000,

	period = 12,

	budgetDay = money / 12;

	console.log(typeof money, typeof income, typeof deposit);

	console.log(addExpenses.length);
	
	console.log('Период равен ' + period + ' месяцев.' + ' Цель заработать ' + mission + ' долларов.');
	
	console.log(addExpenses.toLowerCase(). split(', '));
	
	console.log(budgetDay);
	