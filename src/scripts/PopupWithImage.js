import Popup from "./Popup";

export default class PopupWithImage extends Popup{
    constructor(popup, popupElementImage, popupElementText){
        super(popup)
        this._popupElementImage = popupElementImage;
        this._popupElementText = popupElementText;
    }

    open(link, name){
        super.open()
        this._popup.querySelector(this._popupElementImage).src = link;
        this._popup.querySelector(this._popupElementText).textContent = name;
        this._popup.querySelector(this._popupElementImage).alt = name;
    }

    close(){
        super.close()
    }

    setEventListeners(){
        super.setEventListeners()
    }
}