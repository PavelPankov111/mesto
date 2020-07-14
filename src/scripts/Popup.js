import {profileFormPopup, elementImageOpened, plusForm} from './constants'

export default class Popup{
    constructor(popup){
        this._popup = document.querySelector(popup);
    }

    _handleEscClose(evt){
        if (evt.key === "Escape"){
            const activePopup = document.querySelector('.popup_opened'); 
            this.close(activePopup)
      } 
    }

    open(form){
        document.addEventListener('keyup', (evt) => this._handleEscClose(evt))
        form.classList.add('popup_opened'); 
    }

    close(form){
        form.classList.remove('popup_opened'); 
        document.removeEventListener('keyup', (evt) => this._handleEscClose(evt))

    }

    _closeByOverlayClick (e){
        const popupOpened = document.querySelector('.popup_opened');
        if (e.target.classList.contains('popup')) { 
            this.close(popupOpened)
      } 
    }
    
    setEventListeners(){
        profileFormPopup.addEventListener('mousedown', (e) => this._closeByOverlayClick(e))
        elementImageOpened.addEventListener('mousedown',(e) => this._closeByOverlayClick(e))
        plusForm.addEventListener('mousedown',(e) => this._closeByOverlayClick(e))
    }
}

