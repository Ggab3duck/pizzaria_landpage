const radios = document.querySelectorAll('input[name="btn-radio-carrosel"]');
const INTERVALO = 5000; // 5 segundos por slide

let atual = 0;
let timer;

function mostrar(indice) {
    atual = indice;
    radios[atual].checked = true;
}

function proximaImg() {
    mostrar((atual + 1) % radios.length);
}

function iniciarTimer() {
    clearInterval(timer);
    timer = setInterval(proximaImg, INTERVALO);
}

// quando o usuário clica numa bolinha, sincroniza o contador e reinicia o tempo
radios.forEach((radio, indice) => {
    radio.addEventListener('change', () => {
        atual = indice;
        iniciarTimer();
    });
});

mostrar(0);
iniciarTimer();
