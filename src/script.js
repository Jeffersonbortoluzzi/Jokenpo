let jogadorNome;
let jogadorPontos = 0;
let jogadorEscolha = 0;

let computadorPontos = 0;
let computadorEscolha = 0;

// Exibe mensagem no console.
function mensagem(texto) {
  document.getElementById("mensagem").innerHTML = texto;
}

// Define o nome do jogador na tela
function definirNomeJogador(nome) {
  document.getElementById("jogador-nome").innerHTML = nome;
}

// Sorteia entre dois números
function sortear(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Calcula e retorna quem ganhou
// 0 - empate
// 1 - jogador
// 2 - computador
function calcularEscolha(jogador, computador) {
  if (jogador == 1 && computador == 1) {
    return 0;
  } else if (jogador == 1 && computador == 2) {
    return 2;
  } else if (jogador == 1 && computador == 3) {
    return 1;
    //
  } else if (jogador == 2 && computador == 1) {
    return 1;
  } else if (jogador == 2 && computador == 2) {
    return 0;
  } else if (jogador == 2 && computador == 3) {
    return 2;
  }
  //
  else if (jogador == 3 && computador == 1) {
    return 2;
  } else if (jogador == 3 && computador == 2) {
    return 1;
  } else if (jogador == 3 && computador == 3) {
    return 0;
  }
}

// Soma pontos para o jogador
function somarPontoJogador() {
  jogadorPontos++;
  document.getElementById("jogador-pontos").innerHTML = jogadorPontos;
}

// Soma pontos para o computador
function somarPontocomputador() {
  computadorPontos++;
  document.getElementById("computador-pontos").innerHTML = computadorPontos;
}

// Adiciona a classe selecionado
function selecionar(tipo, escolha) {
  document.getElementById(tipo + "-escolha-" + escolha).classList.add("selecionado");
}

// Remove a classe selecionado
function deselecionar(tipo, escolha) {
  document.getElementById(tipo + "-escolha-" + escolha).classList.remove("selecionado");
}

// Escolhe a jogada do usuário
// 1 - Pedra
// 2 - Papel
// 3 - Tesoura
function jogar(escolha) {
  jogadorEscolha = escolha;
  selecionar('jogador', jogadorEscolha);

  // Sortear a jogada do computador
  computadorEscolha = sortear(1, 3);
  selecionar("computador", computadorEscolha);

  let ganhador = calcularEscolha(jogadorEscolha, computadorEscolha);

  if (ganhador == 0) {
    mensagem("Empate");
  } else if (ganhador == 1) {
    mensagem("Ponto para " + jogadorNome);
    somarPontoJogador();
  } else if (ganhador == 2) {
    mensagem("Ponto para o Computador");
    somarPontocomputador();
  }

  setTimeout(function() {
     deselecionar("jogador", jogadorEscolha);
     deselecionar("computador", computadorEscolha);
     mensagem(jogadorNome + " escolha uma opção.")
  }, 1200);
  
  setTimeout(function() { }, 1200); 
  
  setTimeout(function() { }, 1200);
    

  // Calcular ganhador

  // Somar pontos

  // Exibir par ao usuário (mão)
}

document.getElementById("jogador-escolha-1").onclick = function () {
  jogar(1);
};
document.getElementById("jogador-escolha-2").onclick = function () {
  jogar(2);
};
document.getElementById("jogador-escolha-3").onclick = function () {
  jogar(3);
};

jogadorNome = prompt("Qual é o seu nome?");

mensagem(
  "Bem-vindo " + jogadorNome + " está preparado? Escolha uma opção acima!"
);

definirNomeJogador(jogadorNome);


let darkToggle = document.querySelector('#darkToggle');
darkToggle.addEventListener("change", ()=> {
  document.body.classList.toggle("dark");
});