import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js'
import './index.css'
import UserInfo from '../components/UserInfo.js';
import  PopupWithForm from '../components/PopupWithForm.js';
import { buttonEdit,nameInput,jobInput,formElement,closeButton,profileButtonPlus,plusForm,elements,closePlusButton,
inputPlusName,inputPlusLink,formAddPlus,popupProfileButton,popupPluseButton,config,vectorClose, profileAvatar, avatarCloseButton, 
formAvatarContainer, popupAvatarButton, popupAvatarLink, profileTitle, profileSubtitle,prfileOverlay,popupDeletButton, popupDeletSubmitButton
} from '../components/utils.js' 
import PopupWithImage from '../components/PopupWithImage.js';
import Api from '../components/Api.js';
import PopupDeleteCard from '../components/PopupDeleteCard.js';

const obj = {
    url: 'https://mesto.nomoreparties.co/v1/cohort-13',
    headers: {
    'Content-Type': 'application/json',
    authorization: '8ed74a04-ed04-4c07-90fb-2948fe98949f',
    }
};

const api = new Api(obj)
const deleteItem =  new PopupDeleteCard('.popup-delete')

Promise.all([api.getUserInfo(), api.getInitialCards()])
.then( (data) =>{

function renderCards(item){
    const card = new Card(item , `element-template`, {
    handleCardClick: () => {
        imagePopup.open(item.link, item.name)
    }
    }, "8f1f4c5f62257224904b0b69", item, {
    deleteElement: () =>{
    deleteItem.submitCallBack(function(){ 
        popupDeletSubmitButton.textContent= 'Удаление...'
        api.deleteCard(item._id)
        .then((res)=>{
        deleteItem.close()
        card.removeCard()
        popupDeletSubmitButton.textContent= 'Да'
        return Promise.reject(`Ошибка: ${res.status}`)
    })
    })
    deleteItem.open()
    }
    }, {
    removeLike: () =>{
        api.setLike(item._id)
        .then(res =>{
        if (res.ok) {
            return res.json();
            } 
            return Promise.reject(`Ошибка: ${res.status}`)
        })
        .catch((err) => {
            console.log(err); // выведем ошибку в консоль
        });
    }
    }, {
    setLike: () =>{
        api.removeLike(item._id)
        .then(res =>{
        if (res.ok) {
            return res.json();
            } 
            return Promise.reject(`Ошибка: ${res.status}`)
        })
        .catch((err) => {
            console.log(err); // выведем ошибку в консоль
        });
    }
    }) 
    return card.renderTemplate();
}

    profileTitle.textContent = (data[0]).name,
    profileSubtitle.textContent = (data[0]).about,
    profileAvatar.src = (data[0]).avatar

    const addCardSubmit = new PopupWithForm({
    submitCallBack: (item) => {        
    popupPluseButton.textContent = 'Создание...' 
    api.addCard(item)
    .then( (item) =>{  
    elements.prepend(renderCards(item))       
    popupPluseButton.textContent = 'Создать'        
    
    addCardSubmit.close(plusForm)
    })
    .catch((err) => {
        console.log(err); // выведем ошибку в консоль
        });
    }
    }, '.popup-pluse')

    const renderInitialCards = new Section({
        renderer: (item) => { 
        return renderCards(item)
    }
    }, '.elements')

    renderInitialCards.renderItem(data[1])

    addCardSubmit.setEventListeners()

    profileButtonPlus.addEventListener('click', () => {
        addCardSubmit.open()
        inputPlusName.value = '';
        inputPlusLink.value = '';
        validationAddPluse.cleaningForms()
        popupPluseButton.classList.add(config.inactiveButtonClass)
    });
                
    closePlusButton.addEventListener('click', () => {
        addCardSubmit.close()
    })

    popupDeletButton.addEventListener('click', () => {
        deleteItem.close()
    })
    return Promise.reject(`Ошибка: ${data.status}`)
    })
    .catch((err) => {
        console.log(err); // выведем ошибку в консоль
    });

const changeProfileAvatar = new PopupWithForm({
    submitCallBack: (form) => {
    popupAvatarButton.textContent = 'Создание...'
    api.changeAvatar(form['avatar-link'])
    .then((form) => {
        profileAvatar.src = form.avatar 
        changeProfileAvatar.close()
        popupAvatarButton.textContent = 'Создать'
    })
    .catch((err) => {
        console.log(err); 
    });      
    }
}, '.popup-avatar')

changeProfileAvatar.setEventListeners()

prfileOverlay.addEventListener('click', () => {
    changeProfileAvatar.open()
    popupAvatarButton.classList.add(config.inactiveButtonClass)
    popupAvatarLink.value = '';
    validationProfileAvatar.cleaningForms()
})

avatarCloseButton.addEventListener('click', () => {
    changeProfileAvatar.close()
})

const imagePopup = new PopupWithImage('.popup-element', '.popup__element-image', '.popup__element-text')

imagePopup.setEventListeners()

buttonEdit.addEventListener('click', () => {
    profileSubmit.open()
    validationFormElement.cleaningForms()
    popupProfileButton.classList.remove(config.inactiveButtonClass);
    nameInput.value = userInfo.getUserInfo().profileName
    jobInput.value = userInfo.getUserInfo().info;
})

closeButton.addEventListener('click', () => {
    profileSubmit.close()
});

vectorClose.addEventListener('click', () => {
    imagePopup.close()
})

const userInfo = new UserInfo({
    profileTitle:'.profile__title', 
    profileSubtitle:'.profile__subtitle'
});

const profileSubmit = new PopupWithForm({
    submitCallBack: (profileInfo) => {
    popupProfileButton.textContent = 'Сохранение...'
    api.changeUserInfo(profileInfo)
    .then((res) =>{
        userInfo.setUserInfo(profileInfo);
        profileSubmit.close()
        popupProfileButton.textContent = 'Сохранить'
        return Promise.reject(`Ошибка: ${res.status}`)
    })
    .catch((err) => {
        console.log(err); 
    });      
    }
}, '.popup')

profileSubmit.setEventListeners()

const validationAddPluse = new FormValidator(config, formAddPlus)
validationAddPluse.enableValidation()

const validationFormElement = new FormValidator(config, formElement)
validationFormElement.enableValidation()

const validationProfileAvatar = new FormValidator(config, formAvatarContainer)
validationProfileAvatar.enableValidation()


