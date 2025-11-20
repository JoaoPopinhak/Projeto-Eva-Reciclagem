// Seleciona os elementos do carrossel
var imagemAtual = document.getElementById("fotoAtual");
var imagemProxima = document.getElementById("fotoProxima");

// Lista de imagens
var fotos = ["ft1.jpg","ft2.jpeg"];
var indice = 0;
var tempoEspera = 5000;
var temporizador;

// -------------------- Inicialização --------------------
function inicializarCarrossel() {
    imagemAtual.src = "Imagens/Carrosel/" + fotos[indice];
    temporizador = setInterval(avancarFoto, tempoEspera);
}

// -------------------- Avança para a próxima imagem --------------------
function avancarFoto() {
    indice = (indice + 1) % fotos.length;
    carregarProximaImagem(fotos[indice]);
}

// -------------------- Pré-carrega a próxima imagem --------------------
function carregarProximaImagem(src) {
    var tempImg = new Image();
    tempImg.src = "Imagens/Carrosel/" + src;
    tempImg.onload = () => {
        animarImagem(tempImg.src);
    };
}

// -------------------- Executa animação fade + zoom --------------------
function animarImagem(src) {
    // Define a próxima imagem
    imagemProxima.src = src;

    // Estado inicial invisível e maior
    imagemProxima.style.opacity = "0";
    imagemProxima.style.transform = "scale(1.1)";

    // Força navegador a aplicar estilo inicial
    void imagemProxima.offsetWidth;

    // Ativa transição
    imagemProxima.style.opacity = "1";
    imagemProxima.style.transform = "scale(1)";

    // Após a animação, troca as imagens
    setTimeout(trocarImagens, 1200);
}

// -------------------- Troca as referências das imagens --------------------
function trocarImagens() {
    var temp = imagemAtual;
    imagemAtual = imagemProxima;
    imagemProxima = temp;

    // Reset da próxima imagem para próxima animação
    imagemProxima.style.opacity = "0";
    imagemProxima.style.transform = "scale(1.1)";
}

// -------------------- Inicia o carrossel --------------------
inicializarCarrossel();
