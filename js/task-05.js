let textFromInput = document.querySelector('#name-input');
let textInOutput = document.querySelector('#name-output');

textFromInput.addEventListener('input', event => {
    textInOutput.textContent = event.currentTarget.value

        if (event.currentTarget.value === ''){
            textInOutput.textContent = 'Anonymous'};
});


