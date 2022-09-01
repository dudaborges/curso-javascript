//função comer piza
function comerPizza(){
    //enquanto tem fatia, comer pizza
    while(temFatia()){
        comerPizza()
    }
}

//quando acabar a pizza, parar de executar a função de comer