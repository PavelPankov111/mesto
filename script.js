let buttonEdit = document.querySelector('.profile__edit-button');
let formPopup =  document.querySelector('.popup');
let nameInput = document.querySelector('.popup__input-name');
let jobInput = document.querySelector('.popup__input-job');
let name = document.querySelector('.profile__title');
let Input = document.querySelector('.profile__subtitle');
let save =  document.querySelector('.popup__button');
let formElement = document.querySelector('.popup__container');
let close = document.querySelector('.popup__vector');


function showClick () {
    formPopup.classList.add('popup__opened');
    nameInput.value = name.textContent
    jobInput.value =  Input.textContent
}
  
buttonEdit.addEventListener('click', showClick);

function closePopup(){
    formPopup.classList.remove('popup__opened');
}

close.addEventListener('click', closePopup);

 function formSubmitHandler (evt) {
    evt.preventDefault();
    name.textContent = nameInput.value;
    Input.textContent = jobInput.value;
}

formElement.addEventListener('submit', formSubmitHandler);

save.addEventListener('click',closePopup);
