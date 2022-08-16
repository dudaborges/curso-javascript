

window.alert('Verificar se você está aprovado ou não, com a média de 7')
        var n1 = Number(window.prompt('Digite sua nota 1'))
        var n2 = Number(window.prompt('Digite sua nota 2'))
        var n3 = Number(window.prompt('Digite sua nota 3'))
        var resultado = (n1 + n2 + n3) / 3
        var status = resultado >= 7 ? "aprovado" : "reprovado"
        window.alert(`A sua média deu ${resultado.toFixed(1)}, você está ${status}`)
