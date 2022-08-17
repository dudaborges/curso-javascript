var idade = 15
console.log(`Você tem ${idade} anos`)

if (idade >= 18){
    console.log('Vota obrigatoriamente')
}else if (idade >= 16 || idade >= 65){
    console.log('Vota opcionalmente')
}else if (idade < 16){
    console.log('Não vota')
}