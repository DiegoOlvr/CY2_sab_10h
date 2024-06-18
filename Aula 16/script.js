const OUTPUT_COLOR = document.querySelector('#output-color span')
const OUTPUT = document.querySelector('#output')
const GENEREATE_BTN = document.querySelector('#generate')
const COPY_BTN = document.querySelector('#copy')
const ALERT_ELEMENT = document.querySelector('.alert')

window.onload = generate_hexcolor
GENEREATE_BTN.addEventListener('click', generate_hexcolor)
GENEREATE_BTN.addEventListener('mousedown', function (event) {
    if (event === 0) {
        GENEREATE_BTN.style.cursor = 'grabbing'
    }
})
GENEREATE_BTN.addEventListener('mouseup', remove_grabbing)
COPY_BTN.addEventListener('click', copy_to_clipboard)
COPY_BTN.addEventListener('mousedown', add_grabbing)
COPY_BTN.addEventListener('mouseup', remove_grabbing)

function add_grabbing() {
    GENEREATE_BTN.classList.add('grabbing')
    COPY_BTN.classList.add('grabbing')
}

function remove_grabbing() {
    GENEREATE_BTN.classList.remove('grabbing')
    COPY_BTN.classList.remove('grabbing')
}


function generate_hexcolor() {
    let hex_code = '#'
    for (i = 0; i < 6; i++){
        hex_code += Math.floor(Math.random() * 16).toString(16)
    }
    OUTPUT.value = hex_code
    OUTPUT_COLOR.classList.remove('show-color')
    setTimeout(() => OUTPUT_COLOR.classList.add('show-color'), 10)
    OUTPUT_COLOR.style.backgroundColor = hex_code
    
}

function copy_to_clipboard() {
    navigator.clipboard.writeText(OUTPUT.value)
    copy_alert()
}

function copy_alert() {
    ALERT_ELEMENT.classList.add('show')
    setTimeout(() => ALERT_ELEMENT.classList.remove('show'), 2000)

}