# Место
## Здесь вы можете редактировать текст, добавлять свои изображения, открывать их по нажатию, и удалять.
### Поля ввода стали валидироваться
### Здесь применено:
1. _html5_
2. _css3_
3. _javascript_
4. _webpack_
5. _ООП_
6. _babel_

### 1. html:
``` html
<!DOCTYPE html>
<html lang="ru">
<head>
<title>Место</title>
</head>
```
  
### 2. css:
 ```css
  .popup{
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    justify-content: center;
    align-items: center;
    display: flex;
    background: rgba(0,0,0,0);
    position:initial;
}
```
  
### 3. javascript:
  ```javascript
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
  }
  
```

## Сайт является кроссбраузерным и работает во всех известных браузерах(Safari,Яндекс Браузер,Google Chrome,Firefox)
## Github Pages:  https://pavelpankov111.github.io/mesto/
  
  
  
  
  
