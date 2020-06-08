const buttonEdit = document.querySelector('.profile__edit-button');
const formPopup =  document.querySelector('.popup');
const nameInput = document.querySelector('.popup__input_name');
const jobInput = document.querySelector('.popup__input_job');
const name = document.querySelector('.profile__title');
const input = document.querySelector('.profile__subtitle');
const save =  document.querySelector('.popup__button');
const formElement = document.querySelector('.popup__container');
const close = document.querySelector('.popup__vector');
const pluse = document.querySelector('.profile__button-add');
const pluseForm =  document.querySelector('.popup__pluse'); 
const elements = document.querySelector('.elements');
const elementTemplate = document.querySelector('.element__template').content;
const closePlusebutton = document.querySelector('.popup__vector-pluse');
const inputPluseName = document.querySelector('.popup__input-pluse');
const inputPluseLink = document.querySelector('.popup__input-pllink');
const formAddpluse = document.querySelector('.popup__pluse-container');
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

function showClick () {
    formPopup.classList.toggle('popup_opened');
    nameInput.value = name.textContent
    jobInput.value =  input.textContent
}
buttonEdit.addEventListener('click', showClick);
close.addEventListener('click', showClick);


 function formSubmitHandler (evt) {
    evt.preventDefault();
    name.textContent = nameInput.value;
    input.textContent = jobInput.value;
    showClick();
}

formElement.addEventListener('submit', formSubmitHandler);

function showPluse(){
    pluseForm.classList.toggle('popup_opened');
}

pluse.addEventListener( 'click', showPluse);
closePlusebutton.addEventListener('click', showPluse);

function getCard(template, elements){
    elements.prepend(template);
}

function addNewTempalte(item){
    const template = elementTemplate.cloneNode(true);
    const elementImage = template.querySelector('.element__image'); 
    const elementTitle = template.querySelector('.element__title');
    const elButLike = template.querySelector('.element__button-like');
    const elementTrashtemplate = template.querySelector('.element__trashs');

    elementTitle.textContent = item.name;
    elementImage.src = item.link;

    elButLike.addEventListener('click', (event) => event.target.classList.toggle('element__button-like_active'));
    
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
        elementOpened.classList.remove('popup_opened');    // здесь нельзя использовать toggle, ломается функционал 
    })

    return template;
}

 initialCards.forEach((object) => {
    const card = addNewTempalte(object) 
    getCard(card, elements) 
 });


 formAddpluse.addEventListener('submit', function(evt){  
    evt.preventDefault();
    const object = {
    link: inputPluseLink.value,
    name: inputPluseName.value

      };

      inputPluseName.value = '';
      inputPluseLink.value = '';

      showPluse();
      const card = addNewTempalte(object) 
      getCard(card , elements) 
});
 