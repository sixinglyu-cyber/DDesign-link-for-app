const pumpkin = document.getElementById("pumpkin");
const candy = document.getElementById("candy");
const spell = document.getElementById("spell");
const spellBtn = document.getElementById("spellBtn");
const bag = document.getElementById("bag");
const bin = document.getElementById("bin");

const spells = [
  "Trick or treat!",
  "The moon is bright tonight.",
  "Your pumpkin is lit.",
  "A sweet just landed in your pocket."
];

const treats = [
  "👻 Ghost marshmallow",
  "🦇 Bat cookie",
  "🍬 Pumpkin candy",
  "🍭 Spider pop",
  "🍫 Witch chocolate",
  "🍎 Candy apple"
];

let count = 0;
let dragged = null;

pumpkin.addEventListener("click", function () {
  count = count + 1;
  candy.textContent = "Candy: " + count;
  pumpkin.classList.toggle("lit");
});

spellBtn.addEventListener("click", function () {
  const index = Math.floor(Math.random() * spells.length);
  spell.textContent = spells[index];
});

candy.addEventListener("click", function () {
  const index = Math.floor(Math.random() * treats.length);
  const item = document.createElement("li");
  item.textContent = treats[index];
  item.draggable = true;
  bag.appendChild(item);
});

bag.addEventListener("dragstart", function (event) {
  dragged = event.target.closest("li");
  if (!dragged) {
    return;
  }
  dragged.classList.add("dragging");
  event.dataTransfer.setData("text/plain", dragged.textContent);
  event.dataTransfer.effectAllowed = "move";
});

bag.addEventListener("dragend", function () {
  if (dragged) {
    dragged.classList.remove("dragging");
  }
  bin.classList.remove("over");
  dragged = null;
});

bin.addEventListener("dragover", function (event) {
  event.preventDefault();
  bin.classList.add("over");
});

bin.addEventListener("dragleave", function () {
  bin.classList.remove("over");
});

bin.addEventListener("drop", function (event) {
  event.preventDefault();
  bin.classList.remove("over");
  if (dragged) {
    dragged.remove();
  }
});


