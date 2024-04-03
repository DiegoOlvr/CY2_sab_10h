// COMENTÁRIO


/*
COMENTÁRIO 
DE 
MULTIPLAS
LINHAS
*/

// TIPOS DE DADOS
/**
 * NUMBER    => int float NaN
 * STRING    => texto
 * BOOLEAN   => true false
 * NULL      => vazio
 * UNDEFINED => não tem definição
 */

// CONVERTER TIPOS
/**
 * var = 4
 * de num para string
 * var.toString()
 * 
 * de string para num
 * parseInt(var)
 * ou
 * parseFloat(var)
 */

// OPERADORES ARITMÉTICOS
/**
 * +  ADIÇÃO
 * -  SUBTRAÇÃO
 * *  MULTIPLICAÇÃO
 * /  DIVISÃO
 * %  RESTO DA DIVISÃO
 * ** POTENCIA
 */

//! OPERADORES RELACIONAL
/**
 * >  MAIOR QUE
 * <  MENOR QUE
 * >= MAIOR OU IGUAL
 * <= MENOR OU IGUAL
 * == (2 iguais) IGUALDADE
 * === (3 iguais) IGUALDADE DE TIPOS DE DADOS E VALOR
 * != (! e igual) DIFERENTE
 * 
 */

//! OPERADORES LÓGICOS
/**
 * ! não - negação
 * &&  e - conjunção
 * || ou - disjunção
 */

//! VARIÁVEIS
/**
 * VAR   - vc pode redefinir - escopo global
 * LET   - vc não pode redefinir - escopo local
 * CONST - constante, uma informação que vc não irá mudar
 * 
 */

//! OUTROS TIPOS DE DADOS
/**
 * ARRAY  = LISTA
 * OBJECT = DICIONÁRIO
 * JSON   = JAVASCRIPT OBJECT NOTATION {chave : valor}
 * 
 */

//! FUNÇÕES = AÇÕES
/**
 * function nome_da_função(parametros)
 * {
 *    comandos
 * }
 * 
 */

//! CONDICIONAIS
/**
 * IF (CONDICAO_A)
 * {
 *    PLANO A
 * }
 * ELSE IF (CONDICAO_B)
 * {
 *    PLANO B
 * }
 * ELSE
 * {
 *    PLANO RESTO
 * }
 * 
 */

//! ESTRUTURA DE REPETIÇÃO
/**
 * for i in range(10)
 * 
 * for (let i = 1; i < 11; i++)
 * {
 *    o que tem que ser repetido
 * }
 * 
 */

// let x = 5
// let y = 3

// let soma = x + y

// window.alert(soma)
// document.write('<h1>' + soma + '</h1>')
// document.write(soma)
// document.write(`<h1> ${soma} </h1>`)
// console.log(soma)


let resposta = window.prompt('Digite um numero')
// console.log(resposta)
// document.write(resposta)

let num = resposta % 2
if (num == 0)
{
    document.write('É par')
}
else
{
    document.write('É impar')
}

// PEDI DOIS NÚMEROS E MOSTRE A SOMA
let n1 = parseInt(window.prompt('Digite um número: '))
let n2 = parseInt(window.prompt('Digite um número: '))

let soma = n1 + n2
document.write(soma)

// FAZER UMA TABUADA, PEDIR UM NÚMERO E MOSTRAR A TABUADA ATÉ O 10
/**
 * EX:
 * DIGITE UM NÚMERO: 5
 * 5 X 1 = 5
 * .
 * .
 * .
 * 5 X 10 = 50
 */


let numero = parseInt(window.prompt('Digite um número para tabuada:'))

for (let i = 1; i < 11; i++)
{
    document.write(`${numero} X ${i} = ${numero*i}<br>`)
}
