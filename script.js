const inputTexto = document.getElementById('text-input'); // input
const memeContainer = document.getElementById('meme-image-container'); // meme-div
const memeText = document.getElementById('meme-text'); // meme-text-div
// const memeImageBorder = document.getElementById('meme-image'); // img meme-image
// const inputImage = document.getElementById('meme-insert'); // input file
const fireButton = document.getElementById('fire'); // botão fogo
const waterButton = document.getElementById('water'); // botão água
const earthButton = document.getElementById('earth'); // botão terra

function addText() {
  const texto = inputTexto.value;
  memeText.innerText = texto;
}

inputTexto.addEventListener('keyup', addText);

const addImage = function (event) {
  const memeImage = document.getElementById('meme-image');
  memeImage.src = (URL.createObjectURL(event.target.files[0]));
  memeImage.onload = function () {
    (URL.revokeObjectURL(memeImage.src));
  };
};

function addFireBorder() {
  memeContainer.style.border = '3px dashed red';
}

function addWaterBorder() {
  memeContainer.style.border = '5px double blue';
}

function addEarthBorder() {
  memeContainer.style.border = '6px groove green';
}

fireButton.addEventListener('click', addFireBorder);
waterButton.addEventListener('click', addWaterBorder);
earthButton.addEventListener('click', addEarthBorder);
