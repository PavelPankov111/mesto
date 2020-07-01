import {openPopup, elementImageOpened} from './utilits.js';

export default class Card {
    constructor(item, template){
        this._item = item;
        this._template = template; 
    }

    getCard(){
        const cardTemplate = document.querySelector(`.${this._template}`).content
        const cardElemnt = cardTemplate.querySelector('.element').cloneNode(true)
        this._card = cardElemnt
        this._elementImage = this._card.querySelector('.element__image'); 
        this._elementTitle = this._card.querySelector('.element__title');
        this._elButLike = this._card.querySelector('.element__button-like');
        this._elementTrash = this._card.querySelector('.element__trashs');
        this._renderTemplate()
       
        return cardElemnt;

    }

    _like(){
        this._card.querySelector('.element__button-like').classList.toggle('element__button-like_active')
    }

    _delete(){
        this._card.remove()
        this._card = null; 
    }

    _openImage(){
        openPopup(elementImageOpened)
        this._elementImgActive = document.querySelector('.popup__element-image');
        this._elementTextActive = document.querySelector('.popup__element-text');

        this._elementImgActive.src = this._elementImage.src;
        this._elementImgActive.alt = this._elementImage.alt;
        this._elementTextActive.textContent = this._elementTitle.textContent;
    }

    _eventListeners(){
        this._card.querySelector('.element__button-like').addEventListener('click', () => this._like());
        this._card.querySelector('.element__trashs').addEventListener('click',() =>  this._delete());
        this._elementImage.addEventListener('click',() => this._openImage());
    }

    _renderTemplate(){
    this._elementTitle.textContent = this._item.name;
    this._elementImage.src = this._item.link;

    this._eventListeners()
    }
} 
