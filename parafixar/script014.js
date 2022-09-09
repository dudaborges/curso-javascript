let frutas = ["banana", "uva", "mamão", "maça", "perâ"]
frutas.push("morango")
frutas[3] = "maçã"
// console.log(frutas.length)


for(let indice = 0; indice < frutas.length; indice++){
    // console.log(`A fruta ${frutas[indice]} está na posição ${indice}`)
    console.log(`${indice} - ${frutas[indice]}`)
}


