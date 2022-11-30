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