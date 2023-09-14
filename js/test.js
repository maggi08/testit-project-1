// let array = ['one', 'two', 'three']
// for (let index = 0; index < array.length; index++) {
//   // console.log(array[index]);
// }


// let user = {
//   name: 'Magzhan',
//   surname: 'Mussaiyn'
// }

// // for (let i in user) {
// //   console.log(user[i]);
// // }

// console.log(user);

// console.log(Object.keys(user));
// // Object.keys(user).forEach(e => console.log(user[e]))
// console.log(Object.values(user));
// console.log(Object.entries(user));

// Object.entries(user).forEach(e => {
//   console.log(`key - ${e[0]}, value - ${e[1]}`);
// })

// let person = {
//   name: 'Jhon',
//   last_name: 'Doe',
//   age: 14
// }

// function doubleAge(age) {
//   return age * 2
// }

// let { age, name, last_name: surename } = person

// console.log(person.age);
// console.log(age, name, surename);
// console.log(doubleAge(person.age))
// console.log(doubleAge(age))


// let numbers = [45, 62, 73, 1, 0, 19, 10]

// let [first, second, ...others] = numbers

// console.log('numbers ', numbers);
// console.log('first ', first);
// console.log('second ', second);
// console.log('others ', others);


// let car = {
//   model: 'mers',
//   wheels: 4,
// }

// for (let [key, value] of Object.entries(car)) {
//   console.log(`${key}-${value}`);
// }

// let words = {}
// [words.first, words.second] = 'Hello world'.split(' ') // ['Hello', 'world']
// console.log(string.split(' '));
// console.log(words);


// let name = 'Jhon'
// let surename = 'Doe'
// console.log(name, surename);
// [name, surename] = [surename, name]
// console.log(name, surename);


// let date = new Date()
// console.log(date);

// let user = {
//   "name": "Jhon",
//   "surename": "Doe"
// }
// console.log(user);


// try {
//   // console.log('Hello');
//   console.log('start');
//   console.log(hello);
//   console.log('end');
// } catch (err) {
//   console.log('Has Error name', err.name);
//   console.log('Has Error message', err.message);
//   console.log('Has Error stack', err.stack);
//   console.log('Has Error err', err);
// }


// неработает с SyntaxError
// try {
//   --{{ { } }
// }
// } catch (err) {
//   console.log('Has Error name', err.name);
//   console.log('Has Error message', err.message);
//   console.log('Has Error stack', err.stack);
//   console.log('Has Error err', err);

// }



// let json = "{ некорректный JSON }";
// let json = '{ "name":"Jhon" }';

// try {

//   let user = JSON.parse(json); // <-- тут возникает ошибка...
//   alert(user.name); // не сработает

// } catch (e) {
//   // ...выполнение прыгает сюда
//   alert("Извините, в данных ошибка, мы попробуем получить их ещё раз.");
//   alert(e.name);
//   alert(e.message);
// }


// try {
//   const burgerBtn = document.getElementById('burgerBtn3')
//   console.log(burgerBtn.innerHTML);
// } catch (err) {
//   console.log(err);
// }


// try {
//   const burgerBtn = document.getElementById('burgerBtn3')
//   // if (!burgerBtn) throw new Error('burgerBtn3 is not in DOM')
//   // if (!burgerBtn) throw new ReferenceError('burgerBtn3 is not in DOM')
//   // if (!burgerBtn) throw new SyntaxError('burgerBtn3 is not in DOM')
//   console.log(burgerBtn.innerHTML);
// } catch (err) {
//   console.log(err);
// }

// function hello() {
//   console.log('hello');
// }
// try {
//   console.log('start');
//   blalblalabl()
//   console.log('end');
// } catch (err) {
//   console.log(err);
// } finally {
//   hello()
// }

// try {
//   console.log('start 2');
//   console.log('end 2');
// } catch (err) {
//   console.log('err 2', err);
// } finally {
//   hello()
// }

// console.log(window);

// window.onerror = function (err) {
//   console.log(err);
// }

// throw new Error('hi ')