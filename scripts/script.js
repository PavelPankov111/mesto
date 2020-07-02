import Card from './Card.js';
import FormValidator from './FormValidator.js';
import {elementImageOpened, openPopup, closePopup} from './utilits.js'

const buttonEdit = document.querySelector('.profile__edit-button');
const profileFormPopup =  document.querySelector('.popup');
const nameInput = document.querySelector('.popup__input_name');
const jobInput = document.querySelector('.popup__input_job');
const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');
const formElement = document.querySelector('.popup__container');
const closeButton = document.querySelector('.popup__vector');
const profileButtonPlus = document.querySelector('.profile__button-add'); 
const plusForm =  document.querySelector('.popup-pluse'); 
const elements = document.querySelector('.elements');
const closePlusButton = document.querySelector('.popup-pluse__vector');
const inputPlusName = document.querySelector('.popup-pluse__input');
const inputPlusLink = document.querySelector('.popup-pluse__input-link');
const formAddPlus = document.querySelector('.popup-pluse__container');
const vectorClose =  document.querySelector('.popup__vector-element');
const popupPluseButton = document.querySelector('.popup-pluse__button'); 
const popupProfileButton = document.querySelector('.popup__button'); 

const config = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input_type_error',
 }
 
  const resetForms = (element) => {
    element.reset();
  };

profileButtonPlus.addEventListener('click', () => {
    openPopup(plusForm) 
    validationAddPluse.cleaningForms()
});

closePlusButton.addEventListener('click', () => {
    closePopup(plusForm);
    
 })

 function closeByOverlayClick(e) { 
    const openedPopup = document.querySelector('.popup_opened');
    if (e.target.classList.contains('popup')) { 
        closePopup(openedPopup);
  } 
}  

profileFormPopup.addEventListener('mousedown', closeByOverlayClick)

elementImageOpened.addEventListener('mousedown', closeByOverlayClick)

plusForm.addEventListener('mousedown', closeByOverlayClick)

    buttonEdit.addEventListener('click', () => {
        openPopup(profileFormPopup);
        nameInput.value = profileTitle.textContent;
        jobInput.value = profileSubtitle.textContent;
        popupProfileButton.classList.remove(config.inactiveButtonClass);
        validationFormElement.cleaningForms()
    })
   
    closeButton.addEventListener('click', () => {
        closePopup(profileFormPopup);
    });
 

    function formSubmitHandler (evt) {
       evt.preventDefault();
       profileTitle.textContent = nameInput.value;
       profileSubtitle.textContent = jobInput.value;
       closePopup(profileFormPopup);
   }
   
   formElement.addEventListener('submit', formSubmitHandler);
   
vectorClose.addEventListener('click', () => 
    closePopup(elementImageOpened)
); 

  

 initialCards.forEach( (item) => {
    const card = new Card(item, `element-template`)
    const renderCard = card.renderTemplate();
    elements.prepend(renderCard);
});


 formAddPlus.addEventListener('submit', function(evt){  
    evt.preventDefault();
    const object = {
    link: inputPlusLink.value,
    name: inputPlusName.value
    };
    
    inputPlusName.value = '';
    inputPlusLink.value = '';

    popupPluseButton.classList.add(config.inactiveButtonClass)
    const card = new Card(object, `element-template`);
    const renderCard = card.renderTemplate();
    elements.prepend(renderCard);

    closePopup(plusForm);

    resetForms(formAddPlus)  
});


const validationAddPluse = new FormValidator(config, formAddPlus)
validationAddPluse.enableValidation()

const validationFormElement = new FormValidator(config, formElement)
validationFormElement.enableValidation()