"use strict";
//
// этом файле делаю конспект урока 85 promise (обещания) если дословно перевод
//
// асинхронный код (например таймауты это когда функция запустится через
// определенный промежуток времени
// или будет повторяться через определенный промежуток)
// или при запросах на сервер когда мы точно не знаем через сколько
// ответит нам сервер и у нас операция идет асинхронно
//
// асинхронно то есть послали мы человека в магазин
// и не знаем через сколько он вернется
// и продолжаем заниматься своими делами
//
// мы хотим сделать последовательность действий
// если произошло что-то то мы выполним какое-то действие
//
// если произошло что-то то мы обещаем что у нас выполнится следующее действие
//
// когда выполняется событие клика на каком-то элементе я хочу чтобы
// только в этом случае произошло следующее действие
//
// для этого мы постоянно используем колбэки то есть функции обратного вызова
//
// цепочка действий по пунктам. мы отправляем запрос на сервер, мы получаем от сервера какие-то
// данные например о товарах.
// мы выполняем какие-то действия с этими уже данными
// и опять их отправляем на сервер. потом опять что-то получаем.
// и опять что-то выполняем.
//
// если написать это много функций обратного вызова = нечитаемый код
// колбэк хэл
//
// пример с сэтТаймаутами (с асинхронным кодом)
// сначала для инициализации я напишу код с консолью
// это код синхронный и он выполнится сразу же
// далее асинхронный код:
// сэтТаймаут будет выполняться через 2 секунды
// и внутрь закидываю колбэк функцию
// и внутри будет выполняться консольлог подготовка данных
// дальше будет какой-то товар (переменная продукт)
// и раскрываем в качестве объекта и пишем ему несколько свойств
// теперь когда мы получили какие-то данные
// и хотим выполнить с ними какие-то операции и сделать это тоже асинхронно
// сэтТаймаут должен выполниться через 2 минуты
// солбэк берем переменную продукт
// присваиваем ему статус и ставим значение ордер заказан
// и в консольлог выводим продукт
// у нас разростается дерево колбэков
// вместо сэтТаймаутов могут быть другие операции например работа с сервером
//
//
// code:
// console.log("Запрос данных...");
// setTimeout(() => {
// 	console.log("Подготовка данных...");
// 	const product = {
// 		name: "TV",
// 		price: 2000,
// 	};
// 	setTimeout(() => {
// 		product.status = "order";
// 		console.log(product);
// 	}, 2000);
// }, 2000);
//
//
// answer:
// Запрос данных...
// Подготовка данных...
// { name: 'TV', price: 2000, status: 'order' }
// [Done] exited with code=0 in 4.092 seconds
//
//
// это асинхронный код (async) (занимает какое-то время)
// (случится в будущем не сейчас)
// причем колбэки помогают соблюдать определенный порядок действий
// чтобы не попадать в колбэк хэл нам понадобятся промисы
//
// вначале необходимо создать промис
// создам переменную и во внутрь с помощью конструктора
// я помещаю нью промис раскрываю круглые скобки
// и в конце ставлю точку с запятой - обещание создано
// и во внутрь () необходимо поместить какую-нибудь колбэк функцию
//
// колбэк-функция (обратный вызов) это функция переданная в другую функцию
// в качестве аргумента, которая затем вызывается по завершению
// какого-то действия
//
// обычно когда мы создаем промисы эта колбэк функция
// принимает у нас всегда два аргумента резолв и реджект
// резолв означает обещание выполнилось правильно
// реджект - обещание не выполнилось
// then - метод которые выполняется на промисе в случае положительного исхода
//
// еще раз
// создаю обещание
// помещаю его в переменную рег
// обещание может завершиться положительно или отрицательно но
// в данный момент мы не знаем как оно завершится
// у нас есть определенный промежуток времени до того как мы получим результат
// если будет все хорошо мы будем вызывать функцию резолв
// если что-то пошло не так мы будем вызывать реджект
//
//
//code:
// console.log("Запрос данных...");
// const req = new Promise(function (resolve, reject) {
// 	setTimeout(() => {
// 		console.log("Подготовка данных...");
// 		const product = {
// 			name: "TV",
// 			price: 2000,
// 		};
// 		resolve(product);
// 	}, 2000);
// });
// req.then((product) => {
// 	setTimeout(() => {
// 		product.status = "order";
// 		console.log(product);
// 	}, 2000);
// });
//
//
// answer:
// Запрос данных...
// Подготовка данных...
// { name: 'TV', price: 2000, status: 'order' }
// [Done] exited with code=0 in 4.136 seconds
//
//
// теперь другой вариант со вторым промисом
// создадим еще один промис рег2
// используем стрелочную функцию
// преимущество промисов перед колбэками
// мы можем возвращать промис по цепочке
//
//
// code:
// console.log("Запрос данных...");
// const req = new Promise((resolve, reject) => {
// 	setTimeout(() => {
// 		console.log("Подготовка данных...");
// 		const product = {
// 			name: "TV",
// 			price: 2000,
// 		};
// 		resolve(product);
// 	}, 2000);
// });
// req.then((product) => {
// 	const req2 = new Promise((resolve, reject) => {
// 		setTimeout(() => {
// 			product.status = "order";
// 			resolve(product);
// 		}, 2000);
// 	});
// 	req2.then((data) => {
// 		console.log(data);
// 	});
// });
//
//
// answer:
// Запрос данных...
// Подготовка данных...
// { name: 'TV', price: 2000, status: 'order' }
// [Done] exited with code=0 in 4.092 seconds
//
//
// как сделать красивее
// есть первый then внутри у него есть колбэк функция которая принимает
// определенные данные пришедшие от сервера допустим внутри возвращаем
// новый промис который тоже выполняет какую-то асинхронную операцию,
// в итоге когда все успешно испольтзуем резолв  и возвращаем продукт который
// должен идти куда-то дальше - можем далше обработать then в которой данные
// дэйта придут из предыдущей функции резолв
// мы избавились от колбэков, операции выполняются по цепочке then
//
//
// code:
// console.log("Запрос данных...");
// const req = new Promise((resolve, reject) => {
// 	setTimeout(() => {
// 		console.log("Подготовка данных...");
// 		const product = {
// 			name: "TV",
// 			price: 2000,
// 		};
// 		resolve(product);
// 	}, 2000);
// });
// req.then((product) => {
// 	return new Promise((resolve, reject) => {
// 		setTimeout(() => {
// 			product.status = "order";
// 			resolve(product);
// 		}, 2000);
// 	});
// }).then((data) => {
// 	console.log(data);
// });
//
//
// answer:
// Запрос данных...
// Подготовка данных...
// { name: 'TV', price: 2000, status: 'order' }
// [Done] exited with code=0 in 4.121 seconds
//
//
// code:
// console.log("Запрос данных...");
// const req = new Promise((resolve, reject) => {
// 	setTimeout(() => {
// 		console.log("Подготовка данных...");
// 		const product = {
// 			name: "TV",
// 			price: 2000,
// 		};
// 		resolve(product);
// 	}, 2000);
// });
// req.then((product) => {
// 	return new Promise((resolve, reject) => {
// 		setTimeout(() => {
// 			product.status = "order";
// 			resolve(product);
// 		}, 2000);
// 	});
// })
// 	.then((data) => {
// 		data.modify = true;
// 		return data;
// 	})
// 	.then((data) => {
// 		console.log(data);
// 	});
//
//
// answer:
// Запрос данных...
// Подготовка данных...
// { name: 'TV', price: 2000, status: 'order', modify: true }
// [Done] exited with code=0 in 4.115 seconds
//
//
// теперь нас интересует второй аргумент реджект
// это тоже функция которую мы прописываем так же как и then
// она выполняется когда промис завершился неудачей
// когда ссылаемся на несуществующий файл, несуществующий сервер
// или сервер упал и вернул ошибку
// для проверки внутрь таймаута пишу реджект,
//а в конце кэтч и во внутрь колбэк функцию с консоль.эрор
//
//
// code:
// console.log("Запрос данных...");
// const req = new Promise((resolve, reject) => {
// 	setTimeout(() => {
// 		console.log("Подготовка данных...");
// 		const product = {
// 			name: "TV",
// 			price: 2000,
// 		};
// 		resolve(product);
// 	}, 2000);
// });
// req.then((product) => {
// 	return new Promise((resolve, reject) => {
// 		setTimeout(() => {
// 			product.status = "order";
// 			reject();
// 		}, 2000);
// 	});
// })
// 	.then((data) => {
// 		data.modify = true;
// 		return data;
// 	})
// 	.then((data) => {
// 		console.log(data);
// 	})
// 	.catch(() => {
// 		console.error("Произошла ошибка");
// 	});
//
//
// answer:
// Запрос данных...
// Подготовка данных...
// Произошла ошибка
// [Done] exited with code=0 in 4.108 seconds
//
//
// файнели. finally. в конце пишу. действия которые должны произойти всегда и в конце
// например если промисы используем в форме - в файнели мы прописываем очистку формы
// и не важно форма успешно отправилась или произошла ошибка
//
// code:
// console.log("Запрос данных...");
// const req = new Promise((resolve, reject) => {
// 	setTimeout(() => {
// 		console.log("Подготовка данных...");
// 		const product = {
// 			name: "TV",
// 			price: 2000,
// 		};
// 		resolve(product);
// 	}, 2000);
// });
// req.then((product) => {
// 	return new Promise((resolve, reject) => {
// 		setTimeout(() => {
// 			product.status = "order";
// 			resolve(product);
// 		}, 2000);
// 	});
// })
// 	.then((data) => {
// 		data.modify = true;
// 		return data;
// 	})
// 	.then((data) => {
// 		console.log(data);
// 	})
// 	.catch(() => {
// 		console.error("Произошла ошибка");
// 	})
// 	.finally(() => {
// 		console.log("Finally");
// 	});
//
//
// answer:
// Запрос данных...
// Подготовка данных...
// { name: 'TV', price: 2000, status: 'order', modify: true }
// Finally
//
//
// в промисах есть еще два метода ол и рейз
// создаю переменную тест это будет функция которая принимает
// аргумент тайм  внутри мы будем возвращать новый промис
// наш промис будет принимать две функции
// (когда реджект не нужен только одна резолв) это редко
// внутри запускаем сэтТаймаут как асинхронную версию
// и там будет выполняться резолв через тайм
// вызываем тест, 1 секунда, используем метод then
// и передаем функцию которая будет резолв
//
//
// code:
// const test = (time) => {
// 	return new Promise((resolve) => {
// 		setTimeout(() => resolve(), time);
// 	});
// };
// test(1000).then(() => console.log("1000 ms"));
// test(2000).then(() => console.log("2000 ms"));
//
//
// answer:
// 1000 ms
// 2000 ms
// [Done] exited with code=0 in 2.081 seconds
//
//
// метод промис олл
// нужна чтобы мы точно убедились, что все наши промисы
// уже выполнились
// используем промис как глобальный объект и у него есть метод all
// во внутрь себя он принимает массив с промисами
// первый тест и второй тест
// потом их обработать then-ом
// то есть хотим дождаться загрузки всех наших промисов
// а потом что-то делать
// then - если все хорошо, кэтч если нет
//
//
// code:
// const test = (time) => {
// 	return new Promise((resolve) => {
// 		setTimeout(() => resolve(), time);
// 	});
// };
// Promise.all([test(1000), test(2000)]).then(() => {
// 	console.log("All");
// });
//
//
// answer:
// All
// [Done] exited with code=0 in 2.118 seconds
//
//
// race это гонка, какой промис быстрее выполнится
// если все верно то через одной секунды появится сообщение All
//
//
// code:
// const test = (time) => {
// 	return new Promise((resolve) => {
// 		setTimeout(() => resolve(), time);
// 	});
// };
// Promise.race([test(1000), test(2000)]).then(() => {
// 	console.log("All");
// });
//
//
// answer:
// All
// [Done] exited with code=0 in 2.113 seconds
// если в браузере - секунда, редактор считает запуск всего кода
// (то есть и окончание второго промиса)
