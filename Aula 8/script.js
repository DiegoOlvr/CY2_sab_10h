// COMO IDENTIFICAR ELEMENTOS DA TELA
const divs = document.getElementsByTagName('div')
const div = document.getElementById('area')
const div_class = document.getElementsByClassName('area')
let contador_click = 0


console.log(divs) // MOSTRA UMA LISTA
console.log(div)  // MOSTRA O ELEMENTO
console.log(div_class)  // MOSTRA UMA LISTA



// ALTERANDO AS PROPRIEDADES DOS ELEMENTOS
div.style.backgroundColor = 'green'

for (var i = 0; i < divs.length; i++)
{
    div_class[i].style.backgroundColor = 'green'
    divs[i].innerText = 'Robson'
    // divs[i].addEventListener('click', clicar2)
}


// EVENTOS
div.addEventListener('click', clicar)
div.addEventListener('mouseenter', entrar)
div.addEventListener('mouseout', sair)
div.addEventListener('mouseup', clicado)
div.addEventListener('mousedown', desclicado)

function desclicado()
{
    div.style.backgroundColor = 'blue'
}

function clicado()
{
    div.style.backgroundColor = 'red'
    contador_click++
    if (contador_click == 5)
    {
        div.remove()    
    }
}

function sair()
{
    div.innerText = 'Fui saido'
    div.style.backgroundColor = 'green'
}

function entrar() 
{
    div.innerText = 'Fui Entrado'
    div.style.fontSize = '50px'
}

function clicar()
{
    div.innerText = 'Fui clicado!'

}


function clicar2()
{
    for (var i = 0; i < divs.length; i++)
    {
        div_class[i].style.backgroundColor = 'blue'
        divs[i].innerText = 'ma oie'
    }

}