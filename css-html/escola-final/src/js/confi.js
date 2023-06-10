const btn = document.querySelector("button");
const nav = document.querySelector("#menu");
const classes = nav.classList;

btn.addEventListener("click", () => {
  classes.toggle("menu");
});

const dark = document.querySelector("#toggle_checkbox");
const html =  document.querySelector("html");

dark.addEventListener("click", () => {
    html.classList.toggle("dark-mode");
});

