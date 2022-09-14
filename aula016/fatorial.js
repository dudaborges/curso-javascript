function fatorial(n) {
    let fatN = 1
    for(let numMulti = n; numMulti > 1; numMulti--){
        fatN *= numMulti
        //fatN = fatN * numMulti
        //ex numMulti começa com 5. fatN vira 5 (5*1).
    }
    return fatN
}

console.log(fatorial(5))