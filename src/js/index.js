//const arr = [5, 5, 5];

//function grvr() {
    
//}

//const str = "dfghhffds";

// установила расширение eslint
// npm init
// npm init @eslint/config

// появились файлы package-lock.json, package.json, .eslintrc.js
// в .eslintrc.js комментирую // "extends": "eslint:recommended",


//урок 21. Логические операторы (33 минуты)


//script.js


// const hamburger = true;
// const fries = true;

// if (hamburger && fries) {
//     console.log('Я сыт!');
// } 
//Я сыт! так как условие выполнено и hamburger true & fries true


// console.log((hamburger && fries)); //true просто вернуло логический тип данных, результат логических операций - логическое булевое значение
// если одно из блюд будет отсутствовать мы получим false


// const hamburger = true;
// const fries = false;

// if (hamburger && fries) {
//     console.log('Я сыт!');
// } //результата нет в консоли потому что условие не выполнилось а блока else нет


// const hamburger = true;
// const fries = false;

// if (hamburger && fries) {
//     console.log('Я сыт!');
// }
// console.log((hamburger && fries)); // false


// const hamburger = 5;
// const fries = 0;

// if (hamburger && fries) {
//     console.log('Я сыт!');
// }
// //ответа нет так как условие не может быть выполнено, это подводит к теме "динамическая типизация в джаваскрипте" которую будем изучать позднее, строка может стать числом, число может стать строкой, что угодно может стать логическим значением
// humburger & fries нужно если сайт будет по продаже товаров, показывать пользователю информацию сколько товаров есть на сайте и что делать если нет картошки и вместо сообщения "я сыт" пользователю будет написано "товар закончился на складе"

// пять сущностей которые всегда будут false: 
// 0, 
// пустая строка "", 
// null(нулевой), 
// undefined(неопределенный), 
// NaN (not a number - не число)
// все остальное всегда будет true

// таблица приоритетов операторов https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Operator_Precedence

// строго равно === это пункт 10,
// логическое И && это пункт 6
// приоритет 20 самый высокий, значит вначале выполнится пункт 10 строго равно, а только потом пункт 6 логическое и, пункт 1 внизу и выполняется самым последним


// const hamburger = 2;
// const fries = 1;

// if (hamburger === 3 && fries === 1) {
//     console.log('Все сыты!');
// } else {
//     console.log('Мы уходим');
// } // так как в кафе есть только 2 гамбургера и 1 картошка, а нам надо 3 гамбургера и 1 картошку - условие не выполнено (мы не получаем что хотим) поэтому - мы уходим. так же можно было в скобках условия if написать (hamburger === 3 && fries)


// const hamburger = 2;
// const fries = 1;

// if (hamburger === 3 && fries === 1) {
//     console.log('Все сыты!');
// } else {
//     console.log('Мы уходим');
// } // так как в кафе есть только 2 гамбургера и 1 картошка, а нам надо 3 гамбургера и 1 картошку - условие не выполнено (мы не получаем что хотим) поэтому - мы уходим. так же можно было в скобках условия if написать (hamburger === 3 && fries)


// оператор И возвращает первое ложное значение на котором он остановил свою работу:
// const hamburger = 3;
// const fries = 1;
// const cola = 0;

// console.log(hamburger === 3 && cola && fries) //0 (это значение колы)

// console.log(1 && 0); //0 так как 1 это всегда true, а 0 это всегда false а значит ноль

// console.log(1 && 5); // true и консоль возвращает последнее значение а это 5

// console.log(null && 5);// null - сравниваем неправду (нул это ничего) и что-то и консоль возвращает первое неправильное значение false

// console.log(0 && 'hdxtyhjx');//0 - сравниваем 0 неправду false и строку и поэтому получаем ноль потому что оператор && и запнулся на первом неправдивом значении


// и запинается на лжи, или запинается на правде


// const hamburger = 3;
// const fries = 0;
// const cola = 0;

// if (hamburger || cola || fries) {
//     console.log('Все довольны!');
// } else {
//     console.log('Мы уходим');
// }
// // Все довольны! (так как нам нужен гамбургер или кола или картошка)


// const hamburger = 0;
// const fries = 0;
// const cola = 0;

