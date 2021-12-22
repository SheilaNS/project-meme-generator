const inputTexto = document.getElementById('text-input'); // input
const memeContainer = document.getElementById('meme-image-container'); // meme-div
const memeImage = document.getElementById('meme-image');
const memeText = document.getElementById('meme-text'); // meme-text-div
const fireButton = document.getElementById('fire'); // botão fogo
const waterButton = document.getElementById('water'); // botão água
const earthButton = document.getElementById('earth'); // botão terra
const meme1 = document.getElementById('meme-1');
const meme2 = document.getElementById('meme-2');
const meme3 = document.getElementById('meme-3');
const meme4 = document.getElementById('meme-4');

// Requisito 01 - Recebido ajuda do Thiago Zardo
function addText() {
  const texto = inputTexto.value;
  memeText.innerText = texto;
}

inputTexto.addEventListener('keyup', addText);

// Requisito 02 - Feito com a ajuda do Thiago Zardo
// Referência das dicas do projeto: https://stackoverflow.com/questions/4459379/preview-an-image-before-it-is-uploaded/27165977#27165977
const addImage = function (event) {
  memeImage.src = (URL.createObjectURL(event.target.files[0]));
  memeImage.onload = function () {
    (URL.revokeObjectURL(memeImage.src));
  };
};

// Requisito 06
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

// Requisito 07
function addMeme1() {
  memeImage.src = '/imgs/meme1.png';
  memeImage.onload = function () {
    (URL.revokeObjectURL(memeImage.src));
  };
}
function addMeme2() {
  memeImage.src = '/imgs/meme2.png';
  memeImage.onload = function () {
    (URL.revokeObjectURL(memeImage.src));
  };
}
function addMeme3() {
  memeImage.src = '/imgs/meme3.png';
  memeImage.onload = function () {
    (URL.revokeObjectURL(memeImage.src));
  };
}
function addMeme4() {
  memeImage.src = '/imgs/meme4.png';
  memeImage.onload = function () {
    (URL.revokeObjectURL(memeImage.src));
  };
}

meme1.addEventListener('click', addMeme1);
meme2.addEventListener('click', addMeme2);
meme3.addEventListener('click', addMeme3);
meme4.addEventListener('click', addMeme4);
