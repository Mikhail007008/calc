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
