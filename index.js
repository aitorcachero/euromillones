const num = document.querySelector('#numeros');
const star = document.querySelector('#estrellas');
const btn = document.querySelector('#btn');

function generar() {
  const numeros = new Set();
  const estrellas = new Set();

  while (numeros.size < 5) {
    numeros.add(Math.round(Math.random() * 49) + 1);
  }

  while (estrellas.size < 2) {
    estrellas.add(Math.round(Math.random() * 11) + 1);
  }

  const strNumeros = Array.from(numeros)
    .sort((a, b) => a - b)
    .toString()
    .replace(/,/g, ' - ');
  const strEstrellas = Array.from(estrellas)
    .sort((a, b) => a - b)
    .toString()
    .replace(/,/g, ' y ');
  num.innerHTML = `Números: ${strNumeros}`;
  star.innerHTML = `Estrellas: ${strEstrellas}`;
}

btn.addEventListener('click', () => {
  generar();
});
