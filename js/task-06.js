const focusInput = document.querySelector('#validation-input');

focusInput.addEventListener("blur", () => {
    if (focusInput.value.length === Number(focusInput.getAttribute('data-length'))){
        focusInput.classList.add('valid');
         if (focusInput.classList.contains('invalid')){
            focusInput.classList.remove('invalid');
         }
    } else {
        if (focusInput.classList.contains('valid')){
            focusInput.classList.remove('valid');
        }
        focusInput.classList.add('invalid');

    }
});



