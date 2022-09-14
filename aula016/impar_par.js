// let num = 2

// if(num%2 == 0){
//     console.log('É par!')
// }else{
//     console.log('É ímpar!')
// }

//a função recebe um parâmetro n
function num(n){
    //se o resto da divisão do número 2 for igual a zero retorne 'par'
    if(n%2 == 0){
        return 'par'
    }else{
        return 'ímpar'
    }
}

let res = num(11)

console.log(res)
