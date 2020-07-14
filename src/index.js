import Card from './scripts/Card.js';
import FormValidator from './scripts/FormValidator.js';
import {initialCards} from './scripts/initialCards.js'
import Section from './scripts/Section.js'
import Popup from './scripts/Popup.js'
import './pages/index.css'
import UserInfo from './scripts/UserInfo.js';
import  PopupWithForm from './scripts/PopupWithForm.js';
import { buttonEdit,profileFormPopup,nameInput,jobInput,formElement,closeButton,profileButtonPlus,plusForm,elements,closePlusButton,
inputPlusName,inputPlusLink,formAddPlus,popupProfileButton,popupPluseButton,config,vectorClose, elementImageOpened  } from './scripts/constants.js' 
import PopupWithImage from './scripts/PopupWithImage.js';


profileButtonPlus.addEventListener('click', () => {
    new Popup().open(plusForm)
    inputPlusName.value = '';
    inputPlusLink.value = '';
    validationAddPluse.cleaningForms()
    popupPluseButton.classList.add(config.inactiveButtonClass)

});

closePlusButton.addEventListener('click', () => {
    new Popup().close(plusForm)
 })

const imagePopup = new PopupWithImage('.popup-element')

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
    new Popup().open(profileFormPopup)
    popupProfileButton.classList.remove(config.inactiveButtonClass);
    nameInput.value = userInfo.getUserInfo().name
    jobInput.value = userInfo.getUserInfo().info;
})

closeButton.addEventListener('click', () => {
    new Popup().close(profileFormPopup)
});

vectorClose.addEventListener('click', () => {
    new Popup().close(elementImageOpened)
})

const userInfo = new UserInfo({
    profileTitle:'.profile__title', 
    profileSubtitle:'.profile__subtitle'
});

const object = {
   name: inputPlusLink.value,
   link: inputPlusName.value
};
    
const profileSubmit = new PopupWithForm({
    submitCallBack: (profileInfo) => {
    userInfo.setUserInfo(profileInfo);
    profileSubmit.close(profileFormPopup)
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


