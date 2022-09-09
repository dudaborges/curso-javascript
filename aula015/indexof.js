let num = [5, 8, 2, 9, 3]
let indice = num.indexOf(10)
//quando  o valor não é encontrado, ele retorna -1
if(indice == -1){
    console.log('O valor não foi encontrado!')
}else{
    console.log(`A posição ${indice} tem o valor ${num[indice]}`)
}