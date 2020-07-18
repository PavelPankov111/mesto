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

    open(){
        document.addEventListener('keyup', (evt) => this._handleEscClose(evt))
        this._popup.classList.add('popup_opened');
    }

    close(){
        this._popup.classList.remove('popup_opened');
        document.removeEventListener('keyup', _handleEscClose(evt))
    }

    _closeByOverlayClick (e){
        const popupOpened = document.querySelector('.popup_opened');
        if (e.target.classList.contains('popup')) { 
            this.close(popupOpened)
        } 
    }
    
    setEventListeners(){
        this._popup.addEventListener('mousedown', (e) => this._closeByOverlayClick(e))
    }
}

