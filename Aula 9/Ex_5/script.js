// 1ª - IDENTIFICAR O ELEMENTO
let entrada = document.getElementById('input')
console.log(entrada)

// 2ª - IDENTIFICAR O EVENTO
entrada.addEventListener('change', exibir_alerta)

// 3ª - FAZER A FUNÇÃO
function exibir_alerta()
{
    let valor = entrada.value
    alert('O valor foi alterado para ' + valor)
}