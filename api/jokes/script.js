const url = 'https://v2.jokeapi.dev/joke/Any?type=single'
const categoryEl = document.querySelector('.category')
const jokeEl = document.querySelector('.joke')
const buttonEl = document.querySelector('.gen-joke')

function newJoke() {
	fetch(url)
		.then(response => response.json())
		.then(data => updateElements(data))
}

function updateElements(data) {
	categoryEl.innerText = data.category
	jokeEl.innerText = data.joke
}

window.onload = newJoke
buttonEl.addEventListener('click', newJoke)
