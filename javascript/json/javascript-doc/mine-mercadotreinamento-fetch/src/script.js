fetch(
  "https://lailanga.github.io/area-aprendizagem/javascript/json/produtos.json"
)
  .then((response) => {
    if (!response.ok) {
      throw new Error("HTTP error: " + response.status);
    }
    return response.json();
  })
  .then((json) => inicialize(json))
  .catch((err) => console.error("primeiro fetch problema: " + err.message));

function inicialize(produtos) {
  const categoria = document.querySelector("#categoria");
  const pesquisa = document.querySelector("#pesquisa");
  const btn = document.querySelector("button");
  const main = document.querySelector("main");

  let ultimaCategoria = categoria.value;
  let ultimaPesquisa = "";

  let grupoCategoria;
  let grupoFinal;

  grupoFinal = produtos;
  atualizaTela();

  grupoCategoria = [];
  grupoFinal = [];

  btn.addEventListener("click", selecaoCategoria);

  function selecaoCategoria(e) {
    e.preventDefault(); //canselar o envio do formulario padrao

    grupoCategoria = [];
    grupoFinal = [];

    if (
      categoria.value == ultimaCategoria &&
      pesquisa.value.trim() == ultimaPesquisa
    ) {
      return;
    } else {
      ultimaCategoria = categoria.value;
      ultimaPesquisa = pesquisa.value.trim();

      //console.log(ultimaPesquisa);

      if (ultimaCategoria == "todas") {
        grupoCategoria = produtos;
        selecaoProdutos();
      } else {
        const tipo = ultimaCategoria.toLowerCase();
        //toLowerCase() converte para minusculo
        grupoCategoria = produtos.filter((produtos) => produtos.tipo == tipo);
        //console.log(grupoCategoria);
        selecaoProdutos();
      }
    }
  }

  function selecaoProdutos() {
    if (ultimaPesquisa == "") {
      grupoFinal = grupoCategoria;
    } else {
      const pesquisaMinuscula = ultimaPesquisa.toLowerCase();
      grupoFinal = grupoCategoria.filter((produtos) =>
        produtos.nome.includes(pesquisaMinuscula)
      );
    }
    atualizaTela();
  }

  function atualizaTela() {
    while (main.firstChild) {
      main.removeChild(main.firstChild);
    }
    if (grupoFinal.length == 0) {
      const para = document.createElement("p");
      para.textContent = "Nenhum resultado para exibir!";
      main.appendChild(para);
    } else {
      for (const produto of grupoFinal) {
        buscaBlob(produto);
      }
    }
  }

  function buscaBlob(produtos) {
    const url = produtos.imagem;

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("HTTP erro img*: " + response.status);
        }
        return response.blob();
      })
      .then((blob) => mostrarProdutos(blob, produtos))
      .catch((err) =>
        console.error("Fetch busca blob problema: " + err.message)
      );
  }

  function mostrarProdutos(blob, produtos) {
    const objURL = URL.createObjectURL(blob);
    const section = document.createElement("section");
    const titulo = document.createElement("h2");
    const para = document.createElement("p");
    const img = document.createElement("img");

    section.setAttribute("class", produtos.tipo);
    titulo.textContent = produtos.nome.replace(
      produtos.nome.charAt(0),
      produtos.nome.charAt(0).toUpperCase()
    );
    para.textContent = produtos.valor.toFixed(2);
    img.src = objURL;
    img.alt = produtos.nome;

    main.appendChild(section);
    section.appendChild(titulo);
    section.appendChild(para);
    section.appendChild(img);
  }
}