// if (hamburger || cola || fries) {
//     console.log('Все довольны!');
// } else {
//     console.log('Мы уходим');
// }
// // Мы уходим (так как условие не выполнилось, нам нужен гамбургер или кола или картошка)


// const hamburger = 0;
// const fries = null;
// const cola = 0;

// if (hamburger || cola || fries) {
//     console.log('Все довольны!');
// } else {
//     console.log('Мы уходим');
// }

// console.log(hamburger | | cola | | fries);
// // 
// Мы уходим 
// null
// последнее значение которое возвращает ложь это fries и его ответ это null


// let johnReport, alexReport, samReport, mariaReport = 'done';
// console.log(johnReport | | alexReport | | samReport | | mariaReport); //done


// приоритет операторов:
// вначале сравнение строго равно === пункт 10
// потом логическое И && пункт 6
// и только потом логическое ИЛИ | | пункт 5


// const hamburger = 3;
// const fries = 3;
// const cola = 0;
// const nuggets = 2;

// if (hamburger === 3 && cola === 2 | | fries === 3 && nuggets) {
//     console.log('Все довольны');
// } else {
//     console.log('Мы уходим');
// } //Все довольны
// (правда и неправда) или (правда и правда)
// false или true


// const hamburger = 3;
// const fries = 3;
// const cola = 0;
// const nuggets = 2;

// console.log(hamburger === 3 && cola === 2 || fries === 3 && nuggets); //2
// //правда и неправда это false про этот кусок забываем и смотрим на правый кусок там правда и правда, первая правда = 3, вторая правда = 2 и в итоге консольлог возвращает ответом последнюю правду = 2 (сравнивает левый кусок там ложь и правый кусок там два и возвращает первое правдивое выражение = 2)


// самый высокий приоритет у скобок ( )
// например
// console.log(hamburger === 3 && (cola === 2 | | fries === 3) && nuggets);
// то порядок операторов поменяется 
// вначале сравнение (кола=2 нет) или (фри=3 да)


// оператор не !
// console.log(!0); //true
// не ноль
// вначале аргумент к которому он применен он превращает в логический тип данных либо тру либо фолз и после этого оператор возвращает противоположное значение


//доделала урок 21 логические операторы 33 минуты (делала минимум 4 помидора)
//петриченко предлагает сделать в консоли задачи (делала минимум 2 помидора)

//console.log(NaN || 2 || undefined ); //2 так как не число или 2 или неопределенный единственное тру возвращается 2

// console.log( NaN && 2 && undefined ); //NaN так как не число и 2 и неопределенный - И запинается на первой лжи?

//console.log( 1 && 2 && 3 ); //3-1и2и3 вернуло последнее значение?

//console.log( !1 && 2 || !3 ); //false - 
//!-логическое отрицание НЕ 1 (пункт14)
//&&-логическое И (пункт4)
//||-логическое ИЛИ (пункт3)
//!-логическое отрицание НЕ 3 (пункт14)
//вначале читаем НЕ1 И 2 ИЛИ НЕ3 

//console.log( 25 || null && !3 ); //25
//25
//ИЛИ
//null-обозначение отсутствия значения (не ноль) 
//И
//НЕ3
//25 ИЛИ отсуствие значения И НЕ 3 = 25

//console.log( NaN || null || !3 || undefined || 5 );//5
//NaN - не число
//null-обозначение отстуствия значения (не ноль) (умышленное отстуствие значения)
//!3 = НЕ 3
//undefined -не определено значение (неожиданное отстуствие значения)
//5
//не число ИЛИ отсутствует значение ИЛИ не3 ИЛИ не определено значение ИЛИ 5 = 5
//у логического отрицания ! приоритет выше чем у ИЛИ ||

//console.log( NaN || null && !3 && undefined || 5 );//5
//&& логическое И приоритет выше чем у || лигическое ИЛИ
//у НЕ ! самый высокий приоритет
//отсутствие значение И не3 И не определено значение ИЛИ не число ИЛИ 5 = 5

