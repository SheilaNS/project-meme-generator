const inputTexto = document.getElementById('text-input'); // input
// const memeImage = document.getElementById('meme-image-container'); // meme-div
const memeText = document.getElementById('meme-text'); // meme-text-div
// const memeImage = document.getElementById('meme-image'); // img meme-image
const inputImage = document.getElementById('meme-insert'); // input file
// const sendButton = document.getElementById('meme-send'); // botão enviar

function addText() {
  const texto = inputTexto.value;
  memeText.innerText = texto;
}

inputTexto.addEventListener('keyup', addText);

/* function clearImage(src) {
  return URL.revokeObjectURL(src);
}
 */
const addImage = function (event) {
  const memeImage = document.getElementById('meme-image');
  memeImage.src = (URL.createObjectURL(event.target.files[0]));
  memeImage.onload = function () {
    (URL.revokeObjectURL(memeImage.src));
  };
  console.log(event.target.files[0]);
};
