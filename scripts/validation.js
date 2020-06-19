
const renderErrors = (formElement, inputElement, errorMessage) => {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.add('popup__input_type_error');
    errorElement.textContent = errorMessage;
};

const removeErrors = (formElement, inputElement) => {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.remove('popup__input_type_error');
    errorElement.textContent = '';
};

const checkValidation = (formElement, inputElement) => {
    if (!inputElement.validity.valid) {
        renderErrors(formElement, inputElement, inputElement.validationMessage);
    } else {
        removeErrors(formElement, inputElement);
    }
};


const handleButton = (inputs, popupButton) => {
    if (hasInvalidInput(inputs)) {
        popupButton.classList.add('popup__button_disabled');
    } else {
        popupButton.classList.remove('popup__button_disabled');
    }
};

const setEventListeners = (formElement) => {
    const inputs = Array.from(formElement.querySelectorAll('.popup__input'));
    const popupButton = formElement.querySelector('.popup__button');
    handleButton(inputs, popupButton);
    inputs.forEach((inputElement) => {
        inputElement.addEventListener('input', function () {
            checkValidation(formElement, inputElement);
            handleButton(inputs, popupButton);
        });
    });
};

const enableValidation = () => {
    const popupForms = Array.from(document.querySelectorAll(obj.formSelector));
    popupForms.forEach((formElement) => {
        formElement.addEventListener('submit', function (evt) {
            evt.preventDefault();
        });
        setEventListeners(formElement);
    });
};

const hasInvalidInput = (inputs) => {
    return inputs.some((inputElement) => {
        return !inputElement.validity.valid;
    });
};
