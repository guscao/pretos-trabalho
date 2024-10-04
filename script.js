const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Qual é uma das principais causas da desigualdade de renda no Brasil?",
        alternativas: [
            {
                texto: "A falta de regulamentação no mercado financeiro.",
                afirmacao:""
            },
            {
                texto:"A alta carga tributária sobre as grandes fortunas.",
                afirmacao:""
            }
           
            
        ]
    },
    {
        enunciado: "Qual é uma das principais consequências da falta de acesso à educação de qualidade para crianças em áreas carentes?",
        alternativas: [
            {
                texto: "Maior taxa de analfabetismo e menor oportunidades de emprego no futuro.",
                afirmacao:""
            },
            {
                texto:"Aumento na qualidade das infraestruturas públicas.",
                afirmacao:""
            }

        ]
    },
];

let atual = 0;
let perguntaAtual;
let historiaFInal = "";

function mostraPergunta() {
    if (atual >= perguntas,length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas ();
}

function mostraAlternativas() {
    for(const alternativa of perguntaAtual.alternativas) {
      const botaoAlternativas = document.createElement("button");
      botaoAlternativas.textContent = alternativa.texto;
      botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
      caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada){
    const afircoes = opcaoSelecionada.afircoes;
    historiaFInal += afircoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2019...";
    textoResultado.textContent = historiaFInal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
    


