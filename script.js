// LESSON4

// TASK 1
//let sugar = ["HTML/CSS", "JavaScript", true, 123, 'Angular','Vue'];
// як варіант для красивішого коду
// fruits.forEach(function (item, index) {
//     console.log(index,item);
// });
//
// function find() {
//     console.log(sugar);
// }
// find();

// TASK2
// function rand(max){
//     let sugar = [];
//     for(let i = 0; i < max; i++){
//         let rnd = Math.floor(Math.random() * max);
//         sugar.push(rnd);
//     }
//     return sugar;
// }
//
// console.log(rand(5));

//TASK 3,4
// function min (a,b,c)  {
//     let min = Math.min(a,b,c);
//     console.log(min);
//
//
//     return min;
//   };
// min(900,21094258,-2098408);
//
// function max (a,b,c)  {
//     let max = Math.max(a,b,c);
//     console.log(max);
//
//     return max;
// };
// max(16,24,-19445);

//TASK 5
//створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше
//  кастильний варік
// function minmax () {
//     let s = 0;
//     let g = 0;
//     for (let i = 0; i < arguments.length; i++) {
//         s = Math.min(arguments[i]);
//     }
//     return s;
// }
// console.log(minmax(9410,15,34,0));
// console.log(Math.max(minmax(2,34,3543,5435)));
/// як продвинутий варіант
// function minmax () {
//     console.log(Math.max(...arguments));
//     return Math.min(...arguments);
// }
//
// console.log(minmax(1, 2, 3,4, 5, 54, 2, 45));
// а це робоча тєма
// function minmax() {
//         let max = arguments[0];
//         let min = arguments[0];
//         for (let smth of arguments) {
//                 if (smth > max) max = smth;
//                 if (smth < min) min = smth;
//         }
//         console.log(min);
//         console.log(max);
//         return min;
// }
// minmax(20290,30944,0,93844,1,-3);


// якась там таска не знаю яка може я ї сама придумала
// function random(min,max) {
// let rand = min - 0.5 + Math.random() * (max - min -1);
// rand = Math.round(rand);
// return rand;
// }
// 6- repeat
//TASK 7
//
// function getMaxOfArray(numArray) {
//     console.log( Math.max.apply(null, numArray));
//     return Math.max.apply(null, numArray);
// }
// getMaxOfArray([12,34,65478,7473,626]);
// //TASK 8
// function getMinOfArray(numArray) {
//     console.log( Math.min.apply(null, numArray));
//     return Math.min.apply(null, numArray);
// }
// getMinOfArray([12,34,65478,7473,626]);
// TASK 10
// let total = [0, 1013, -98, 3,"124",true].reduce(function(a, b) {
//     return a + b;
// });
// console.log(total);

// TASK 11
// const average = list => list.reduce((p, c) => p + c) / list.length;
// const list = average([0, 10, 20, 30]);
// console.log(list);

//TASK 12,13 RECURSION
// let user = {
//     name: `Jax`,
//     age: 20,
//     owner: {
//         nameOfCompany: 'Dream come true!',
//         age: 2,
//         street: 'Naykova 84',
//         specialization: {
//             nameProgramLanguages: {
//                 IOS: ['Swift', 'Objective-C', 'Kotlin'],
//                 Android: ['Java', 'C','C#']
//             }
//         }
//     }
// };
// function func(user) {
//     for (const userKey in user) {
//         if (typeof user[userKey] === 'object'){
//             console.log(user[userKey]);
//             func(user[userKey]);
//         }
//     }
// }
// func(user);

// TASK 14   !
// let array1 = [1,2,3,4,5,6,7,8,9];
// let array2 = [4,67,765,33,377,8,79,1,6];
// function s() {
//     let array3 =[];
//     for (let i = 0; i < array1.length; i++) {
//     if (array1.id === array2.id) {
//         array3.push(array1[i]+array2[i]);
//
//     }
//     }
//     console.log(array3);
// }
// s();

// Task ***
//приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
// let arr = [12,3,466,657,4,0,-939,43939];
// function changeable(arr,i) {
//     let r = arr.splice(i,1);
//     arr.splice(i+1,0, r[0]);
//     return arr;
// }
//
// console.log(changeable(arr,3));

//TASK ..
// function Add(elem,text) {
//     let div = document.createElement(elem);
//     div.innerText = text;
//     document.body.appendChild(div);
// }
// Add('div','Hello World');
//    воно не працює
// car = [
//     {name:'Toyota', year:2001, color:'red',power:3000},
//     {name:'Audi', year:2010, color:'gray', power:50000},
//     {name:'Lambogini', year:2019, color:'yellow', power:30000},
//     {name:'Audi', year:2019, color:'silver', power:10000},
//     {name:'Dogi', year:2017, color:'black', power:1000}
// ];
// - приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
// Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали. Всі властивості авто в обному блоці
//
// function carHouse(somth, id) {
//     for (const carKey of car) {
//         const div = document.createElement('div');
//         div.innerText = carKey;
//
//         id.append(div);
//     }
// }
// const cont = document.getElementById('car_house');
// carHouse(car, cont);
// - приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
// Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали.
// Для кожної властивості створити всередені блока автомоблія свій блок
//
// function list(arr, cont) {
//
//     for (const carKey of car) {
//         const ul = document.createElement('ul');
//         for (const fill of Object.keys(carKey)) {
//             const li = document.createElement('li');
//             li.textContent = fill;
//             ul.appendChild(li);
//         }
//         cont.appendChild(ul);
//     }
// }
//
// const container = document.getElementById('container');
// list(car, container);


/// TASK **
// let usersWithId = [
//     {id: 1, name: 'vasya', age: 31, status: false},
//     {id: 2, name: 'petya', age: 30, status: true},
//     {id: 3, name: 'kolya', age: 29, status: true},
//     {id: 4, name: 'olya', age: 28, status: false},
// ];
// let citiesWithId = [
//     {user_id: 3, country: 'USA', city: 'Portland'},
//     {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
//     {user_id: 2, country: 'Poland', city: 'Krakow'},
//     {user_id: 4, country: 'USA', city: 'Miami'},
// ];
//
// function mergeArrayObjects(usersWithId,citiesWithId){
//     for (const item of usersWithId) {
//         for (const city of citiesWithId) {
//             if (item.id === city.user_id) {
//                 item.address = city;
//                 citiesWithId.push(item);
//                 return usersWithId;
//             }
//
//         }
//     }
// }
// console.log(mergeArrayObjects(usersWithId,citiesWithId));










