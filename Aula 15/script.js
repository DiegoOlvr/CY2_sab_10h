// 1º IDENTIFICAR OS ELEMENTOS
const FORMULARIO = document.getElementById('formulario')
const ENTRADA = document.getElementById('entrada')
const TAREFAS = document.getElementById('tarefas')
const LI_ELEMENTOS = querySelectorAll('li')

const CACHE = JSON.parse(localStorage.getItem('tarefas'))

if (CACHE) {
    CACHE.forEach((item) => {
        adicionar_tarefa(item)
    })
}

// 2º CRIAR OS EVENTOS
FORMULARIO.addEventListener('submit', (e) => {
    e.preventDefault()
    
    adicionar_tarefa()
})

// 3º CRIAR AS FUNÇÕES DOS EVENTOS
function adicionar_tarefa(texto) {
    let tarefa_entrada = ENTRADA.value

    if (texto) {
        tarefa_entrada = texto.text
    }

    const QUANTIDADE_LI = LI_ELEMENTOS.length
    if (tarefa_entrada && QUANTIDADE_LI <= 15)
    {
        const ELEMENTO_TAREFA = document.createElement('li')
        if (texto && texto.completed)
        {
            ELEMENTO_TAREFA.classList.add('completada')    
        }
        ELEMENTO_TAREFA.innerText = tarefa_entrada
        TAREFAS.appendChild(ELEMENTO_TAREFA)

        ELEMENTO_TAREFA.addEventListener('click', () => {
            ELEMENTO_TAREFA.classList.toggle('completada')
            atualizar_cache()
        })

        ELEMENTO_TAREFA.addEventListener('contextmenu', (e) => {
            e.preventDefault()
            ELEMENTO_TAREFA.remove()
            atualizar_cache()
        })

        ENTRADA.value = ''
        atualizar_cache()

    }
}


function atualizar_cache() {
    const ITENS_TAREFAS = document.querySelectorAll('li')
    const LISTA_TAREFAS = []
    ITENS_TAREFAS.forEach((elemento) => {
        LISTA_TAREFAS.push({
            text: elemento.innerText,
            completed: elemento.classList.contains('completada'),

        })
    })
    localStorage.setItem('tarefas', JSON.stringify(LISTA_TAREFAS))
}