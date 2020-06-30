const buttonEdit = document.querySelector('.profile__edit-button');
const formPopup =  document.querySelector('.popup');
const nameInput = document.querySelector('.popup__input_name');
const jobInput = document.querySelector('.popup__input_job');
const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');
const formElement = document.querySelector('.popup__container');
const closeButton = document.querySelector('.popup__vector');
const profileButtonPlus = document.querySelector('.profile__button-add'); 
const plusForm =  document.querySelector('.popup-pluse'); 
const elements = document.querySelector('.elements');
const elementTemplate = document.querySelector('.element-template').content;
const closePlusButton = document.querySelector('.popup-pluse__vector');
const inputPlusName = document.querySelector('.popup-pluse__input');
const inputPlusLink = document.querySelector('.popup-pluse__input-link');
const formAddPlus = document.querySelector('.popup-pluse__container');
const elementImgActive = document.querySelector('.popup__element-image');
const elementTextActive = document.querySelector('.popup__element-text');
const vectorClose =  document.querySelector('.popup__vector-element');
const elementImageOpened = document.querySelector('.popup-element'); 
const popupPluseButton = document.querySelector('.popup-pluse__button'); 
const popupProfileButton = document.querySelector('.popup__button'); 


const config = {
    form: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input_type_error',
 }
 
 
 const cleaningForms = (config, inputSelector, inputErrorClass, form) => {
    form.querySelectorAll('.error').forEach((span) => {
      span.textContent = "";
    });
    form.querySelectorAll(config.inputSelector).forEach((input) => {   
      input.classList.remove(config.inputErrorClass);
    });
  };
  
  const resetForms = (element) => {
    element.reset();
  };
  

 function openPopup(popup) {
        document.addEventListener('keyup', handleESCevent)
        popup.classList.add('popup_opened'); 
 }

 function closePopup(popup) {
    document.removeEventListener('keyup', handleESCevent)
    popup.classList.remove('popup_opened'); 
 }

 function handleESCevent(evt) {
      if (evt.key === "Escape"){
           const activePopup = document.querySelector('.popup_opened'); 
           closePopup(activePopup)
     } 
 }

profileButtonPlus.addEventListener('click', () => {
    openPopup(plusForm) 
    cleaningForms(config ,config.inputSelector, config.inputErrorClass, plusForm)
});

closePlusButton.addEventListener('click', () => {
    closePopup(plusForm);
    
 })


function closePopupProfile(e) {
    if (e.target.classList.contains('popup')) {
        closePopup(formPopup)
        
  }
} 

formPopup.addEventListener('click', closePopupProfile)

function closeImageZoom(e) {
    if (e.target.classList.contains('popup-element')) {
        closePopup(elementImageOpened)
  }
} 

elementImageOpened.addEventListener('click', closeImageZoom)

function closePupupAddCard(e) {
    if (e.target.classList.contains('popup-pluse')) {
        closePopup(plusForm)
  }
} 

plusForm.addEventListener('click', closePupupAddCard)

    buttonEdit.addEventListener('click', () => {
        openPopup(formPopup);
        nameInput.value = profileTitle.textContent;
        jobInput.value = profileSubtitle.textContent;
        popupProfileButton.classList.remove(config.inactiveButtonClass);
        cleaningForms(config ,config.inputSelector, config.inputErrorClass, formElement);
    })
   
    closeButton.addEventListener('click', () => {
        closePopup(formPopup);
    });
 

    function formSubmitHandler (evt) {
       evt.preventDefault();
       profileTitle.textContent = nameInput.value;
       profileSubtitle.textContent = jobInput.value;
       closePopup(formPopup);
   }
   
   formElement.addEventListener('submit', formSubmitHandler);
   
vectorClose.addEventListener('click', () => 
    closePopup(elementImageOpened)
); 

 initialCards.forEach( (item) => {
    new Card(item, `element-template`).renderTemplate();
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
    new Card(object ,`element-template`).renderTemplate();

    closePopup(plusForm);
    

    cleaningForms(config ,config.inputSelector, config.inputErrorClass, formAddPlus);
    resetForms(formAddPlus)  
});


// enableValidation(config)
new FormValidator(config, '.popup__container').enableValidation()
new FormValidator(config, '.popup-pluse__container').enableValidation()

