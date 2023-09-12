let numeroSecreto = Math.floor(Math.random() * 100) + 1;
console.log(numeroSecreto);
let contador = 0;
var jogadas = [];
const campoPalpite = document.getElementById("palpite");

const eventoChute = document.getElementById("chute");
eventoChute.addEventListener("click", jogar);

const eventoReset = document.getElementById("reset");
eventoReset.addEventListener("click", reset);

function jogar() {
  const palpite = document.getElementById("palpite").value;
  contador += 1;
  jogadas.push(palpite);
  campoPalpite.focus();

  if (palpite == numeroSecreto) {
    document.querySelector("span").innerHTML = "Parabéns! É o " + numeroSecreto;
    document.querySelector("input").value = "";
    document.getElementById("placar").innerHTML =
      "Total de tentativas = " + contador;
    mostarPalpite();
    campoPalpite.style.visibility = "hidden";
    eventoChute.style.visibility = "hidden";
    eventoReset.style.visibility = "visible";
  } else if (contador == 10) {
    document.querySelector("span").innerHTML =
      "Não foi dessa vez! Você já fez suas 10 tentativas. Inicie o jogo novamente e boa sorte!";
    document.getElementById("placar").innerHTML =
      "Total de tentativas = " + contador;
    mostarPalpite();
    campoPalpite.style.visibility = "hidden";
    eventoChute.style.visibility = "hidden";
    eventoReset.style.visibility = "visible";
  } else if (palpite < numeroSecreto) {
    document.querySelector("span").innerHTML =
      "ERROUU! Dica: Tente um número maior";
    document.querySelector("input").value = "";
    document.getElementById("placar").innerHTML =
      "Total de tentativas = " + contador;
    mostarPalpite();
  } else if (palpite > numeroSecreto) {
    document.querySelector("span").innerHTML =
      "ERROUU! Dica: Tente um número menor";
    document.querySelector("input").value = "";
    document.getElementById("placar").innerHTML =
      "Total de tentativas = " + contador;
    mostarPalpite();
  }
}

function mostarPalpite() {
  document.getElementById("tentativas").innerHTML = "";

  let lista = document.querySelector("#tentativas");
  let item;
  jogadas.forEach((n) => {
    item = document.createElement("li");
    item.textContent = n;
    lista.appendChild(item);
  });
}

function reset() {
  contador = 0;
  jogadas = [];
  eventoReset.style.visibility = "hidden";
  campoPalpite.style.visibility = "visible";
  eventoChute.style.visibility = "visible";
  document.querySelector("span").innerHTML = "";
  document.querySelector("input").value = "";
  document.getElementById("placar").innerHTML = "";
  document.getElementById("tentativas").innerHTML = "";
  numeroSecreto = Math.floor(Math.random() * 100) + 1;
}
