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

// testimonials mobile
let width = window.innerWidth
const blocks = document.querySelectorAll('.mobile-opinion')
const shadedBody = document.querySelector('.shade')
let crossSign
let unshrinked

function unshrinkTestimonial() {
	unshrinked = document.querySelector('.unshrinked')
	if (unshrinked) {
		unshrinked.classList.remove('unshrinked')
		unshrinked.style.height = '109px'
		shadedBody.classList.remove('shaded-body')
	}
	this.classList.add('unshrinked')
	this.style.display = 'flex'
	this.style.height = '391px'
	this.style.width = '294px'
	shadedBody.classList.add('shaded-body')
}

function unshadeBody() {
	unshrinked = document.querySelector('.unshrinked')
	if (unshrinked) {
		unshrinked.classList.remove('unshrinked')
		this.classList.remove('shaded-body')
		unshrinked.style.height = '109px'
	}
	if (width >= 641 || width < 1000) {
		unshrinked.style.width = '600px'
	}
	if (width < 641) {
		unshrinked.style.width = '299px'
	}
}

if (width < 1000) {
	blocks.forEach(block => block.addEventListener('click', unshrinkTestimonial))
}

shadedBody.addEventListener('click', unshadeBody)

//slider 1600px
const sliderTestimonials = document.getElementById('blocks')
const blockTestimonials = sliderTestimonials.getElementsByClassName('block')
let prevValue = document.querySelector('input[type="range"]').value
console.log(prevValue)
const inputSlider = document.querySelector('.line')
let currValue
let blocksAll = [...blockTestimonials]

function moveSlider() {
	currValue = document.querySelector('input[type="range"]').value
	console.log(currValue)
	if (currValue > prevValue) {
		console.log(blocksAll)
		firstItem = blocksAll.shift()
		blocksAll.push(firstItem)
	}
	if (currValue < prevValue) {
		firstItem = blocksAll.pop()
		blocksAll.unshift(firstItem)
	}
}

inputSlider.addEventListener('click', moveSlider)
