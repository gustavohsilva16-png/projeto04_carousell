const btnEsquerda = document.querySelector('#btnEsquerda');
const btnDireita = document.querySelector('#btnDireita');

const URL = [
    `./images/scr/componentes/carousel/manha.jpg`,
    `./images/scr/componentes/carousel/8bbf52cb9ef79091e8a5ae85ecc1f4e2.jpg`, // Lembre de conferir se falta extensão (.jpg, .png, etc.)
    `./images/scr/componentes/carousel/noite.jpg`
];

const telaCarrosel = document.getElementById('carousel'); 

let indiceatual = 0;

function atualizarCarrosel() {
    // CORREÇÃO: Usar indiceatual para pegar a URL correta
    telaCarrosel.style.backgroundImage = `url("${URL[indiceatual]}")`; 
}

// Inicializa o carrossel na primeira foto
atualizarCarrosel();

btnDireita.addEventListener("click", () => {
    indiceatual++;
    if (indiceatual >= URL.length) {
        indiceatual = 0;
    }
    atualizarCarrosel();
});

btnEsquerda.addEventListener("click", () => {
    indiceatual--;
    if (indiceatual < 0) {
        indiceatual = URL.length - 1;
    }
    atualizarCarrosel();
});