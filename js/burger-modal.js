const burgerBtn = document.querySelector(".header-burger-btn");
const adaptiveMenu = document.querySelector(".header-adaptive-menu");
const burgerCloseBtn = document.querySelector('.header-menu-close-btn')

function openModal() {
  // let classStr = adaptiveMenu.className
  // classStr = classStr + ' open'
  // adaptiveMenu.className = classStr


  let classArr = adaptiveMenu.className.split(' ')
  if (!classArr.includes('open')) {
    classArr.push('open')
  }
  adaptiveMenu.className = classArr.join(' ')

}

function closeModal() {
  // let classStr = adaptiveMenu.className
  // let classArr = classStr.split(' ')
  // if (classArr.includes('open')) {
  //   adaptiveMenu.className = 'header-adaptive-menu'
  // }

  let classArr = adaptiveMenu.className.split(' ')
  let index = classArr.findIndex(e => e === 'open')
  if (index > -1) {
    classArr.splice(index, 1)
  }
  adaptiveMenu.className = classArr.join(' ')
}

burgerBtn.addEventListener('click', openModal)
burgerCloseBtn.addEventListener('click', closeModal)