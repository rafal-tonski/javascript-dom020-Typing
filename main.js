const span = document.querySelector("span.text");
let txt = "Lorem ipsum dolor sit amet consectetur adipisicing elit.";
let cursor = document.querySelector(".cursor");

let number = 0;

const animateCursor = () => {
  cursor.classList.toggle("invisible");
};

const addLetter = () => {
  span.textContent += txt[number];
  number++;
  if (span.textContent.length === txt.length) clearInterval(printText);
};

const printText = setInterval(addLetter, 50);
setInterval(animateCursor, 400);
