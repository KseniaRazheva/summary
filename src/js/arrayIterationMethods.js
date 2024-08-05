"use strict";

// урок 87 методы перебора массивов 29мин

// метод форич
// уже знаем
// никогда не возвращает новый массив
// просто берет массив и его перебирает

// метод фильтр
// фильтрует элементы внутри массива
// получить все имена которые меньше 5 символов
// вернет новый массив
const names = ["Ivan", "Ann", "Ksenia", "Voldemart"];
const shortNames = names.filter(function (name) {
	return name.length < 5;
});
console.log(shortNames); // [ 'Ivan', 'Ann' ]

// метод мэп
// взять исходный массив и поменять каждый элемент внутри него
let answers = ["IvAn", "AnnA", "HELLO"];
answers = answers.map((item) => item.toLowerCase());
console.log(answers); //[ 'ivan', 'anna', 'hello' ]

// метод сам (булиновое, тру-фолз)
// перебор массива и если хотябы один элемент = условию вернуть тру, нет фолз
// пример есть ли в массиве хотябы одно число - да
const anyone = [4, "qwq", "sfreferf"];
console.log(anyone.some((item) => typeof item === "number")); //true

// метод эвери (булиновое, тру-фолз)
// перебор массива и если все элементы = условию вернуть тру, нет фолз
// пример все ли в массиве числа - нет
const everyone = [4, "qwq", "sfreferf"];
console.log(everyone.every((item) => typeof item === "number")); //false

//метод редьюс
// схлопывать массив в одно единое целое
const arr = [4, 5, 1, 3, 2, 6];
const res = arr.reduce((sum, current) => sum + current);
//const res = arr.reduce((sum, current) => sum + current, 3);//24
console.log(res); //21
//                       sum     current
//                       0       4
//                       4       5
//                       9       1
//                       10      3
//                       13      2
//                       15      6
//                       21

const arrFruits = ["apple", "pear", "plum"];
// const resFruits = arrFruits.reduce((sum, current) => sum + current); // applepearplum
// const resFruits = arrFruits.reduce((sum, current) => sum + ", " + current); // apple, pear, plum
const resFruits = arrFruits.reduce((sum, current) => `${sum}, ${current}`); // apple, pear, plum
console.log(resFruits);

// кейс
const obj = {
	ivan: "persone",
	ann: "persone",
	dog: "animal",
	cat: "animal",
};
const newArr = Object.entries(obj)
	.filter((item) => item[1] === "persone")
	.map((item) => item[0]);
console.log(newArr);

// entries
// [[ 'ivan', 'persone' ],[ 'ann', 'persone' ],[ 'dog', 'animal' ],[ 'cat', 'animal' ]]
// filter
// [ [ 'ivan', 'persone' ], [ 'ann', 'persone' ] ]
// map
// [ 'ivan', 'ann' ]
