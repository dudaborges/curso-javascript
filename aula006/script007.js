window.alert("Aqui iremos converter real para dólar")
var nReal = Number(window.prompt("Digite um valor"))
window.alert("Seu valor é de " + nReal.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}))
var resultado = nReal / 5.35
window.alert(`O valor convertido para dólar fica ${resultado.toLocaleString('en', {style: 'currency', currency: 'USD'})}`)