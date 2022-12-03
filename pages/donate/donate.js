const paymentAmountInput = document.querySelectorAll('.scale-inputs input[name="amount-of-money"]')

//choose amount scale
function clickInput() {
	const previous = document.querySelector('.round-active')
	const previous2 = document.querySelector('.zindex-active')

	if (previous && previous2) {
		previous.classList.remove('round-active')
		previous2.classList.remove('zindex-active')
	}
	this.parentNode.classList.add('round-active')
	this.parentNode.parentNode.classList.add('zindex-active')
}

paymentAmountInput.forEach(e => e.addEventListener('click', clickInput, true))

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
