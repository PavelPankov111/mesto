const buttonEdit = document.querySelector('.profile__edit-button');
const formPopup =  document.querySelector('.popup');
const nameInput = document.querySelector('.popup__input_name');
const jobInput = document.querySelector('.popup__input_job');
const name = document.querySelector('.profile__title');
const Input = document.querySelector('.profile__subtitle');
const save =  document.querySelector('.popup__button');
const formElement = document.querySelector('.popup__container');
const close = document.querySelector('.popup__vector');


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