//console.log( 5 === 5 && 3 > 1 || 5 );//true
//> больше пункт 9
//=== строгое равенство пункт 8
//&& логическое И пункт 4
//|| логическое ИЛИ пункт 3
//итого 5 строго равно 5 И 3 больше 1 ИЛИ 5 = true И true ИЛИ 5 = true

// const hamburger = 3;
// const fries = 3;
// const cola = 0;
// const nuggets = 2;

// if (hamburger === 3 && cola || fries === 3 && nuggets) {
// 	console.log('Done!');
// }
//Done! если гамбургеров 3 и 1 кола ИЛИ 3 фри и 1 наггетс = done

// let hamburger;
// const fries = NaN;
// const cola = 0;
// const nuggets = 2;

// if (hamburger || cola || fries === 3 || nuggets) {
// 	console.log('Done!');
// }
//Done! 
//=== строгое равенство пункт 8 (вначале фри = 3 false)
//|| логическое ИЛИ пункт 3 (потом 1 гамбургер фолз ИЛИ 1 кола фолз ИЛИ 3 фри фолз ИЛИ 1 наггетс тру - есть одно тру значит Done)
//переменная hamburger задана через let так как const требует какое-либо начальное значение, если const hamburger;-будет ошибка так как без значения там undefined - неожиданное отстутствие значения

// let hamburger;
// const fries = NaN;
// const cola = 0;
// const nuggets = 2;

// if (hamburger && cola || fries === 3 && nuggets) {
// 	console.log('Done!');
// }
//нет ответа
//=== строгое равенство пункт8 - вначале выполняется фри=3 это фолз
//&& логическое И пункт4 - потом выполняется гамбургер=1 и кола=1 это фолз, фри=3 и 1 наггетс это фолз
//|| логическое ИЛИ пункт3 - потом выполняется фолз или фолз

// const hamburger = 1;
// const fries = 1;
// const cola = 1;
// const nuggets = 2;

// if (hamburger && cola || fries === 3 && nuggets) {
// 	console.log('Done!');
// }
//Done


//урок 23 цикл в цикле и метки


// for (let i = 0; i < 3; i++) {
// 	console.log(i);
// 	for (let j = 0; j < 3; j++) {
// 		console.log(j);
// 	}
// }
// //0 - первый цикл
// //0 - второй цикл
// //1 - второй цикл
// //2 - второй цикл доходит до 2 меньше 3
// //1 - первый цикл 0+1=1
// //0 - начинается второй цикл
// //1 - второй цикл
// //2 - второй цикл доходит до 2 меньше 3
// //2 - начинается первый цикл 1+1=2 (первый цикл дает ответ в последний раз, i = 2 это меньше 3)
// //0 - начинается второй цикл с 0
// //1 - второй цикл
// //2 - второй цикл доходит до j= 2 это меньше 3, а первый цикл не начинается потому что он уже вернул ранее 2 меньше 3


// let result = '';
// const length = 7;

// for (let i = 1; i < length; i++) {

// 	for (let j = 0; j < i; j++) {
// 		result += '*';
// 	}

// 	result += '\n';
// }

// console.log(result);
// //*
// //**
// //***
// //****
// //*****
// //******


// first: for (let i = 0; i < 3; i++) {
// 	console.log(`First level: ${i}`);
// 	for (let j = 0; j < 3; j++) {
// 		console.log(`Second level: ${j}`);
// 		for (let k = 0; k < 3; k++) {
// 			if (k === 2) continue first;
// 			console.log(`Third level: ${k}`);
// 		}
// 	}
// }
// //First level: 0
// //Second level: 0
// //Third level: 0
// //Third level: 1
// //First level: 1
// //Second level: 0
// //Third level: 0
// //Third level: 1
// //First level: 2
// //Second level: 0
// //Third level: 0
// //Third level: 1
// //третий уровень доходит только до 1 меньше 2


// first: for (let i = 0; i < 3; i++) {
// 	console.log(`First level: ${i}`);
// 	for (let j = 0; j < 3; j++) {
// 		console.log(`Second level: ${j}`);
// 		for (let k = 0; k < 3; k++) {
// 			if (k === 2) break first;
// 			console.log(`Third level: ${k}`);
// 		}
// 	}
// }
// //First level: 0
// //Second level: 0
// //Third level: 0
// //Third level: 1
