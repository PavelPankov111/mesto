export const elementImageOpened = document.querySelector('.popup-element'); 

function handleEscEvent(evt) {
    if (evt.key === "Escape"){
         const activePopup = document.querySelector('.popup_opened'); 
         closePopup(activePopup)
   } 
}
  
export  function openPopup(popup) {
    document.addEventListener('keyup', handleEscEvent)
    popup.classList.add('popup_opened'); 
}

export function closePopup(popup) {
    document.removeEventListener('keyup', handleEscEvent)
    popup.classList.remove('popup_opened'); 
 }
