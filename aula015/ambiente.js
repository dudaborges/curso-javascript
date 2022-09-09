let num = [5, 8, 2, 9, 3]
num[3] = 6 //substitui um valor por outro pelo seu índice
num[5] = 10 //adiciona o valor, já que foi colocado um índice não existente
num.push(7) //acrescentar valores a uma array sem precisar saber sua posição

console.log(`Nosso vetor é o ${num}`)
