window.alert('Descubra seu conceito final de acordo com suas notas! (B ou C)')
var notaB = 7 && 8
var notaC = notaC >= 0 && notaC < 7

var n1 = Number(window.prompt('Preencha sua nota 1'))
var n2 = Number(window.prompt('Preencha sua nota 2'))
var n3 = Number(window.prompt('Preencha sua nota 3'))

var resultado = (n1 + n2 + n3) / 3
var status = resultado >= 7 ? "B" : "C"

window.alert(`Seu conceito final é ${status}`)