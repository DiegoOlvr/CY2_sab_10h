const API_URL = 'https://emojihub.yurace.pro/api/random'
const BUTTON = document.querySelector('button')
const EMOJI_SPAN = document.querySelector('.emoji')
const NAME = document.querySelector('h1')

BUTTON.addEventListener('click', new_emoji)
window.onload = new_emoji

async function new_emoji() {
    const RESPONSE = await fetch(API_URL)
    if (RESPONSE.ok) {
        const dados = await RESPONSE.json()
        EMOJI_SPAN.innerHTML = dados.htmlCode[0]
        NAME.innerHTML = dados.name.toString()
    }
}