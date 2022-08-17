function verificar(){
    var velt = document.getElementById('txtvel')
    var res = document.getElementById('res')

    var vel = Number(velt.value)

    res.innerHTML += 'Sua velocidade atual é de: ' + vel + 'km/h'

    if(vel > 60){
        res.innerHTML += 'Você está <strong>MULTADO</strong>'
    }
    res.innerHTML += `<p>Dirija sempre com cinto de segurança!</p>`
}