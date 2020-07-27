export default class Popup{
    constructor(popup){
        this._popup = document.querySelector(popup);
        this._handleEscape = this._handleEscClose.bind(this)
    }

    _handleEscClose(evt){
        if (evt.key === "Escape"){
         const activePopup = document.querySelector('.popup_opened'); 
         this.close(activePopup)
      } 
    }

    open(){
        document.addEventListener('keyup', this._handleEscape)
        this._popup.classList.add('popup_opened');
    }

    close(){
        this._popup.classList.remove('popup_opened');
        document.removeEventListener('keyup', this._handleEscape)
    }

    _closeByOverlayClick (e) {
        const popupOpened = document.querySelector('.popup_opened');
        if (e.target.classList.contains('popup')) { 
            this.close(popupOpened)
        } 
    }
    
    setEventListeners(){
        this._popup.addEventListener('mousedown', (e) => this._closeByOverlayClick(e))
    }
}

