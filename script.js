const inputTexto = document.getElementById('text-input'); // input
// const memeImage = document.getElementById('meme-image-container'); // meme-div
const memeText = document.getElementById('meme-text'); // meme-text-div
// const botaoAdd = document.getElementById('text-add'); // botão add

function addText() {
  const texto = inputTexto.value;
  memeText.innerText = texto;
}

inputTexto.addEventListener('keyup', addText);
