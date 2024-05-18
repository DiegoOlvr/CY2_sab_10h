// LISTA DE PERGUNTAS
const QUESTOES_QUIZ = [
    {
        questao: "Qual é o simbolo do Dia das Mães",
        a: 'Flor',
        b: 'Coração',
        c: 'Presente',
        d: 'Bebê',
        correta: 'a'
    },
    {
        questao: "Qual a data do dia Das das Mães",
        a: '12 de Maio',
        b: '1º Domingo de Maio',
        c: '2º Domingo de Junho',
        d: '2º Domingo de Maio',
        correta: 'd'
    },
    {
        questao: "Em que país foi comemorado pela primeira vez o Dia das Mães",
        a: 'Brasil',
        b: 'França',
        c: 'Estados Unidos da América',
        d: 'Mexico',
        correta: 'c'
    },
]

// IDENTIFICANDO ELEMENTOS
const QUIZ_TITULO = document.getElementById('questao')
const ALTERNATIVA_A = document.getElementById('text_a')
const ALTERNATIVA_B = document.getElementById('text_b')
const ALTERNATIVA_C = document.getElementById('text_c')
const ALTERNATIVA_D = document.getElementById('text_d')
const BOTAO = document.getElementById('enviar')
const QUIZ_CONTEINER = document.getElementById('quiz')
const RESPOSTAS = document.querySelectorAll('.resposta')

// VARIÁVEIS
let questao_atual = 0
let corretas = 0

carregar_quiz()

function carregar_quiz()
{
    desmarcar_respostas()
    const INFO_QUESTAO = QUESTOES_QUIZ[questao_atual]

    QUIZ_TITULO.innerText = INFO_QUESTAO.questao
    ALTERNATIVA_A.innerText = INFO_QUESTAO.a
    ALTERNATIVA_B.innerText = INFO_QUESTAO.b
    ALTERNATIVA_C.innerText = INFO_QUESTAO.c
    ALTERNATIVA_D.innerText = INFO_QUESTAO.d
    
}

function pegar_resposta()
{
    let resposta = undefined

    RESPOSTAS.forEach((resp_elemento) => {
        if (resp_elemento.checked)
        {
            resposta = resp_elemento.id    
        }
    })
    return resposta
}


function clicado()
{
    const RESPOSTA_JOGADOR = pegar_resposta()
    const TOTAL_PERGUNTAS = QUESTOES_QUIZ.length

    if (RESPOSTA_JOGADOR)
    {
        if (RESPOSTA_JOGADOR === QUESTOES_QUIZ[questao_atual].correta)
        {
            corretas++
        }
        questao_atual++
        if (questao_atual < TOTAL_PERGUNTAS)
        {
            carregar_quiz()    
        }
        else
        {
            QUIZ_CONTEINER.innerHTML = `<h1 class="reset_h1">Você acertou ${corretas}/${TOTAL_PERGUNTAS} questões </h1>
            <button class="reset_btn" onclick='location.reload()'> RESETAR </button>
            `
        }
    }
}

function desmarcar_respostas()
{
    RESPOSTAS.forEach((resp) => {
        resp.checked = false
    })
}


BOTAO.addEventListener('click', clicado)