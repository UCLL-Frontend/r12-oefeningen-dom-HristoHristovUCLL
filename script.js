// Oefening 1
const button = document.getElementById("changeTitle");
const title = document.getElementById("title");

button.addEventListener("click", () => {
  title.textContent = "Javascript is geweldig!";
});

// Oefening 2
const lineParagraph = document.getElementById("paragraph");
const lineButton = document.getElementById("addText");

lineButton.addEventListener("click", () => {
  lineParagraph.textContent += "Extra Text ";
});

// Oefening 3
const colorBox = document.getElementById("colorBox");
const colorChanger = document.getElementById("changeColor");

colorChanger.addEventListener("click", () => {
  const randomColor = "#" + Math.floor(Math.random() * 16777215).toString;
  colorChanger.style.backgroundColor = randomColor;
});
