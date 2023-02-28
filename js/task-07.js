const inputContent = document.querySelector('#font-size-control');
const outputText = document.querySelector('#text')

inputContent.addEventListener("input", () => {
    outputText.style.fontSize = `${inputContent.value}px`;
});

