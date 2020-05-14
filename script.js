let buttonEdit = document.querySelector('.profile__edit-button');

    function showClick () {
    document.querySelector('.popup').style.background = 'rgba(0,0,0,.6)';
    document.querySelector('.popup').style.position = 'fixed';
    document.querySelector('.popup__container').style.display = 'flex';
    }
  
    buttonEdit.addEventListener('click', showClick);

let close = document.querySelector('.popup__vector');

function closePopup(){
    document.querySelector('.popup').style.background = 'rgba(0,0,0,0)';
    document.querySelector('.popup').style.position = 'initial';
    document.querySelector('.popup__container').style.display = 'none';
}

close.addEventListener('click', closePopup);






let formElement = document.querySelector('.popup');

 function formSubmitHandler (evt) {
    evt.preventDefault();

    let nameInput = document.querySelector('.popup__input-name');
    let jobInput = document.querySelector('.popup__input');

    let name = document.querySelector('.profile__title');
    let Input = document.querySelector('.profile__subtitle');

    name.textContent = nameInput.value;
    Input.textContent = jobInput.value;
}

formElement.addEventListener('submit', formSubmitHandler);


let save =  document.querySelector('.popup__button');

function savePopup(){
    document.querySelector('.popup').style.background = 'rgba(0,0,0,0)';
    document.querySelector('.popup').style.position = 'initial';
    document.querySelector('.popup__container').style.display = 'none';
}

save.addEventListener('click', savePopup);
