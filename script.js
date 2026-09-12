const radio = document.querySelector('.botao-manual');
let contagem = 1;

document.getElementById('radio1').checked = true;

function proximaImg(){
    contagem++

    if(contagem > 5){
        contagem = 1;
    }

    document.getElementById('radio' + contagem).checked = true;
    
}

setInterval( () =>{
    proximaImg();
}, 5000) // 5000 é igual a 5 segunds, ou seja 5 segundos pra cada slide

