export default class FormValidator{
    constructor(config, form){
        this._form = form
        this._selectors = config
        this._inputSelector = config.inputSelector;
        this._submitButtonSelector = config.submitButtonSelector;
        this._inactiveButtonClass = config.inactiveButtonClass;
        this._inputErrorClass = config.inputErrorClass;
    }

    _renderErrors (inputElement, errorMessage)  {
        const errorElement = this._form.querySelector(`#${inputElement.id}-error`);
        inputElement.classList.add(this._inputErrorClass);
        errorElement.textContent = errorMessage;
    };
    
    _removeErrors (inputElement)  {
        const errorElement = this._form.querySelector(`#${inputElement.id}-error`);
        inputElement.classList.remove(this._inputErrorClass);
        errorElement.textContent = '';
    };
    
    _checkValidation  (inputElement)  {
        if (!inputElement.validity.valid) {
            this._renderErrors(inputElement, inputElement.validationMessage);
        } else {
            this._removeErrors(inputElement);
        }
    };
    
    _setEventListeners() {
        const inputs = Array.from(this._form.querySelectorAll(this._selectors.inputSelector));
        const popupButton = this._form.querySelector(this._selectors.submitButtonSelector);
        this._handleButton(inputs, popupButton);
        inputs.forEach((inputElement) => {
            inputElement.addEventListener('input', () => {
                this._checkValidation(inputElement);
                this._handleButton(inputs, popupButton);
            });
        });
    };    
    
    _handleButton(inputs, popupButton)  {
        if (this._hasInvalidInput(inputs)) {
            popupButton.classList.add(this._inactiveButtonClass);
        } else {
            popupButton.classList.remove(this._inactiveButtonClass);
        }
    };
        
    enableValidation () {
        this._setEventListeners()
    }
        
    _hasInvalidInput (inputs) {
        return inputs.some((inputElement) => {
            return !inputElement.validity.valid;
        });
    };    

    cleaningForms(){
        this._form.querySelectorAll('.error').forEach((span) => {
            span.textContent = "";
          });
          this._form.querySelectorAll(this._selectors.inputSelector).forEach((input) => {   
            input.classList.remove(this._selectors.inputErrorClass);
          });
    }
}

