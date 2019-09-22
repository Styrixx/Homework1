'use strict';

let money = +prompt("Ваш бюджет на месяц?", 'Введите сумму'),
    time = prompt("Введите дату в формате YYYY-MM-DD", 'YYYY-MM-DD');

let appData = {
    cash: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    saving: false,
};

for(let i = 0; i < 2; i++) {
    let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
        b = prompt("Во сколько обойдётся?", '');
    
    if ( (typeof(a)) === 'string'&& (typeof(a)) !=null && (typeof(b)) !=null
        && a != '' && b != '' && a.length < 50) {
        console.log("done");
        appData.expenses[a] = b;  
    } else {

    }
};
appData.moneyPerDay = appData.cash/30;

//let i = 0;
//while (i < 2) {
//    let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
//        b = prompt("Во сколько обойдётся?", '');
//i++;
//}

// let i=0;
// switch (i) {
//  case 0:
//    let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
//        b = prompt("Во сколько обойдётся?", '');
//  case 1:
//    let c = prompt("Введите обязательную статью расходов в этом месяце", ''),
//        d = prompt("Во сколько обойдётся?", '');
//    break;
// }

alert("Ежедневный бюджет: " + appData.moneyPerDay);

if(appData.moneyPerDay < 100) {
    console.log("Минимальный уровень достатка")
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log("Средний уровень достатка");
} else if(appData.moneyPerDay >2000) {
    console.log("Высокий уровень достатка");
}else {
    console.log("Произошла ошибка")
}