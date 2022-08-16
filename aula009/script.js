window.document.body //para acessar o body
        window.document.write('Essa é a URL dessa página: ')
        window.document.write(window.document.URL)
        //não é necessário escrever o "window" antes do "documet"
        //O "write" é o jeito mais simples de adicionar componentes, mas não é a melhor maneira.


        var p1 = document.getElementsByTagName('p')[0] 
        //[0] é pra selecionar o primeiro, pq se inicia com 0
        window.document.write(' O que está escrito no primeiro parágrafo: ', p1.innerText)

        p1.style.color = 'black' //para mudar o estilo do p1


        var p2 = document.getElementById('p2')
        p2.style.color = 'pink'

        document.getElementById('msg').innerText = 'Olá!'
        //ou pode ser feito dessa forma:
        var teste = document.getElementById('msg')
        teste.innerText = 'Olá!'   
        
        //query selector
        var p3 = document.querySelector('p.p3')
        //quando é id '#' quando é classe '.'
        p3.style.color = 'purple'