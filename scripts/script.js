const buttonEdit = document.querySelector('.profile__edit-button');
const formPopup =  document.querySelector('.popup');
const nameInput = document.querySelector('.popup__input_name');
const jobInput = document.querySelector('.popup__input_job');
const name = document.querySelector('.profile__title');
const input = document.querySelector('.profile__subtitle');
const save =  document.querySelector('.popup__button');
const formElement = document.querySelector('.popup__container');
const close = document.querySelector('.popup__vector');
const plus = document.querySelector('.profile__button-add');
const plusForm =  document.querySelector('.popup__pluse'); 
const elements = document.querySelector('.elements');
const elementTemplate = document.querySelector('.element__template').content;
const closePlusButton = document.querySelector('.popup__vector-pluse');
const inputPlusName = document.querySelector('.popup__input-pluse');
const inputPlusLink = document.querySelector('.popup__input-pllink');
const formAddPlus = document.querySelector('.popup__pluse-container');
const elementImgActive = document.querySelector('.element__image-active');
const elementTextActive = document.querySelector('.element__text-active');
const elementOpened =  document.querySelector('.element__opened');
const vectorClose =  document.querySelector('.element__vector-close');



const initialCards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];


const obj = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible'
 }
 
 enableValidation(obj);
 

function togglePopup(popup) {
    popup.classList.toggle('popup_opened');
  }

  plus.addEventListener('click', () =>{
    togglePopup(plusForm)
});

closePlusButton.addEventListener('click', () => {
  togglePopup(plusForm);
  resetForm();
})


//скрыввем попап кликом на оверлей

function closePupupProfile(e) {
    if (e.target.classList.contains('popup')) {
        formPopup.classList.remove('popup_opened')
  }
} 

formPopup.addEventListener('click', closePupupProfile)

function closeImageZoom(e) {
    if (e.target.classList.contains('element__opened')) {
        elementOpened.classList.remove('popup_opened')
  }
} 

elementOpened.addEventListener('click', closeImageZoom)

function closePupupAddCard(e) {
    if (e.target.classList.contains('popup__pluse')) {
        plusForm.classList.remove('popup_opened')
  }
} 

plusForm.addEventListener('click', closePupupAddCard)

//скрывваем попапа кликом на Esc

   document.addEventListener('keydown', function (evt) {
    if (evt.key === "Escape"){
        plusForm.classList.remove('popup_opened');
    }});

    document.addEventListener('keydown', function (evt) {
        if (evt.key === "Escape"){
            formPopup.classList.remove('popup_opened');
        }});

        document.addEventListener('keydown', function (evt) {
            if (evt.key === "Escape"){
                elementOpened.classList.remove('popup_opened');
            }});
        
        


    buttonEdit.addEventListener('click',() => {
        togglePopup(formPopup);

        if (formPopup.classList.contains('popup_opened')) {
            nameInput.value = name.textContent;
            jobInput.value = input.textContent;
            enableValidation(obj)
        }
    })
   
    close.addEventListener('click', () => togglePopup(formPopup));

    function formSubmitHandler (evt) {
       evt.preventDefault();
       name.textContent = nameInput.value;
       input.textContent = jobInput.value;
       togglePopup(formPopup);
   }
   
   formElement.addEventListener('submit', formSubmitHandler);
   

function renderTemplate(template, elements){
    elements.prepend(template);
}

function getCard(item){
    const template = elementTemplate.cloneNode(true);
    const elementImage = template.querySelector('.element__image'); 
    const elementTitle = template.querySelector('.element__title');
    const elButLike = template.querySelector('.element__button-like');
    const elementTrashtemplate = template.querySelector('.element__trashs');

    elementTitle.textContent = item.name;
    elementImage.src = item.link;

    elButLike.addEventListener('click', function addLike (event) {
        event.target.classList.toggle('element__button-like_active')
    });
    
    elementTrashtemplate.addEventListener('click', (evt) => {
    const elementTrash = evt.target.closest('.element');
    elementTrash.remove()
    
    });

    elementImage.addEventListener('click', function () {
        elementOpened.classList.add('popup_opened');
        elementImgActive.src = elementImage.src;
        elementImgActive.alt = elementImage.alt;
        elementTextActive.textContent = elementTitle.textContent;
    })

    vectorClose.addEventListener('click', function (){
        elementOpened.classList.remove('popup_opened');   
    })

    return template;
}

 initialCards.forEach((object) => {
    const card = getCard(object)
    renderTemplate(card, elements) 
 });


 formAddPlus.addEventListener('submit', function(evt){  
    evt.preventDefault();
    const object = {
    link: inputPlusLink.value,
    name: inputPlusName.value
    };
    
    inputPlusName.value = '';
    inputPlusLink.value = '';

    const card = getCard(object) 
    renderTemplate(card , elements) 
    togglePopup(plusForm);
});
 
  
