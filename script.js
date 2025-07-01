const botaoMostraPalavras = document.querySelector("#botao-palavrachave");

botaoMostraPalavras.addEventListener("click", mostraPalavrasChave);


function mostraPalavrasChave() {
  const texto = document.querySelector("#entrada-de-texto").value;
  const campoResultado = document.querySelector("#resultado-palavrachave");
  //const palavras = texto.split(" ");
  const palavrasChave = processaTexto(texto);
  //campoResultado.textContent = palavras.join(", ");
  campoResultado.textContent = palavrasChave.join(", ");
  //campoResultado.textContent = texto;
} 

function processaTexto(texto) {
  //let palavras = texto.split(" ");
  //let palavras = texto.split(/\s+/);
  //let palavras = texto.split(/[^a-zA-Z]+/);
  let palavras = texto.split(/\P{L}+/u);

let frequencias = {};
 for (let i of palavras) {
    frequencias[i] = 0;

    for (let j of palavras) {
      if (i == j) {
        frequencias[i]++;
      }
    }
  }

  console.log(frequencias);
  return palavras;
}


