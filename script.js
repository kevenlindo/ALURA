const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Durante uma partida de futebol, um jogador importante do time adversário sofreu uma lesão e precisou sair do jogo. Como você reage a essa situação?",
        alternativas: [
            {
                texto: "É uma grande oportunidade para o meu time vencer o jogo!",
                afirmacao: "Você está focado na vitória, mas deve lembrar que o esporte também é sobre fair play."
            },
            {
                texto: "Fico preocupado com a saúde do jogador e espero que ele se recupere logo.",
                afirmacao: "Sua empatia e espírito esportivo mostram que você valoriza a integridade dos atletas."
            }
        ]
    },
    {
        enunciado: "Seu time está perdendo por um gol, e o árbitro marca um pênalti duvidoso a favor do seu time. O que você faz?",
        alternativas: [
            {
                texto: "Aproveito a oportunidade e tento converter o pênalti para empatar o jogo.",
                afirmacao: "Você acredita em aproveitar as oportunidades, mesmo que a decisão do árbitro seja questionável."
            },
            {
                texto: "Questiono a decisão do árbitro e sugiro que ele revise a jogada.",
                afirmacao: "Você valoriza a justiça no esporte e prefere ganhar de forma justa."
            }
        ]
    },
    {
        enunciado: "Após uma derrota importante, o técnico do time faz críticas duras aos jogadores publicamente. Como você reage a essa situação?",
        alternativas: [
            {
                texto: "Aceito as críticas como uma oportunidade de melhorar e me esforço ainda mais nos treinos.",
                afirmacao: "Você usa as críticas como motivação para crescer e melhorar no esporte."
            },
            {
                texto: "Fico desmotivado e penso em conversar com o técnico sobre a forma como ele está lidando com a equipe.",
                afirmacao: "Você se preocupa com o ambiente do time e acredita que a comunicação é essencial para resolver problemas."
            }
        ]
    },
    {
        enunciado: "Seu time ganha um campeonato importante e você é eleito o melhor jogador da temporada. O que você faz?",
        alternativas: [
            {
                texto: "Comemoro intensamente e aproveito o momento de glória.",
                afirmacao: "Você celebra suas conquistas e reconhece seu esforço e dedicação ao esporte."
            },
            {
                texto: "Agradeço aos meus companheiros de equipe e ao técnico pelo apoio durante toda a temporada.",
                afirmacao: "Você reconhece a importância do trabalho em equipe e sabe que o sucesso é compartilhado."
            }
        ]
    },
    {
        enunciado: "Você está jogando uma partida decisiva e percebe que o adversário está jogando de forma desleal, cometendo faltas constantemente. Como você reage?",
        alternativas: [
            {
                texto: "Mantenho a calma e foco no jogo, deixando o árbitro lidar com a situação.",
                afirmacao: "Você demonstra maturidade e disciplina ao manter o foco, mesmo em situações adversas."
            },
            {
                texto: "Começo a jogar com mais agressividade para mostrar que não vou aceitar esse comportamento.",
                afirmacao: "Você acredita em responder na mesma moeda, mas deve ter cuidado para não perder o controle."
            }
        ]
    }
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
