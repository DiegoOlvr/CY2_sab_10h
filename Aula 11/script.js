// IDENTIFICAR ELEMENTOS (NÚMEROS)
let dias_n = document.getElementById('dias_n')
let horas_n = document.getElementById('horas_n')
let minutos_n = document.getElementById('minutos_n')
let segundos_n = document.getElementById('segundos_n')

// DATA ALVO
let aniversario = '30 June 2024'

// CRIAR FUNÇÃO DE CALCULAR A DIFERENÇA ATÉ A DATA
function contagem() {
    const hoje = new Date()
    const aniversario_convertido = new Date(aniversario)
    const total_segundos = (aniversario_convertido - hoje) / 1000

    // OBTER A DIFERENÇA EM DIAS, HORAS, MIN, SEG
    const minutos = Math.floor(total_segundos / 60) % 60
    const horas = Math.floor(total_segundos / 3600) % 24
    const dias = Math.floor(total_segundos / 3600 / 24)
    const segundos = Math.floor(total_segundos) % 60

    // ALTERANDO OS ELEMENTOS
    horas_n.innerText = formatar_digito(horas)
    dias_n.innerText = formatar_digito(dias)
    minutos_n.innerText = formatar_digito(minutos)
    segundos_n.innerText = formatar_digito(segundos)

    // MOSTRAR VALORES
    console.log(dias, horas, minutos, segundos)
}

// CHAMAR FUNÇÃO
contagem()
// CHAMAR A FUNÇÃO DE TEMPO EM TEMPO
setInterval(contagem, 1000)

// FUNÇÃO PARA FORMATAR DIGITOS
function formatar_digito(tempo) {
    // if (tempo < 10) {
    //     return `0${tempo}`
    // }
    // else {
    //     return tempo 
    // }

    return tempo < 10 ? `0${tempo}` : tempo;
}

/**
 * ATIVIDADE PARA SEMANA
 * 
 * Fazer a data alvo ser dinâmica
 * Se atingir a data, altera para o ano seguinte
 * Adicionar um recurso visual e sonoro quando atingir a meta
 * 
 */