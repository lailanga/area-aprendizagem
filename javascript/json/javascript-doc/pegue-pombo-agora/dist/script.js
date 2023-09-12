const para = document.querySelector("p");
let count = 0;

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight);

function random(min, max) {
  const num = Math.floor(Math.random() * (max - min)) + min;
  return num;
}

class Forma {
  constructor(x, y, velX, velY) {
    this.x = x;
    this.y = y;
    this.velX = velX;
    this.velY = velY;
  }
}
class Dig extends Forma {
  constructor(x, y) {
    super(0, 0, 80, 80);
    this.size = 15;

    window.addEventListener("keydown", (evento) => {
      switch (evento.key) {
        case "ArrowLeft":
          this.x -= this.velX;
          break;
        case "ArrowRight":
          this.x += this.velX;
          break;
        case "ArrowUp":
          this.y -= this.velY;
          break;
        case "ArrowDown":
          this.y += this.velY;
          break;
      }
    });
  }
  draw() {
    let dg = new Image();
    dg.src = "https://thumbs2.imgbox.com/7a/f2/wbLe9R8H_t.png";
    ctx.drawImage(dg, this.x, this.y);
  }
  limite() {
    if (this.x + this.size >= width) {
      this.x -= this.size;
    }
    if (this.x - this.size <= 0) {
      this.x += this.size;
    }
    if (this.y + this.size >= height) {
      this.y -= this.size;
    }
    if (this.y - this.size <= 0) {
      this.y += this.size;
    }
  }
  bateu() {
    for (const bora of naves) {
      if (bora.existe) {
        const dx = this.x - bora.x;
        const dy = this.y - bora.y;
        const distancia = Math.sqrt(dx * dx + dy * dy);

        if (distancia < this.size + bora.size) {
          bora.existe = false;
          count--;
          para.textContent =
            "Quantidade de POMBOS a serem capturados: " + count;
        }
      }
    }
  }
}

class Pombo extends Forma {
  constructor(x, y, velX, velY, size) {
    super(x, y, velX, velY);
    this.size = size;
    this.existe = true;
  }
  draw() {
    let nave = new Image();
    nave.src = "https://thumbs2.imgbox.com/e0/5a/ygxFxLFB_t.png";
    ctx.drawImage(nave, this.x, this.y);
  }
  update() {
    if (this.x + this.size >= width) {
      this.velX = -Math.abs(this.velX);
    }
    if (this.x - this.size <= 0) {
      this.velX = Math.abs(this.velX);
    }
    if (this.y + this.size >= height) {
      this.velY = -Math.abs(this.velY);
    }
    if (this.y - this.size <= 0) {
      this.velY = Math.abs(this.velY);
    }
    this.x += this.velX;
    this.y += this.velY;
  }
}

const naves = [];

while (naves.length < 11) {
  const size = random(10, 20);
  const vamos = new Pombo(
    random(0 + size, width - size),
    random(0 + size, height - size),
    random(-7, 7),
    random(-7, 7),
    size
  );
  naves.push(vamos);
  count++;
  para.textContent = "Quantidade de POMBOS a serem capturados: " + count;
}

const pegue = new Dig(80, 80);

function loop() {
  //ctx.fillStyle = "rgba(0, 0, 0, 0.25)";
  //ctx.fillRect(0, 0, width, height);
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, width, height);
  for (const bora of naves) {
    if (bora.existe) {
      bora.draw();
      bora.update();
    }
  }

  pegue.draw();
  pegue.limite();
  pegue.bateu();

  requestAnimationFrame(loop);
}

loop();