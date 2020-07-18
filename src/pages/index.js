import Card from '../scripts/Card.js';
import FormValidator from '../scripts/FormValidator.js';
import {initialCards} from '../scripts/constants.js'
import Section from '../scripts/Section.js'
import './index.css'
import UserInfo from '../scripts/UserInfo.js';
import  PopupWithForm from '../scripts/PopupWithForm.js';
import { buttonEdit,nameInput,jobInput,formElement,closeButton,profileButtonPlus,plusForm,elements,closePlusButton,
inputPlusName,inputPlusLink,formAddPlus,popupProfileButton,popupPluseButton,config,vectorClose} from '../scripts/utils.js' 
import PopupWithImage from '../scripts/PopupWithImage.js';

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

const imagePopup = new PopupWithImage('.popup-element', '.popup__element-image', '.popup__element-text')

imagePopup.setEventListeners()

const renderInitialCards = new Section({
    items: initialCards,
    renderer: (item) => {
        const card = new Card(item, `element-template`, {
            handleCardClick: () => {
                imagePopup.open(item.link, item.name)
            }
        })
        const renderCard = card.renderTemplate();
        return renderCard;
    }
}, elements)

renderInitialCards.renderItem()

buttonEdit.addEventListener('click', () => {
    profileSubmit.open()
    validationFormElement.cleaningForms()
    popupProfileButton.classList.remove(config.inactiveButtonClass);
    nameInput.value = userInfo.getUserInfo().name
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
    userInfo.setUserInfo(profileInfo);
    profileSubmit.close()
    }
}, '.popup')

profileSubmit.setEventListeners()   

const addCardSubmit = new PopupWithForm({
    submitCallBack: (object) => {
        const card = new Card(object, `element-template`, {
            handleCardClick: () => {
                imagePopup.open(object.link, object.name)
            }
        })
        const renderCard = card.renderTemplate();
        elements.prepend(renderCard);
        addCardSubmit.close(plusForm)
    }
}, '.popup-pluse')

addCardSubmit.setEventListeners()

const validationAddPluse = new FormValidator(config, formAddPlus)
validationAddPluse.enableValidation()

const validationFormElement = new FormValidator(config, formElement)
validationFormElement.enableValidation()


