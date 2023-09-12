const enviar = document.querySelector("button");
const input = document.querySelector("#item");
const lista = document.querySelector("ul");

enviar.addEventListener("click", () => {
  var item = input.value;

  const addItem = document.createElement("li");
  addItem.textContent = item;
  lista.appendChild(addItem);

  const bttDelete = document.createElement("button");
  bttDelete.textContent = "excluir item";
  addItem.appendChild(bttDelete);

  bttDelete.addEventListener("click", () => {
    lista.removeChild(addItem);
  });

  reset();
});

function reset() {
  input.value = "";
  input.focus();
}
