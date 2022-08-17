function somar(){
    var tn1 = document.getElementById('txtn1')
    var tn2 = document.getElementById('txtn2')
    var res = document.getElementById('res')
    
    var n1 = Number(tn1.value)
    var n2 = Number(tn2.value)
    var t = (n1 + n2) / 2
    
    res.innerHTML = `A sua média deu ${t}`

    if (t >= 7){
        alert('Você está aprovado!')
    }else{
        alert('Você está reprovado!')
    }

}



