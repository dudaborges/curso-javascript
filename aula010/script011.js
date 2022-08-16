var a = document.getElementById('area')
a.addEventListener('click', clicar)
a.addEventListener('mouseenter', entrar)
a.addEventListener('mouseout', sair)

function clicar(){
     var a = document.getElementById('area')
     a.innerText = 'Clicou!'
     a.style.backgroundColor = 'purple'
}

function entrar(){
    var a = document.getElementById('area')
    a.innerText = 'Entrou!'
    a.style.backgroundColor = 'green'

}

function sair(){
    var a = document.getElementById('area')
    a.innerText = 'Saiu!'
    a.style.backgroundColor = 'red'
}