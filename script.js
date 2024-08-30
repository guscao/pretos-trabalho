const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultao");

const perguntas = [
    {
        enunciado: "Qual é uma das principais causas da desigualdade de renda no Brasil?",
        alternativas: [
            "a) A falta de regulamentação no mercado financeiro.",
            "b) A alta carga tributária sobre as grandes fortunas."
        ]
    },
    {
        enunciado: "Qual é uma das principais consequências da falta de acesso à educação de qualidade para crianças em áreas carentes?",
        alternativas: [
            "a) Maior taxa de analfabetismo e menor oportunidades de emprego no futuro.",
            "b) Aumento na qualidade das infraestruturas públicas."
        ]
    }
];

let atual = 0;
let perguntaAtual;

function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    mostraAlternativas ();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button"); 
        botaoAlternativas.textContent = alternativa;
        caixaAlternativas.appendChild(botaoAlternativas)
    }
}
mostraPergunta()

