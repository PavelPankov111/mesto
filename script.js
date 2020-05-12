let buttonEdit = document.querySelector('.Profile__Edit-button');

    function showClick () {
    document.querySelector('.popup').style.background = 'rgba(0,0,0,.6)';
    document.querySelector('.popup').style.position = 'absolute';
    document.querySelector('.popup__container').style.display = 'flex';
    }
  
    buttonEdit.addEventListener('click', showClick);