const inputTexto = document.getElementById('text-input'); // input
const memeContainer = document.getElementById('meme-image-container'); // meme-div
const memeText = document.getElementById('meme-text'); // meme-text-div
const fireButton = document.getElementById('fire'); // botão fogo
const waterButton = document.getElementById('water'); // botão água
const earthButton = document.getElementById('earth'); // botão terra
const meme1 = document.getElementById('meme-1');
const meme2 = document.getElementById('meme-2');
const meme3 = document.getElementById('meme-3');
const meme4 = document.getElementById('meme-4');

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

function addMeme1() {
  const memeImage = document.getElementById('meme-image');
  memeImage.src = '/imgs/meme1.png';
  memeImage.onload = function () {
    (URL.revokeObjectURL(memeImage.src));
  };
}
function addMeme2() {
  const memeImage = document.getElementById('meme-image');
  memeImage.src = '/imgs/meme2.png';
  memeImage.onload = function () {
    (URL.revokeObjectURL(memeImage.src));
  };
}
function addMeme3() {
  const memeImage = document.getElementById('meme-image');
  memeImage.src = '/imgs/meme3.png';
  memeImage.onload = function () {
    (URL.revokeObjectURL(memeImage.src));
  };
}
function addMeme4() {
  const memeImage = document.getElementById('meme-image');
  memeImage.src = '/imgs/meme4.png';
  memeImage.onload = function () {
    (URL.revokeObjectURL(memeImage.src));
  };
}

meme1.addEventListener('click', addMeme1);
meme2.addEventListener('click', addMeme2);
meme3.addEventListener('click', addMeme3);
meme4.addEventListener('click', addMeme4);
