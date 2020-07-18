import Popup from './Popup';

export default class PopupWithForm extends Popup{
    constructor({submitCallBack}, popup){
        super(popup);
        this._submitCallBack = submitCallBack;
        this._formSelector = this._popup.querySelector('.popup__form');
    }

    _getInputValues(){
        this._popupInputs = this._popup.querySelectorAll('.popup__input');
        this._formValues = {};
        this._popupInputs.forEach(input => {
            this._formValues[input.name] = input.value;
        });
        return this._formValues;
    }

    setEventListeners(){    
        super.setEventListeners()
        this._formSelector.addEventListener('submit', (evt) => {   
            evt.preventDefault();
            this._submitCallBack(this._getInputValues());
        });
    }

    close(){
        super.close()
    }

    open(){
        super.open()
    }
}