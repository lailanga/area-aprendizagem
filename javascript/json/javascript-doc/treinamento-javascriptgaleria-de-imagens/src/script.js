const imagens = [
  { nome: "Bulbasaur", img: "https://i.imgur.com/i8XNPzH.png" },
  { nome: "Charmander", img: "https://i.imgur.com/hw6r9jp.png" },
  { nome: "Bulbasaur", img: "https://i.imgur.com/gx3Lq7l.png" },
  { nome: "Rattata", img: "https://i.imgur.com/ymDTIPD.png" },
  { nome: "Pikachu", img: "https://i.imgur.com/DA8VZcl.png" }
];

const principal = document.getElementById("principal");
const muda = document.getElementById("sombra");
const galeria = document.querySelector(".galeria");

for (const img of imagens) {
  const novaImg = document.createElement("img");
  novaImg.setAttribute("src", img.img);
  novaImg.setAttribute("alt", img.nome);
  galeria.appendChild(novaImg);
  novaImg.addEventListener("click", (evento) => {
    principal.src = evento.target.src;
  });
}

muda.addEventListener("click", () => {
  const btnClass = principal.getAttribute("class");
  if (btnClass === "") {
    principal.className = "acertou";
    muda.textContent = "colocar sombra";
  } else {
    principal.className = "";
    muda.textContent = "tirar sombra";
  }
});
