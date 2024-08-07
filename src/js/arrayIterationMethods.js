"use strict";

// // // урок 87 методы перебора массивов 29мин

// // // метод форич
// // // уже знаем
// // // никогда не возвращает новый массив
// // // просто берет массив и его перебирает

// // // метод фильтр
// // // фильтрует элементы внутри массива
// // // получить все имена которые меньше 5 символов
// // // вернет новый массив
// // const names = ["Ivan", "Ann", "Ksenia", "Voldemart"];
// // const shortNames = names.filter(function (name) {
// // 	return name.length < 5;
// // });
// // console.log(shortNames); // [ 'Ivan', 'Ann' ]

// // // метод мэп
// // // взять исходный массив и поменять каждый элемент внутри него
// // let answers = ["IvAn", "AnnA", "HELLO"];
// // answers = answers.map((item) => item.toLowerCase());
// // console.log(answers); //[ 'ivan', 'anna', 'hello' ]

// // // метод сам (булиновое, тру-фолз)
// // // перебор массива и если хотябы один элемент = условию вернуть тру, нет фолз
// // // пример есть ли в массиве хотябы одно число - да
// // const anyone = [4, "qwq", "sfreferf"];
// // console.log(anyone.some((item) => typeof item === "number")); //true

// // // метод эвери (булиновое, тру-фолз)
// // // перебор массива и если все элементы = условию вернуть тру, нет фолз
// // // пример все ли в массиве числа - нет
// // const everyone = [4, "qwq", "sfreferf"];
// // console.log(everyone.every((item) => typeof item === "number")); //false

// // //метод редьюс
// // // схлопывать массив в одно единое целое
// // const arr = [4, 5, 1, 3, 2, 6];
// // const res = arr.reduce((sum, current) => sum + current);
// // //const res = arr.reduce((sum, current) => sum + current, 3);//24
// // console.log(res); //21
// // //                       sum     current
// // //                       0       4
// // //                       4       5
// // //                       9       1
// // //                       10      3
// // //                       13      2
// // //                       15      6
// // //                       21

// // const arrFruits = ["apple", "pear", "plum"];
// // // const resFruits = arrFruits.reduce((sum, current) => sum + current); // applepearplum
// // // const resFruits = arrFruits.reduce((sum, current) => sum + ", " + current); // apple, pear, plum
// // const resFruits = arrFruits.reduce((sum, current) => `${sum}, ${current}`); // apple, pear, plum
// // console.log(resFruits);

// // // кейс
// // const obj = {
// // 	ivan: "persone",
// // 	ann: "persone",
// // 	dog: "animal",
// // 	cat: "animal",
// // };
// // const newArr = Object.entries(obj)
// // 	.filter((item) => item[1] === "persone")
// // 	.map((item) => item[0]);
// // console.log(newArr);

// // // entries
// // // [[ 'ivan', 'persone' ],[ 'ann', 'persone' ],[ 'dog', 'animal' ],[ 'cat', 'animal' ]]
// // // filter
// // // [ [ 'ivan', 'persone' ], [ 'ann', 'persone' ] ]
// // // map
// // // [ 'ivan', 'ann' ]
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// // упражнение 20 по методам массивов
// const films = [
// 	{
// 		name: "Titanic",
// 		rating: 9,
// 	},
// 	{
// 		name: "Die hard 5",
// 		rating: 5,
// 	},
// 	{
// 		name: "Matrix",
// 		rating: 8,
// 	},
// 	{
// 		name: "Some bad film",
// 		rating: 4,
// 	},
// ];
// // Задача 1 У вас есть список фильмов с рейтингом в виде массива объектов.
// // Напишите функцию showGoodFilms, которая будет принимать этот массив,
// // а возвращать будет массив объектов только с теми фильмами,
// // у которых рейтинг больше или равен 8.
// // P.S. Это довольно типичная задача в программировании.
// // Вспомните, на самых разных сайтах можно так фильтровать любые товары/фильмы/сериалы...
// function showGoodFilms(arr) {
// 	return arr.filter((film) => film.rating >= 8);
// }
// //Задача 2 Напишите функцию showListOfFilms, которая будет принимать этот же массив,
// // а возвращать будет строку, которая содержит названия фильмов через запятую.
// // Пример:
// // showListOfFilms(films) => "Titanic, Die hard 5, Matrix, Some bad film"
// function showListOfFilms(arr) {
// 	return arr.reduce(
// 		(acc, curr) =>
// 			`${typeof acc === "object" ? acc.name : acc}, ${curr.name}`
// 	);
// }
// showListOfFilms(films);
// //Задача 3
// // Напишите функцию setFilmsIds, которая будет принимать этот же массив,
// // а возвращать будет такой же массив с фильмами, но у каждого фильма будет новое поле id.
// // Значение этого поля установите по нумерации фильма.
// // Пример:
// // setFilmsIds(films) => [
// // 	{ name: 'Titanic', rating: 9, id: 0 },
// // 	{ name: 'Die hard 5', rating: 5, id: 1 },
// // 	{ name: 'Matrix', rating: 8, id: 2 },
// // 	{ name: 'Some bad film', rating: 4, id: 3 }
// // ]
// function setFilmsIds(arr) {
// 	return arr.map((film, i) => {
// 		film.id = i;
// 		return film;
// 	});
// }
// // Задача 4
// // Запишите результат предыдущей функции в переменную tranformedArray.
// // Напишите функцию checkFilms, которая будет проверять, что в каждом из фильмов
// // есть поле id. Если это так - функция возвращает true. Очевидно, что сейчас условие
// // должно выполняться, если мы передаем checkFilms(tranformedArray); :)
// const tranformedArray = setFilmsIds(films);
// function checkFilms(arr) {
// 	return arr.every((film) => (film.id || film.id === 0 ? true : false));
// }
// checkFilms(tranformedArray);
// //
//
//
//
//
//
//
//
// упражнение 21 по методам массивов
//
const funds = [
	{ amount: -1400 },
	{ amount: 2400 },
	{ amount: -1000 },
	{ amount: 500 },
	{ amount: 10400 },
	{ amount: -11400 },
];
//
// Задачa 1) У вас есть небольшой массив с данными о доходах каждой торговой точки
// (funds-фонды, amound-сумма). Напишите функцию getPositiveIncomeAmount, которая
// принимает этот массив данных и возвращает сумму только
// положительных значений из каждого объекта. (число)
// Пример:
// getPositiveIncomeAmount(funds) => 13300
//
const getPositiveIncomeAmount = (data) => {
	return data
		.filter((item) => item.amount > 0)
		.reduce((acc, curr) => acc + curr.amount, 0);
};
getPositiveIncomeAmount(funds);
//
// Задачa 2) Напишите функцию getTotalIncomeAmount, которая тоже принимает этот массив данных.
// Если хотя бы один из объектов содержит отрицательное значение поля amount, то функция
// возвращает сумму всех значений. (число) Если таких значений нет - запускается
// функция getPositiveIncomeAmount с тем же массивом данных.
// Пример:
// getTotalIncomeAmount(funds) => -500
//
const getTotalIncomeAmount = (data) => {
	return data.some((item) => item.amount < 0)
		? data.reduce((acc, curr) => acc + curr.amount, 0)
		: getPositiveIncomeAmount(data);
};
getTotalIncomeAmount(funds);
//
//
//
//
//
//
//
