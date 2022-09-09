let num = [5, 8, 2, 9, 3]
console.log(num.indexOf(3)) //para encontrar o valor por meio de seu índice
//lê-se: para cada posição dentro de num
//for é para, in é dentro ou em
for(let indice in num){
    console.log(`A posição ${indice} tem o valor ${num[indice]}`)
}