'use strict';

let money = prompt("Ваш бюджет на месяц?", 'Введите сумму'),
    time = prompt("Введите дату в формате YYYY-MM-DD", 'YYYY-MM-DD');

let appData = {
    cash: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    saving: false,
};

let x = console.log(prompt("Введите обязательную статью расходов в этом месяце", '')),
    y = console.log(prompt("Во сколько обойдётся?", '')),
    x1 = console.log(prompt("Введите обязательную статью расходов в этом месяце", '')),
    y1 = console.log(prompt("Во сколько обойдётся?", ''));


appData.expenses.x=y;
appData.expenses.x1=y1;

alert(appData.cash/30);