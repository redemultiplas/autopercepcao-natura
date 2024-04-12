const perguntas = [
    "Quão importante é para mim ser uma pessoa inclusiva?",
    "Qual o nível consciência tenho de meus estereótipos e vieses?",
    "Quão diverso avalio meu time direto?",
    "Me sinto a vontade para gerenciar o tema de diversidade na relação com meu time?",
    "Reconheço e celebro as diferentes contribuições e conquistas de pessoas diversas do meu time?",
    "Incentivo a participação e a contribuição de toda equipe durante reuniões e discussões?",
    "Quanto reconheço que tenho que me desenvolver e evoluir quanto a temática de inclusão?",
    "Quanto tenho buscado conhecimento em meu dia a dia, para ser um líder inclusivo?"
];

function gerarFormulario() {
    const form = document.getElementById('formularioAvaliacao');
    perguntas.forEach((pergunta, index) => {
        const divPergunta = document.createElement('div');
        divPergunta.className = 'pergunta';

        const labelPergunta = document.createElement('label');
        labelPergunta.className = 'pergunta-text';
        labelPergunta.textContent = `Pergunta ${index + 1}: ${pergunta}`;
        divPergunta.appendChild(labelPergunta);

        const divOpcoes = document.createElement('div');
        divOpcoes.className = 'opcoes';

        for (let i = 1; i <= 10; i++) {
            const input = document.createElement('input');
            input.type = 'radio';
            input.id = `pergunta${index + 1}-${i}`;
            input.name = `pergunta${index + 1}`;
            input.value = i;

            const label = document.createElement('label');
            label.htmlFor = input.id;
            label.textContent = i;

            divOpcoes.appendChild(input);
            divOpcoes.appendChild(label);
        }

        divPergunta.appendChild(divOpcoes);
        form.appendChild(divPergunta);
    });
}

function calcularPontuacao() {
    let soma = 0;
    for (let i = 1; i <= perguntas.length; i++) {
        const opcoes = document.getElementsByName(`pergunta${i}`);
        for (const opcao of opcoes) {
            if (opcao.checked) {
                soma += parseInt(opcao.value);
                break;
            }
        }
    }
    document.getElementById('resultado').innerText = 'Seu somatório é: ' + soma;
    window.scrollTo(0, document.body.scrollHeight);
}

window.onload = gerarFormulario;