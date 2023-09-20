// console.log('Hello promises');

// console.time()
// setTimeout(() => {
//   console.log('After timeout');
//   console.timeEnd()
// }, 3000)


// function getUserInformation() {
//   const user = {
//     name: 'Jhon',
//     surename: 'Smith',
//     age: 55
//   }
//   console.log(user);
// }

// function login(successCb) {
//   setTimeout(() => {
//     successCb()
//   }, 3000)
// }

// login(getUserInformation)

// console.log(user);

// console.log(111);
// const login = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve('logedIn')
//   }, 3000)
//   console.log(222);
// })
// console.log(333);

// login.then((response) => {
//   console.log('response', response);
// })


// const promise = new Promise(() => { })
// console.log(promise);

// const resolvedPromise = new Promise((resolve) => { resolve('resolved') })
// console.log(resolvedPromise);


// const rejectedPromise = new Promise((resolve, reject) => { reject(new Error('rejected')) })
// console.log(rejectedPromise);


// function getUserInfo() {
//   return {
//     name: 'Jhon',
//     surename: 'Smith',
//     age: 55
//   }
// }

// const authenticateUser = new Promise((resolve, reject) => {
//   const isAuthorized = confirm('Are you Authorized?')

//   if (isAuthorized) {
//     resolve('User is authorized')
//   } else {
//     reject(Error('User not authorized'))
//   }
// })

// authenticateUser
//   .then(res => {
//     console.log('on then', res);
//     const user = getUserInfo()
//     console.log('user', user);
//   }).catch(err => {
//     console.log('on error', err.message);
//   })


// console.log('fetching from server');
// fetch('https://jsonplaceholder.typicode.com/posts')
//   .then(res => {
//     return res.json()
//   })
//   .then(res => {
//     console.log('results of server', res);
//   })
// console.log('end fetching');


// const promise = new Promise((resolve, reject) => {
//   // const isTrue = confirm('Is true?')

//   // setTimeout(() => {
//   if (false) resolve('It is True')
//   else reject('It is False')
//   // }, 3000)
// })

// console.log('111');
// promise
//   .then(res => {
//     console.log('Success', res);
//   })
//   .catch(err => {
//     console.log('Error', err);
//   })
//   .finally(() => {
//     console.log('End of session');
//   })
// console.log('222');


function paintTodo(data) {
  const todoBox = document.createElement('div')

  document.body.style.padding = '16px'

  todoBox.style.width = '100%'
  todoBox.style.padding = '12px'
  todoBox.style.background = '#eee'
  todoBox.className = 'TodoBox'


  const title = document.createElement('h1')
  title.innerText = `${data.id}. ${data.title}`

  if (data.completed) {
    todoBox.style.background = 'green'
  } else {
    todoBox.style.background = 'red'
  }

  todoBox.appendChild(title)

  document.body.appendChild(todoBox)
}

// paintTodo()



// const fetchFirstTodo = fetch('https://jsonplaceholder.typicode.com/todos/1')
//   .then(response => response.json())

// const fetchSecondTodo = fetch('https://jsonplaceholder.typicode.com/todos/2')
//   .then(response => response.json())

// const fetchthirdTodo = fetch('https://jsonplaceholder.typicode.com/todos/3')
//   .then(response => response.json())

// const fetchFourthTodo = fetch('https://jsonplaceholder.typicode.com/todos/4')
//   .then(response => response.json())


// fetchFirstTodo.then(res => {
//   console.log('first todo', res);
//   paintTodo(res)
// })

// fetchSecondTodo.then(res => {
//   console.log('second todo', res);
//   paintTodo(res)
// })

// fetchthirdTodo.then(res => {
//   console.log('third todo', res);
//   paintTodo(res)
// })

// fetchFourthTodo.then(res => {
//   console.log('fourth todo', res);
//   paintTodo(res)
// })

// fetchFirstTodo
//   .then(res => {
//     console.log('res 1', res);
//     paintTodo(res)
//     return fetchSecondTodo
//   })
//   .then(res => {
//     console.log('res 2', res);
//     paintTodo(res)
//     return fetchthirdTodo
//   })
//   .then(res => {
//     console.log('res 3', res);
//     paintTodo(res)
//     return fetchFourthTodo
//   })
//   .then(res => {
//     console.log('res 4', res);
//     paintTodo(res)
//   })





const fetchTodo = function (id) {
  return new Promise((resolve, reject) => {
    fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then(response => response.json())
      .then(res => {
        console.log('res', res);
        if (res.id) {
          paintTodo(res)
          resolve(res)
        } else {
          reject(new Error('not found'))
        }
      })
  })
}

// fetchTodo(1)
//   .then(() => fetchTodo(3))
//   .then(() => fetchTodo(4))
//   .then(() => fetchTodo(1122))
//   .then(() => fetchTodo(7))
//   .then(() => fetchTodo(110))
//   .then(() => fetchTodo(6))


fetchTodo(1)
  .then(() => fetchTodo(3))
  .then(() => fetchTodo(4))
  .then(() => fetchTodo(6))
  .then(() => fetchTodo(7))
  .then(() => fetchTodo(110))
  .then(() => fetchTodo(1122))
  .finally(() => console.log('Finished Todo fetching'))

// fetchTodo(4)
// fetchTodo(5)
// fetchTodo(6)
// fetchTodo(11)
// fetchTodo(1122)