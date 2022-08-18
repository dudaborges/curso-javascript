/*var nota = 'W'

switch(nota){
    case 'A':
        console.log('Você tirou entre 8 e 10')
        break
    case 'B':
        console.log('Você tirou entre 6 e 8')
        break
    case 'C':
        console.log('Você tirou abaixo de 6')  
        break
    default:
        console.log('[ERRO] Letra inválida!')          
}*/

var nota = 7

if (nota >= 8){
    console.log('Você tirou A. Parabéns!')
}else if (nota >= 7){
    console.log('Você tirou B. Parabéns!')
}else{
    console.log('Você tirou C. Continue tentando!')
}