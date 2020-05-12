let buttonEdit = document.querySelector('.Profile__Edit-button');

    function showClick () {
    document.querySelector('.popup').style.background = 'rgba(0,0,0,.6)';
    document.querySelector('.popup').style.position = 'absolute';
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


//let formElement = document.querySelector('.popup__button')// Воспользуйтесь методом querySelector()

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
//function formSubmitHandler (evt) {
   // evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                                                // Так мы можем определить свою логику отправки.
                                                // О том, как это делать, расскажем позже.

    // Находим поля формы в DOM
   // let nameInput = // Воспользуйтесь инструментом .querySelector()
    //let jobInput = // Воспользуйтесь инструментом .querySelector()

    // Получите значение полей из свойства value

    // Выберите элементы, куда должны быть вставлены значения полей

    // Вставьте новые значения с помощью textContent
//}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
//formElement.addEventListener('submit', formSubmitHandler);