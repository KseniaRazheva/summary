'use strict';

// /* Задание на урок:

// 1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
// 'Сколько фильмов вы уже посмотрели?'

// 2) Создать объект personalMovieDB и в него поместить такие свойства:
//     - count - сюда передается ответ на первый вопрос
//     - movies - в это свойство поместить пустой объект
//     - actors - тоже поместить пустой объект
//     - genres - сюда поместить пустой массив
//     - privat - в это свойство поместить boolean(логическое) значение false

// 3) Задайте пользователю по два раза вопросы:
//     - 'Один из последних просмотренных фильмов?'
//     - 'На сколько оцените его?'
// Ответы стоит поместить в отдельные переменные
// Записать ответы в объект movies в формате: 
//     movies: {
//         'logan': '8.1'
//     }

// Проверить, чтобы все работало без ошибок в консоли */

// // 'use strict';

// // const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', ''); //первый вопрос

// // const personalMovieDB = {
// // 	count: numberOfFilms,
// // 	movies: {},
// // 	actors: {},
// // 	genres: [],
// // 	privat: false
// // };

// // const a = prompt('Один из последних просмотренных фильмов?', ''),
// // 	  b = prompt('На сколько оцените его?', ''),
// // 	  c = prompt('Один из последних просмотренных фильмов?', ''),
// // 	  d = prompt('На сколько оцените его?', '');

// // personalMovieDB.movies[a] = b;
// // personalMovieDB.movies[c] = d;

// // console.log(personalMovieDB);


// // /* Задание на урок:

// // 1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

// // 2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
// // отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
// // возвращаем пользователя к вопросам опять

// // 3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
// // "Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
// // "Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

// // 4) Потренироваться и переписать цикл еще двумя способами*/

// // 'use strict';

// // const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

// // const personalMovieDB = {
// // 	count: numberOfFilms,
// // 	movies: {},
// // 	actors: {},
// // 	genres: [],
// // 	privat: false
// // };

// // for (let i = 0; i < 2; i++) {
// //     const a = prompt('Один из последних просмотренных фильмов?', '');
// //     const b = prompt('На сколько оцените его?', '');

// //     if (a != null && b != null && a !='' && b != '' && a.length < 50) {
// //         personalMovieDB.movies[a] = b;
// //         console.log('done');
// //     } else {
// //         console.log('error');
// //         i--;
// //     }
// // }

// // if (personalMovieDB.count < 10) {
// //     console.log('Посмотрено довольно мало фильмов');
// // } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
// //     console.log('Вы классический зритель');
// // } else if (personalMovieDB.count >= 30) {
// //     console.log('Вы киноман');
// // } else {
// //     console.log('Произошла ошибка');
// // }

// // console.log(personalMovieDB);

// // Задание на урок:

// //1) Первую часть задания повторить по уроку

// //2) Создать функцию showMyDB, которая будет проверять свойство приват.
// //Если стоит в позиции false - выводит в консоль главный объект программы

// //3) Создать функцию writeYourGenres в который пользователь будет три раза отвечать на вопрос "Ваш любимый жанр под номером ${номер по порядку}".
// //Каждый ответ записывается в массив данных genres.

// //Функции вызывать не обязательно


// let numberOfFilms;

// function start() {
//     numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

//     while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
//         numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
//     }
// }

// start();

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };

// function rememberMyFilms() {
//     for (let i = 0; i < 2; i++) {
//         const a = prompt('Один из последних просмотренных фильмов', '').trim(),
//               b = prompt('На сколько оцените его?', '');

//         if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//             personalMovieDB.movies[a] = b;
//             console.log('done');
//         } else {
//             console.log('error');
//             i--;
//         }
//     }
// }

// rememberMyFilms();

// function detectPersonalLevel() {
//     if (personalMovieDB.count < 10) {
//         console.log("Просмотрено довольно мало фильмов");
//     } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//         console.log("Вы классический зритель");
//     } else if (personalMovieDB.count >= 30) {
//         console.log("Вы киноман");
//     } else {
//         console.log("Произошла ошибка");
//     }
// }

// detectPersonalLevel();

// function showMyDB (hidden) {
//     if (!hidden) {
//         console.log(personalMovieDB);
//     }
// }

// showMyDB(personalMovieDB.privat);

// function writeYourGenres() {
//     for (let i = 1; i <= 3; i++) {
//         personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
//     }
// }

// writeYourGenres();



// //урок 37. практика часть 4. Используем объекты

// //задание на урок:

// //1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
// //Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

// //2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. 
// //Если оно false - он переключает его на true,
// //если оно true - он переключает его на false/
// //ротестировать вместе с showMyDB

// //3) в методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку.
// //если он это сделал - возвращать его к этому же вопросу
// //после того как все жанры введены - при помощи метода forEach вывести в консоль сообщения в таком виде:
// //"Любимый жанр #(номер по порядку начиная с 1) - это (название массива)"

// const personalMovieDB = {
//     count: 0,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false,
//     start: function() {
//         personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');

//         while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN (personalMovieDB.count)) {
//             personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
//         }
//     },
//     rememberMyFilms: function() {
//         for (let i = 0; i < 2; i++) {
//             const a = prompt('Один из последних просмотренных фильмов?', ''),
//                   b = prompt('На сколько оцените его?', '');

