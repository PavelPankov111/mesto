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
    formPopup.classList.add('popup_opened');
    nameInput.value = name.textContent
    jobInput.value =  input.textContent
}
    
buttonEdit.addEventListener('click', showClick);

function closePopup(){
    formPopup.classList.remove('popup_opened');
}

close.addEventListener('click', closePopup);

 function formSubmitHandler (evt) {
    evt.preventDefault();
    name.textContent = nameInput.value;
    input.textContent = jobInput.value;
    closePopup();
}

formElement.addEventListener('submit', formSubmitHandler);

function showPluse(){
    pluseForm.classList.add('popup_opened');
}

pluse.addEventListener( 'click', showPluse);

function closePluse(){
    pluseForm.classList.remove('popup_opened');
}

closePlusebutton.addEventListener('click', closePluse);

function renderTemplate(item){
    const link = item.link; 
    const name = item.name;
    addNewTempalte(link, name);
}

function addNewCard(){
    const link =  inputPluseLink.value;
    const name = inputPluseName.value;

    const object = {
        link: link,
        name: name
      };

    inputPluseName.value = '';
    inputPluseLink.value = '';

    addNewTempalte(object)
}

function addNewTempalte(item){
    const template = elementTemplate.cloneNode(true);
    const elementImage = template.querySelector('.element__image'); 
    const elementTitle = template.querySelector('.element__title');
    const elButLike = template.querySelector('.element__button-like');
    const elementTrashtemplate = template.querySelector('.element__trashs');

    elementTitle.textContent = item.name;
    elementImage.src = item.link;
    elementImage.alt = item.name;

    elButLike.addEventListener('click', (event) => event.target.classList.toggle('element__button-like_active'));
    
    elementTrashtemplate.addEventListener('click', (evt) => {
    const elementTrash = evt.target.closest('.element');
    elementTrash.remove()
    });

    elementImage.addEventListener('click', function(){
        elementOpened.classList.add('popup_opened');
        elementImgActive.src = elementImage.src;
        elementImgActive.alt = elementImage.alt;
        elementTextActive.textContent = elementTitle.textContent;
    });

    closePlusebutton.addEventListener('click', function (){
        elementOpened.classList.remove('popup_opened')
    })



    elements.prepend(template);
}

 initialCards.forEach(addNewTempalte);

 formAddpluse.addEventListener('submit', function(evt){  
    evt.preventDefault();
    addNewCard();
    closePluse();
});
 