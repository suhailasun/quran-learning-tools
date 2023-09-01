let deck = new Array("images/card-alif-iso.png", "images/card-alif-fin.png",
  "images/card-ba-iso.png", "images/card-ba-ini.png", "images/card-ba-med.png", "images/card-ba-fin.png",
  "images/card-ta-iso.png", "images/card-ta-ini.png", "images/card-ta-med.png", "images/card-ta-fin.png",
  "images/card-tha-iso.png", "images/card-tha-ini.png", "images/card-tha-med.png", "images/card-tha-fin.png",
  "images/card-jim-iso.png", "images/card-jim-ini.png", "images/card-jim-med.png", "images/card-jim-fin.png",
  "images/card-ha-iso.png", "images/card-ha-ini.png", "images/card-ha-med.png", "images/card-ha-fin.png",
  "images/card-kha-iso.png", "images/card-kha-ini.png", "images/card-kha-med.png", "images/card-kha-fin.png",
  "images/card-dal-iso.png", "images/card-dal-fin.png",
  "images/card-thal-iso.png", "images/card-thal-fin.png",
  "images/card-ra-iso.png", "images/card-ra-fin.png",
  "images/card-za-iso.png", "images/card-za-fin.png",
  "images/card-sin-iso.png", "images/card-sin-ini.png", "images/card-sin-med.png", "images/card-sin-fin.png",
  "images/card-shin-iso.png", "images/card-shin-ini.png", "images/card-shin-med.png", "images/card-shin-fin.png",
  "images/card-sad-iso.png", "images/card-sad-ini.png", "images/card-sad-med.png", "images/card-sad-fin.png",
  "images/card-dhad-iso.png", "images/card-dhad-ini.png", "images/card-dhad-med.png", "images/card-dhad-fin.png",
  "images/card-tta-iso.png", "images/card-tta-fin.png",
  "images/card-dha-ini.png", "images/card-dha-fin.png",
  "images/card-ayn-iso.png", "images/card-ayn-ini.png", "images/card-ayn-med.png", "images/card-ayn-fin.png",
  "images/card-ghayn-iso.png", "images/card-ghayn-ini.png", "images/card-ghayn-med.png", "images/card-ghayn-fin.png",
  "images/card-fa-iso.png", "images/card-fa-ini.png", "images/card-fa-med.png", "images/card-fa-fin.png",
  "images/card-qaf-iso.png", "images/card-qaf-ini.png", "images/card-qaf-med.png", "images/card-qaf-fin.png",
  "images/card-kaf-iso.png", "images/card-kaf-ini.png", "images/card-kaf-med.png", "images/card-kaf-fin.png",
  "images/card-lam-iso.png", "images/card-lam-ini.png", "images/card-lam-med.png", "images/card-lam-fin.png",
  "images/card-mim-iso.png", "images/card-mim-ini.png", "images/card-mim-med.png", "images/card-mim-fin.png",
  "images/card-nun-iso.png", "images/card-nun-ini.png", "images/card-nun-med.png", "images/card-nun-fin.png",
  "images/card-hha-iso.png", "images/card-hha-ini.png", "images/card-hha-med.png", "images/card-hha-fin.png",
  "images/card-waw-iso.png", "images/card-waw-fin.png",
  "images/card-ya-iso.png", "images/card-ya-ini.png", "images/card-ya-med.png", "images/card-ya-fin.png",
  "images/card-hamzah-iso.png", "images/card-hamzah-iso2.png", "images/card-hamzah-ini.png", "images/card-hamzah-med.png", "images/card-hamzah-fin.png"
);

function addPoint(numPlayer) {
  switch(numPlayer) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
    case 7:
    case 8:
      let code = "p" + numPlayer + "score";
      let score = document.getElementById(code).innerHTML;
      console.log("score = " + score);
      score++;
      document.getElementById(code).innerHTML = score;
      break;
    default:
      console.log("Invalid player number: " + numPlayer);
  }
}

function getCard() {
  return Math.floor(Math.random() * deck.length);
}

function dealCards() {
  let randomNums = [];
  while (randomNums.length < 6) {
    let n = getCard();
    if (randomNums.indexOf(n) === -1) {
      randomNums.push(n);
    }
  }
  document.getElementById("card1").src = deck[randomNums[0]];
  document.getElementById("card2").src = deck[randomNums[1]];
  document.getElementById("card3").src = deck[randomNums[2]];
  document.getElementById("card4").src = deck[randomNums[3]];
  document.getElementById("card5").src = deck[randomNums[4]];
  document.getElementById("card6").src = deck[randomNums[5]];
}
