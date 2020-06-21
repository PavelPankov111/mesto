const renderErrors = (formElement, inputElement, errorMessage, inputErrorClass) => {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.add(inputErrorClass);
    errorElement.textContent = errorMessage;
};

const removeErrors = (formElement, inputElement, inputErrorClass) => {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.remove(inputErrorClass);
    errorElement.textContent = '';
};

const checkValidation = (formElement, inputElement, inputErrorClass) => {
    if (!inputElement.validity.valid) {
        renderErrors(formElement, inputElement, inputElement.validationMessage, config.inputErrorClass);
    } else {
        removeErrors(formElement, inputElement, config.inputErrorClass);
    }
};


const handleButton = (inputs, popupButton, inactiveButtonClass) => {
    if (hasInvalidInput(inputs)) {
        popupButton.classList.add(inactiveButtonClass);
    } else {
        popupButton.classList.remove(inactiveButtonClass);
    }
};

const setEventListeners = (formElement, config, inputSelector, submitButtonSelector, inputErrorClass, inactiveButtonClass) => {
    const inputs = Array.from(formElement.querySelectorAll(config.inputSelector));
    const popupButton = formElement.querySelector(config.submitButtonSelector);
    handleButton(inputs, popupButton, config.inactiveButtonClass);
    inputs.forEach((inputElement) => {
        inputElement.addEventListener('input', function () {
            checkValidation(formElement, inputElement, inputErrorClass);
            handleButton(inputs, popupButton, config.inactiveButtonClass);
        });
    });
};

const enableValidation = (config) => {
    const popupForms = Array.from(document.querySelectorAll(config.formSelector));
    popupForms.forEach((formElement) => {
        formElement.addEventListener('submit', function (evt) {
            evt.preventDefault();
        });
        setEventListeners(formElement, config);
    });
};

const hasInvalidInput = (inputs) => {
    return inputs.some((inputElement) => {
        return !inputElement.validity.valid;
    });
};

