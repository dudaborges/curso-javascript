let num = [5, 8, 2, 9, 3]

num[3] = 6 //substitui um valor por outro pelo seu índice
num[5] = 10 //adiciona o valor, já que foi colocado um índice não existente
num.push(7) //acrescentar valores a uma array sem precisar saber sua posição

num.sort() //para colocar os números de forma ordenada

console.log(`Nosso vetor é o ${num}`)
console.log(`O vetor tem ${num.length} posições`) //para descobrir o tamanho da array

console.log(`O primeiro elemento desse vetor é o ${num[0]}`)



