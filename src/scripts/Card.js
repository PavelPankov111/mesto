export default class Card {
    constructor(item, template, {handleCardClick}){
        this._item = item;
        this._template = template; 
        this._handleCardClick = handleCardClick;
    }

    _getCard(){
        const cardTemplate = document.querySelector(`.${this._template}`).content
        const cardElemnt = cardTemplate.querySelector('.element').cloneNode(true)
        this._elementImage = cardElemnt.querySelector('.element__image'); 
        this._elementTitle = cardElemnt.querySelector('.element__title');
       
        return cardElemnt;
    }

    _like(){
        this.cardElemnt.querySelector('.element__button-like').classList.toggle('element__button-like_active')
    }

    _delete(){
        this.cardElemnt.remove()
        this.cardElemnt = null; 
    }

    _eventListeners(){
        this.cardElemnt.querySelector('.element__button-like').addEventListener('click', () => this._like());
        this.cardElemnt.querySelector('.element__trashs').addEventListener('click',() =>  this._delete());
        this._elementImage.addEventListener('click',() => this._handleCardClick());
    }

    renderTemplate(){
    this.cardElemnt = this._getCard()
    this._elementTitle.textContent = this._item.name;
    this._elementImage.src = this._item.link;
    this._elementImage.alt = this._item.name
    this._eventListeners()

    return this.cardElemnt
    }
} 
