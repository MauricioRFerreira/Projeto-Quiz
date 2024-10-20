const pythonColor = document.querySelector('#python');
const jsColor = document.querySelector('#js');
const csharpColor = document.querySelector('#csharp');
const javaColor = document.querySelector('#java');
const tentarNovamenteBtn = document.querySelector('#tentarNovamente');
const feedback = document.querySelector('#feedback');

let jogoAtivo = true; // Variável para controlar se o jogo está ativo

// Função para mudar a cor dos botões e dar feedback
function convertColor(event) {

	if (!jogoAtivo) return; // Se o jogo não estiver ativo, não faz nada

	resetColors(); // Limpa a cor de todos os botões

	const botaoClicado = event.target; // Obtém o botão que foi clicado

	const colorRed = 'rgb(186, 50, 50)';
	const colorGreen = 'rgb(131, 204, 131)';

	if (botaoClicado === jsColor) {
		botaoClicado.style.backgroundColor = colorGreen; // Resposta certa
		feedback.textContent = 'Correto! JavaScript é a linguagem principal para desenvolvimento web.';
		feedback.style.color = colorGreen;
	} else {
		botaoClicado.style.backgroundColor = colorRed; // Resposta errada
		feedback.textContent = 'Resposta errada. Tente novamente!';
		feedback.style.color = colorRed;
	}

	jogoAtivo = false; // Desativa o jogo após uma tentativa
}

// Função para resetar cores e feedback
function resetColors() {
	const botoes = [pythonColor, jsColor, csharpColor, javaColor];
	botoes.forEach(botao => {
		botao.style.backgroundColor = '';
	});
	feedback.textContent = '';
}

// Função para tentar novamente
function tentarNovamente() {
	resetColors();
	jogoAtivo = true; // Reativa o jogo
}

// Adiciona eventos de clique aos botões
[pythonColor, jsColor, csharpColor, javaColor].forEach(botao => {
	botao.addEventListener('click', convertColor);
});

tentarNovamenteBtn.addEventListener('click', tentarNovamente);
