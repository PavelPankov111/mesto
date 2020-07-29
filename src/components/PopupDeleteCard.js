import Popup from "./Popup";

export default class PopupDeleteCard extends Popup{
    constructor(popup){
        super(popup)
        this._formSelector = this._popup.querySelector('.popup__form');
    }

    close(){
        super.close()
        this._formSelector.removeEventListener('submit', this.setEventListeners)
    }

    open(){
        super.open()
        this._formSelector.addEventListener('submit', this.setEventListeners)
    }

    setEventListeners = (evt) => {
        super.setEventListeners();
        evt.preventDefault();
        this._submitCallBack();
    }

    submitCallBack(foo){
        this._submitCallBack = foo;
    }
}

