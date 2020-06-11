function enableValidation(options) {
    // находим формы
    const formElements = Array.from(document.querySelectorAll(options.formSelector));
    // для каждой формы
    formElements.forEach(formElement => {
        // находим ее инпуты
        const inputElements = Array.from(formElement.querySelectorAll(options.inputSelector));
        // находим сабмит
        const submitButton = formElement.querySelector('.popup__button');
        
        // для всех инпутов
        inputElements.forEach(input => {
            // проверка валидности инпута
            input.addEventListener('input', e => handleInput(e, options.inputErrorClass))
        })

        formElement.addEventListener('input', () => handleFormInput(formElement, submitButton, options.inactiveButtonClass))

        // возможно, не имеет смысл добавлять этот обработчик в рамках enableValidation
        formElement.addEventListener('submit', evt => {
            // обработка сабмита
            evt.preventDefault()
        })
    })
}

function handleFormInput(formElement, submitButton, inactiveButtonClass){
    // включаем / выключаем кнопку в зависимости от валидности формы
    const hasErrors = !formElement.checkValidity();
    submitButton.disabled = hasErrors;
    submitButton.classList.toggle(
        inactiveButtonClass,
        // если второй аргумент true -- добавляем, если false -- удаляем класс
        hasErrors
    )
}

function handleInput(evt, errCls) {
    const input = evt.target;
    // ищем ошибку по id инпута + '-error'
    const error = document.querySelector(`#${input.id}-error`);

    // для password-confirm -- отдельная проверка
    if (input.id === 'password-confirm' && input.value) {
        handleCustomPasswordCheck(input)
    }

    const isInputValid = input.checkValidity();

    if (isInputValid) {
        // прячем ошибки
        input.classList.remove(errCls);
        error.textContent = '';
    } else {
        input.classList.add(errCls);
        if (
            input.id === 'password' &&
            // если введенный пароль не соответствует регулярному выражению в pattern, patternMismatch будет true
            input.validity.patternMismatch
        ) {
            error.textContent = 'Пароль должен содержать строчные и заглавные буквы, а также цифру'
        } else {
            error.textContent = input.validationMessage;
        }
    }
}

function handleCustomPasswordCheck(inputEl) {
    const passwordInput = document.querySelector('#password');
    if (passwordInput.value === inputEl.value) {
        inputEl.setCustomValidity('')
    } else {
        inputEl.setCustomValidity('Does not match the password')
    }
}

const obj = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible'
}
enableValidation(obj);