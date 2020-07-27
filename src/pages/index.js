import Card from '../scripts/Card.js';
import FormValidator from '../scripts/FormValidator.js';
import Section from '../scripts/Section.js'
import './index.css'
import UserInfo from '../scripts/UserInfo.js';
import  PopupWithForm from '../scripts/PopupWithForm.js';
import { buttonEdit,nameInput,jobInput,formElement,closeButton,profileButtonPlus,plusForm,elements,closePlusButton,
inputPlusName,inputPlusLink,formAddPlus,popupProfileButton,popupPluseButton,config,vectorClose, profileAvatar, avatarCloseButton, 
formAvatarContainer, popupAvatarButton, popupAvatarLink, profileTitle, profileSubtitle,prfileOverlay,popupDeletButton, popupDeletSubmitButton
} from '../scripts/utils.js' 
import PopupWithImage from '../scripts/PopupWithImage.js';
import Api from '../scripts/Api.js';
import PopupDeleteCard from '../scripts/PopupDeleteCard.js';

const api = new Api()

Promise.all([api.getUserInfo(), api.getInitialCards()])
.then( (data) =>{

    const deleteItem =  new PopupDeleteCard('.popup-delete')
    
    profileTitle.textContent = (data[0]).name,
    profileSubtitle.textContent = (data[0]).about,
    profileAvatar.src = (data[0]).avatar
    console.log(data._id)

    const addCardSubmit = new PopupWithForm({
        submitCallBack: (item) => {        
            popupPluseButton.textContent = 'Создание...'        
            api.addCard(item)
            .then( item =>{
                console.log(item)
            const card = new Card(item , `element-template`, {
            handleCardClick: () => {
                imagePopup.open(item.link, item.name)
            }
            }, "8f1f4c5f62257224904b0b69", item, {
                deleteElement: () =>{
                    deleteItem.setEventListeners()
                    deleteItem.submitCallBack(function(){
                        popupDeletSubmitButton.textContent= 'Удаление...'
                        api.deleteCard(item._id)
                        deleteItem.close()
                        card.removeCard()
                        popupDeletSubmitButton.textContent= 'Да'
                    })
                    deleteItem.open()
                }

            }, {
                removeLike: () =>{
                    api.setLike(item._id)
                }
            }, {
                setLike: () =>{
                    api.removeLike(item._id)
                }
            })
            popupPluseButton.textContent = 'Создать'        
            const renderCard = card.renderTemplate();
            elements.prepend(renderCard);
            addCardSubmit.close(plusForm)
        })
        .catch((err) => {
            console.log(err); // выведем ошибку в консоль
          });
        }
   
    }, '.popup-pluse')

    const renderInitialCards = new Section({
        renderer: (item) => {   
        const card = new Card(item , `element-template`, {
        handleCardClick: () => {
            imagePopup.open(item.link, item.name)
        }}, "8f1f4c5f62257224904b0b69", item, {
            deleteElement: () =>{
                deleteItem.setEventListeners()
                deleteItem.submitCallBack(function(){
                    popupDeletSubmitButton.textContent= 'Удаление...'
                        api.deleteCard(item._id)
                        deleteItem.close()
                        card.removeCard()
                        popupDeletSubmitButton.textContent= 'Да'
                })
                deleteItem.open()
            }
        }, {
            removeLike: () =>{
                api.setLike(item._id)
            }
        }, {
            setLike: () =>{
                api.removeLike(item._id)
            }
        })
        const renderCard = card.renderTemplate();
            return renderCard;
        }
    }, elements)

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
})
.catch((err) => {
    console.log(err); // выведем ошибку в консоль
  });



const changeProfileAvatar = new PopupWithForm({
    submitCallBack: (form) => {
        popupAvatarButton.textContent = 'Создание...'
        api.changeAvatar(form['avatar-link'])
        .then(res =>{
        if (res.ok) {
            return res.json();
        } 
        })
        .then((form) => {
            profileAvatar.src = form.avatar 
        })
        .catch((err) => {
            console.log(err); 
        });      
        changeProfileAvatar.close()
        popupAvatarButton.textContent = 'Создать'
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
    setInterval(api.changeUserInfo(profileInfo), 5000)
    userInfo.setUserInfo(profileInfo);
   
    popupProfileButton.textContent = 'Сохранить'
    }
}, '.popup')


// profileSubmit.setEventListeners()   

profileSubmit.setEventListeners()

const validationAddPluse = new FormValidator(config, formAddPlus)
validationAddPluse.enableValidation()

const validationFormElement = new FormValidator(config, formElement)
validationFormElement.enableValidation()

const validationProfileAvatar = new FormValidator(config, formAvatarContainer)
validationProfileAvatar.enableValidation()


