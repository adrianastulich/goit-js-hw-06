function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const body = document.querySelector("body");

const buttonChangeColor = document.querySelector(".change-color");

const backgroundColor = document.querySelector(".color");

buttonChangeColor.addEventListener("click", () => {
  buttonChangeColor.textContent = getRandomHexColor();
  body.style.backgroundColor = `${getRandomHexColor()}`;
});
