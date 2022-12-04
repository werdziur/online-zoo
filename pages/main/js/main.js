//hamburger menu

const burgerButton = document.querySelector('.hamburger-menu')
const burgerMenu = document.querySelector('.burger-menu')
const navigation = document.querySelector('.nav')
const burgerOpacity = document.querySelector('.burger-opacity')
const closeBurger = document.querySelector('.close-burger')

function menu() {
	burgerMenu.classList.toggle('hamburger-active')
	burgerOpacity.classList.toggle('opacity-active')
}

burgerButton.addEventListener('click', menu)

function hideMenu() {
	burgerMenu.classList.remove('hamburger-active')
	burgerOpacity.classList.remove('opacity-active')
}

burgerOpacity.addEventListener('click', hideMenu)
closeBurger.addEventListener('click', hideMenu)


//slider pets

const arrowOne = document.querySelector('.arrow1')
const arrowTwo = document.querySelector('.arrow2')
const mainSlider = document.getElementById('slider-main')
const cards = mainSlider.getElementsByClassName('card')

function slider() {
    mainSlider.append(cards[0], cards[1], cards[2], cards[3], cards[4])
}



arrowOne.addEventListener('click', slider)
arrowTwo.addEventListener('click', slider)