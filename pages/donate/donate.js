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

//input amount
const inputScale = document.querySelector('.scale-input')
const amount1 = document.querySelector('#amount-5000')
const amount2 = document.querySelector('#amount-2000')
const amount3 = document.querySelector('#amount-1000')
const amount4 = document.querySelector('#amount-500')
const amount5 = document.querySelector('#amount-250')
const amount6 = document.querySelector('#amount-100')
const amount7 = document.querySelector('#amount-50')
const amount8 = document.querySelector('#amount-25')

function changeInputAmount(e) {
	const previous = document.querySelector('.round-active')
	const previous2 = document.querySelector('.zindex-active')
	if (previous && previous2) {
		previous.classList.remove('round-active')
		previous2.classList.remove('zindex-active')
	}
	if (e.target.value === '5000') {
		amount1.parentNode.classList.add('round-active')
		amount1.parentNode.parentNode.classList.add('zindex-active')
	} else if (e.target.value === '2000') {
		amount2.parentNode.classList.add('round-active')
		amount2.parentNode.parentNode.classList.add('zindex-active')
	} else if (e.target.value === '1000') {
		amount3.parentNode.classList.add('round-active')
		amount3.parentNode.parentNode.classList.add('zindex-active')
	} else if (e.target.value === '500') {
		amount4.parentNode.classList.add('round-active')
		amount4.parentNode.parentNode.classList.add('zindex-active')
	} else if (e.target.value === '250') {
		amount5.parentNode.classList.add('round-active')
		amount5.parentNode.parentNode.classList.add('zindex-active')
	} else if (e.target.value === '100') {
		amount6.parentNode.classList.add('round-active')
		amount6.parentNode.parentNode.classList.add('zindex-active')
	} else if (e.target.value === '50') {
		amount7.parentNode.classList.add('round-active')
		amount7.parentNode.parentNode.classList.add('zindex-active')
	} else if (e.target.value === '25') {
		amount8.parentNode.classList.add('round-active')
		amount8.parentNode.parentNode.classList.add('zindex-active')
	}
}

inputScale.addEventListener('focusout', changeInputAmount)
paymentAmountInput.forEach(input => input.addEventListener('click', changeInputAmount))

//highlighting a particular circle after pupulation same amount

function highlightInput(e) {
	if ((e.value = '5000')) {
		e.target.id === 'amount-5000'
	} else if (e.target.id === 'amount-2000') {
		inputScale.setAttribute('value', '2000')
	} else if (e.target.id === 'amount-1000') {
		inputScale.setAttribute('value', '1000')
	} else if (e.target.id === 'amount-500') {
		inputScale.setAttribute('value', '500')
	} else if (e.target.id === 'amount-250') {
		inputScale.setAttribute('value', '250')
	} else if (e.target.id === 'amount-100') {
		inputScale.setAttribute('value', '100')
	} else if (e.target.id === 'amount-50') {
		inputScale.setAttribute('value', '50')
	} else if (e.target.id === 'amount-25') {
		inputScale.setAttribute('value', '25')
	}
}
