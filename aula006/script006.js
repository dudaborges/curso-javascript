var salario = Number(window.prompt('Digite um número qualquer'))

document.write(`Seu futuro salário será de ${salario.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}`)