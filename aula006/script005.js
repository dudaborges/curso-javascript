var nome = window.prompt('Qual é o seu nome?')
document.write(`Olá, <strong>${nome}</strong>! Seu nome tem ${nome.length} letras.<br/>`)
//escreve na tela || length = quantidade de digitos (conta o espaçamento)

document.write(`Seu nome em maiúsculas é ${nome.toUpperCase()}<br>`)

document.write(`Seu nome em minúsculas é ${nome.toLowerCase()}`)