let letters = new Array("letters/alif.png", "letters/ba.png", "letters/ta.png", "letters/tha.png",
  "letters/jim.png", "letters/ha.png", "letters/kha.png", "letters/dal.png",
  "letters/thal.png", "letters/ra.png", "letters/za.png", "letters/sin.png",
  "letters/shin.png", "letters/sad.png", "letters/dhad.png", "letters/tta.png",
  "letters/dha.png", "letters/ayn.png", "letters/ghayn.png", "letters/fa.png",
  "letters/qaf.png", "letters/kaf.png", "letters/lam.png", "letters/mim.png",
  "letters/nun.png", "letters/hha.png", "letters/waw.png", "letters/ya.png",
  "letters/hamzah.png", "letters/hamzah2.png");

function nextLetter() {
  let newLetter = letters[Math.floor(Math.random() * letters.length)];
  document.getElementById("letter").src = newLetter;
}
