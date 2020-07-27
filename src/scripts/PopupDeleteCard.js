import Popup from "./Popup";

export default class PopupDeleteCard extends Popup{
    constructor(popup){
        super(popup)
        this._formSelector = this._popup.querySelector('.popup__form');
    }

    close(){
        super.close()
    }

    submitCallBack(foo){
        this._submitCallBack = foo;
    }

    open(){
        super.open()
    }

    setEventListeners(){
        super.setEventListeners()
        this._formSelector.addEventListener('submit', (evt) => {
            evt.preventDefault()
            this._submitCallBack()
         })
    }
}