let header = document.querySelector("header");
let section = document.querySelector("section");

let requestURL =
  "https://lailanga.github.io/area-aprendizagem/javascript/json/turismo_2022.json";
let request = new XMLHttpRequest();

request.open("GET", requestURL);
request.responseType = "json";
request.send();
//console.log(request.response);

request.onload = function () {
  let dados = request.response;
  //console.log(dados);
  biografia(dados);
  locais(dados);
};

function biografia(prop) {
  let nome = document.createElement("h1");
  nome.textContent = prop["nome"];
  header.appendChild(nome);

  let divDes = document.createElement("div");
  let descricao = document.createElement("p");
  descricao.textContent = prop["bio"];
  divDes.appendChild(descricao);
  header.appendChild(divDes);
}

function locais(prop) {
  let viagem = prop["matogrosso"];

  // let local = document.createElement("h3");
  // local.textContent = "Estado: " + prop["estado"];
  //section.appendChild(local);

  for (var i = 0; i < viagem.length; i++) {
    let div = document.createElement("div");
    let cidade = document.createElement("h4");
    let lista = document.createElement("ul");

    cidade.textContent = "Cidade: " + viagem[i].cidade + " - " + prop["sigla"];

    let pontoTuristico = viagem[i].pontos;
    for (var j = 0; j < pontoTuristico.length; j++) {
      let listaItem = document.createElement("li");
      listaItem.textContent = pontoTuristico[j];
      lista.appendChild(listaItem);
    }

    div.appendChild(cidade);
    div.appendChild(lista);
    section.appendChild(div);
  }
}