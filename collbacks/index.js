
// function authorize(callback) {
//   console.log('User authorizing');
//   // ...

//   console.log('Loged in');
//   callback()
//   console.log('end');
// }

// function helloUser() {
//   console.log('Hello, user');
// }

// authorize(helloUser)

// let heading = document.createElement('h1')
// console.log(heading);
// heading.innerText = 'Hello World'
// console.log(document.body);
// document.body.appendChild(heading)

// function loadScript(path, callback) {
//   let script = document.createElement('script')
//   script.src = path
//   script.onload = () => callback(null, script)
//   script.onerror = () => callback(new Error('Скрипт не подгрузился'))

//   document.head.appendChild(script)
// }

// function afterLoad() {
//   console.log('afterLoad script');
// }
// console.log(111);
// loadScript('./script1.js', afterLoad)
// console.log(222);
// loadScript('./script2.js')
// console.log(333);

// afterLoad()

// loadScript('./script2.js', afterLoad)



// loadScript('./script2.js', function () {
//   console.log('Этот скрипт подгрузился 2');

//   loadScript('./script1.js', function () {
//     console.log('Скрипт подгрузился 1',);

//     loadScript('./script3.js', function () {
//       console.log('Скрипт подгрузился 3',);


//     })
//   })
// })

// function step3() {
//   loadScript('./script3.js', function () {
//     console.log('все скрипты прогрузились');
//   })
// }
// function step2() {
//   loadScript('./script1.js', step3)
// }

// function step1() {
//   loadScript('./script2.js', step2)
// }

// step1()


// loadScript('./script4.js', function (error, script) {
//   if (error) {
//     console.log(error);
//     alert('Ткого скрипт файла нету')
//   } else {
//     console.log(script.src + ' скрипт прогрузился ');
//   }
// })

// console.log('start');
// setTimeout(() => {
//   console.log('Время прошло');
// }, 5000)

// let count = 1
// setInterval(() => {
//   console.log('count ' + count);
//   count++
// }, 1000)


// let heading = document.querySelector('#title')
// console.log(heading);

// function mouseover() {
//   console.log('element hovered');
// }

// setTimeout(() => {
//   console.log('Время прошло');
// }, 5000)

// let count = 1
// setInterval(() => {
//   console.log('count ' + count);
//   count++
// }, 1000)


// let heading = document.querySelector('#title')
// console.log(heading);

// function mouseover() {
//   console.log('element hovered');
// }

// heading.addEventListener('mouseover', mouseover)

// function howOldAreYou() {
//   console.log('asd');
// }
// let result = confirm('Ты программист?')
