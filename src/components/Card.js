export default class Card {
    constructor(item, template, {handleCardClick}, userId, cardId, {deleteElement}, {removeLike}, {setLike}){
        this._item = item;
        this._template = template; 
        this._handleCardClick = handleCardClick;      
        this._userId = userId
        this._cardId = cardId.owner._id
        this._deleteElement = deleteElement
        this._removeLike = removeLike
        this._setLike = setLike
        this._likes = item.likes
    }
    
    _getCard(){
        const cardTemplate = document.querySelector(`.${this._template}`).content
        const cardElemnt = cardTemplate.querySelector('.element').cloneNode(true)
        this._elementImage = cardElemnt.querySelector('.element__image'); 
        this._elementTitle = cardElemnt.querySelector('.element__title');
        this._cardElmentLike = cardElemnt.querySelector('.element__button-like')
        return cardElemnt;
    }

    _likeCard(){
        if (this._cardElmentLike.classList.contains('element__button-like_active')) {
            this._removeLike() 
            this.cardElemnt.querySelector('.element__counter').textContent = this._likes.length -= 1;
            this._cardElmentLike.classList.remove('element__button-like_active');
        } else {
            this._cardElmentLike.classList.add('element__button-like_active');
            this._setLike()
            this.cardElemnt.querySelector('.element__counter').textContent = this._likes.length += 1;
        }
    }

    _delete(){
        this._deleteElement()
    }

    removeCard(){
        this.cardElemnt.remove()
        this.cardElemnt = null; 
    }

    _eventListeners(){
        this._cardElmentLike.addEventListener('click', () => this._likeCard());
        this.cardElemnt.querySelector('.element__trashs').addEventListener('click', () => this._delete());
        this._elementImage.addEventListener('click',() => this._handleCardClick());
    }

    renderTemplate(){
    this.cardElemnt = this._getCard()
    this._elementTitle.textContent = this._item.name;
    this._elementImage.src = this._item.link;
    this._elementImage.alt = this._item.name
    this.cardElemnt.querySelector('.element__counter').textContent = this._likes.length;


    this._likes.forEach((item) => {
        if (item._id === this._userId) {
            this._cardElmentLike.classList.add('element__button-like_active');
        }
      })

    if (this._cardId === this._userId) {
        this.cardElemnt.querySelector('.element__trashs').style.display = 'block';
    }
    this._eventListeners()

    return this.cardElemnt
    }
} 