//             if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//                 personalMovieDB.movies[a] = b;
//                 console.log('done');
//             } else {
//                 console.log('error');
//                 i--;
//             }
//         }
//     },//!=неравенство, &&логическоеИ, +prompt унарный плюс превращает в число
//     detectPersonalLevel: function() {
//         if (personalMovieDB.count < 10) {
//             console.log("Просмотрено довольно мало фильмов");
//         } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//             console.log("Вы классический зритель");
//         } else if (personalMovieDB.count >= 30) {
//             console.log("Вы киноман");
//         } else {
//             console.log("Произошла ошибка");
//         }
//     },
//     showMyDB: function(hidden) {
//         if (!hidden) {
//             console.log(personalMovieDB);
//         }
//     },
//     toggleVisibleMyDB: function() {
//         if (personalMovieDB.privat) {
//             personalMovieDB.privat = false;
//         } else {
//             personalMovieDB.privat = true;
//         }
//     },
//     writeYourGenres: function() {
//         //for (let i = 1; i <= 3; i++) {
//             // let genre = prompt(`Ваш любимый жанр под номером ${i}`);

//             // if (genre === '' || genre == null) {
//             //     console.log('Вы ввели некорректные данные или не ввели их вовсе');
//             //     i--;
//             // } else {
//             //     personalMovieDB.genres[i - 1] = genre;
//             // }
//          //}первый вариант

//          for (let i = 1; i < 2; i++) {
//             let genres = prompt(`Введите ваши любимые жанры через запятую`).toLowerCase();

//             if (genres === '' || genres == null) {
//                 console.log('Вы ввели некорректные данные или не ввели их вовсе');
//                 i--;
//             } else {
//                 personalMovieDB.genres = genres.split(', ');
//                 personalMovieDB.genres.sort();
//             }
//         }//второй вариант

//         personalMovieDB.genres.forEach((item, i) => {
//             console.log(`Любимый жанр ${i + 1} - это ${item}`);
//         });
//     }
// };




// /* Задания на урок:

// 1) Удалить все рекламные блоки со страницы (правая часть сайта)

// 2) Изменить жанр фильма, поменять "комедия" на "драма"

// 3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
// Реализовать только при помощи JS

// 4) Список фильмов на странице сформировать на основании данных из этого JS файла.
// Отсортировать их по алфавиту 

// 5) Добавить нумерацию выведенных фильмов */


// const movieDB = {
//     movies: [
//         "Логан",
//         "Лига справедливости",
//         "Ла-ла лэнд",
//         "Одержимость",
//         "Скотт Пилигрим против..."
//     ]
// };

// const adv = document.querySelectorAll('.promo__adv img');

// //adv.remote();//не работает
// // adv.forEach(function (item){
// //     item.remove();
// // });//без стрелочной функции работает, но предпочтительнее использовать стрелочную функцию:
// adv.forEach(item => {
//     item.remove();
// });//1) Удалить все рекламные блоки со страницы (правая часть сайта)


// // .promo__genre in .promo__bg
// const poster = document.querySelector('.promo__bg'),
//       genre = poster.querySelector('.promo__genre');
// genre.textContent = 'драма';//2) Изменить жанр фильма, поменять "комедия" на "драма"
// poster.style.backgroundImage = "url('img/bg.jpg')";//3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.Реализовать только при помощи JS


// //.promo__interactive-item in .promo__interactive-list
// //const movieList = document.querySelectorAll('.promo__interactive-list');
// //movieList.innerHTML = "";//очищаю список просмотренных фильмов И ничего не произошло, innerHTML не работает с массивами, надо взять только первый элемент:
// const movieList = document.querySelector('.promo__interactive-list');//так работает
// movieList.innerHTML = "";//так работает


// movieDB.movies.sort();//сортировка по порядку
// // const movieDB = {
// //     movies: [
// //         "Логан",
// //         "Лига справедливости",
// //         "Ла-ла лэнд",
// //         "Одержимость",
// //         "Скотт Пилигрим против..."
// //     ]
// // };
// // console.log(movieDB.movies.sort());
// // // [
// // //     'Ла-ла лэнд',
// // //     'Лига справедливости',
// // //     'Логан',
// // //     'Одержимость',
// // //     'Скотт Пилигрим против...'
// // //   ]


// //console.log(poster.innerHTML);
// //консоль в браузере возвращает:
// //<div class="promo__genre">драма</div>
// //<div class="promo__title">МАРСИАНИН</div>
// //<div class="promo__descr">ИСТОРИЯ ЧЕЛОВЕКА, ВЫЖИВШЕГО НА ЧУЖОЙ ПЛАНЕТЕ В ОДИНОЧКУ</div>
// //<div class="promo__ratings">
// //    <span>IMDb: 8.0</span>
// //    <span>Кинопоиск: 7.7</span>
// //</div>



// //a = a + 1; РАВНО a += 1; - добавляем к a один

// // movieDB.movies.forEach((film, i) => {
// //     movieList.innerHTML += `
// //         <li class="promo__interactive-item">СКОТТ ПИЛИГРИМ ПРОТИВ...
// //             <div class="delete"></div>
// //         </li>
// //     `;
// // });//РАБОТАЕТ
// //сформировалось 5 одинаковых фильмов в списке
// //если убрать плюсик то в списке появится только 1 фильм
// //не работает если заменяю += на movieList.innerHTML = movieList.innerHTML + ``

// movieDB.movies.forEach((film, i) => {
//     movieList.innerHTML += `
//         <li class="promo__interactive-item">${i + 1} ${film}
//             <div class="delete"></div>
//         </li>
//     `;
// });//выводится список с нумерацией и по порядку




  

//урок 48 практика используем события на странице проекта
//Задания на урок:

//1) Реализовать функционал, что после заполнения формы и нажатия кнопки "подтвердить" - новый фильм добавляется в список. 
//Страница не должна перезагружаться. 
//Новый фильм должен добавляться в movieDB.movies
//Для получения доступа к значению input - обращаемся к нему как input.value;

//2) Если название фильма больше чем 21 символ - обрезать его и добавить три точки

//3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

//4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: "Добавляем любимый фильм"

//5) Фильмы должны быть отсортированы по алфавиту
