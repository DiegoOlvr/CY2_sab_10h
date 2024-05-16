const url = 'https://emojihub.yurace.pro/api/random'
const emojiEl = document.querySelector('.emoji')
const buttonEl = document.querySelector('button')

function newEmoji() {
	fetch(url)
		.then(response => response.json())
		.then(data => updateEmoji(data))
}

function updateEmoji(data) {
	emojiEl.innerHTML = data.htmlCode[0]
}

window.onload = newEmoji
buttonEl.addEventListener('click', newEmoji)
