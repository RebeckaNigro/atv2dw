// Seleciona elementos do DOM
const filtro = document.getElementById('filtro');
const tabela = document.getElementById('lista');
const linhas = tabela.getElementsByTagName('tr');
const redacao = document.getElementById('redacao');
const restam = document.getElementById('restam');
const checkboxes = document.querySelectorAll('input[type=checkbox]');
const enviar = document.getElementById('enviar');

// Função para filtrar tabela
function filtrarTabela() {
  const valorFiltro = filtro.value.toLowerCase();
  for (let i = 0; i < linhas.length; i++) {
    const linha = linhas[i];
    const textoLinha = linha.innerText.toLowerCase();
    if (textoLinha.includes(valorFiltro)) {
      linha.style.display = '';
    } else {
      linha.style.display = 'none';
    }
  }
}

// Função para selecionar linha
function selecionarLinha() {
  for (let i = 0; i < linhas.length; i++) {
    const linha = linhas[i];
    linha.onclick = function() {
      if (linha.classList.contains('selecionada')) {
        linha.classList.remove('selecionada');
      } else {
        for (let j = 0; j < linhas.length; j++) {
          linhas[j].classList.remove('selecionada');
        }
        linha.classList.add('selecionada');
        enviar.style.display = 'block';
      }
    }
  }
}

// Função para calcular caracteres restantes
function contarCaracteres() {
  const maxCaracteres = 500;
  const caracteresDigitados = redacao.value.length;
  const caracteresRestantes = maxCaracteres - caracteresDigitados;
  restam.innerHTML = caracteresRestantes;
}

// Função para calcular pontos das tarefas selecionadas
function calcularPontos() {
  let totalPontos = 0;
  for (let i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
      totalPontos += parseInt(checkboxes[i].value);
    }
  }
  document.getElementById('resultado').innerHTML = totalPontos;
}

// Adiciona eventos aos elementos do DOM
filtro.addEventListener('keyup', filtrarTabela);
selecionarLinha();
redacao.addEventListener('keyup', contarCaracteres);
for (let i = 0; i < checkboxes.length; i++) {
  checkboxes[i].addEventListener('click', calcularPontos);
}
enviar.style.display = 'none';
