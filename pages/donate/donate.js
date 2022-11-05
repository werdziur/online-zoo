const about = document.querySelector('.about')
const map = document.querySelector('.map')
const zoos = document.querySelector('.zoos')
const donate = document.querySelector('.donate')
const contact = document.querySelector('.contact')

map.addEventListener('click', function () {
	map.style.color = '$orange'
	zoos.style.color = 'white'
	donate.style.color = 'white'
	contact.style.color = 'white'
	about.style.color = 'white'
})

zoos.addEventListener('click', function () {
	map.style.color = 'white'
	zoos.style.color = '$orange'
	donate.style.color = 'white'
	contact.style.color = 'white'
	about.style.color = 'white'
})

about.addEventListener('click', function () {
	map.style.color = 'white'
	zoos.style.color = 'white'
	about.style.color = '$orange'
	contact.style.color = 'white'
	donate.style.color = 'white'
})

contact.addEventListener('click', function () {
	map.style.color = 'white'
	zoos.style.color = 'white'
	donate.style.color = 'white'
	contact.style.color = '$orange'
	about.style.color = 'white'
})
