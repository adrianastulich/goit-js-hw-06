let counterValue = 0;
const counter = document.querySelector('#value');

const btnDecrement = document.querySelector('[data-action="decrement"]');
const btnIncrement = document.querySelector('[data-action="increment"]');

btnDecrement.addEventListener("click", () => {
    counterValue -=1;
    counter.textContent = counterValue;
});

btnIncrement.addEventListener("click", () => {
    counterValue += 1;
    counter.textContent = counterValue;
})



