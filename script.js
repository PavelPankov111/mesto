<<<<<<< HEAD
let buttonEdit = document.querySelector('.Profile__Edit-button');

    function showClick () {
    document.querySelector('.popup').style.background = 'rgba(0,0,0,.6)';
    document.querySelector('.popup').style.position = 'fixed';
    document.querySelector('.popup__container').style.display = 'flex';
=======
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
const inputPluseLinl = document.querySelector('.popup__input-pllink');
const formAddpluse = document.querySelector('.popup__pluse-container');



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
>>>>>>> master
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


function renderTemplate(item){
    const template = elementTemplate.cloneNode(true);

    const elementImage = template.querySelector('.element__image'); 
    const elementTitle = template.querySelector('.element__title');
    const elButLike = template.querySelector('.element__button-like');
    const elementTrashtemplate = template.querySelector('.element__trashs');

    elButLike.addEventListener('click', (event) => event.target.classList.toggle('element__button-like_active'));

    elementTrashtemplate.addEventListener('click', (evt) => {
        const ElementTrash = evt.target.closest('.element');

<<<<<<< HEAD
        const index = initialCards.indexOf(item);
=======
function addNewCard(){
    const link =  inputPluseLink.value;
    const name = inputPluseName.value;
>>>>>>> elements/alt

        initialCards.splice(index, 1);

        ElementTrash.remove()
    })

    elementImage.src = item.link; 
    elementTitle.textContent = item.name; 

    Elements.prepend(template);

    return item;
}

initialCards.forEach(renderTemplate);

<<<<<<< HEAD

function showPluse(){
    pluseForm.classList.add('popup_opened');
}

pluse.addEventListener('click', showPluse);

function closePluse(){
    pluseForm.classList.remove('popup_opened');
=======
    elementTitle.textContent = item.name;
    elementImage.src = item.link;
    elementImage.alt = item.name;

    elButLike.addEventListener('click', (event) => event.target.classList.toggle('element__button-like_active'));
    
    elementTrashtemplate.addEventListener('click', (evt) => {
    const elementTrash = evt.target.closest('.element');
    elementTrash.remove()
    });

    elements.prepend(template);
>>>>>>> elements/alt
}

closePlusebutton.addEventListener('click', closePluse);

formAddpluse.addEventListener('submit', function(evt){
    const cloneTemplate = elementTemplate.cloneNode(true);

    const templateTitle= cloneTemplate.querySelector('.element__title'); 
    const templateImahe = cloneTemplate.querySelector('.element__image'); 

    const ImageTitle = (inputPluseName.value, inputPluseLinl.value);

    evt.preventDefault();
    
    templateTitle.textContent = inputPluseName.value;
    templateImahe.src = inputPluseLinl.value;

    inputPluseName.value = '';
    inputPluseLinl.value = '';

    Elements.prepend(cloneTemplate);
    closePluse();

})
