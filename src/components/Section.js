export default class Section{
    constructor({renderer}, containerSelector){
        this._renderer = renderer;
        this._containerSelector = containerSelector
        this._containerSelector = document.querySelector('.elements') 
    }

    renderItem(cards){
        cards.forEach( (item) => {
            this._addItem(this._renderer(item))
        });
    }

    _addItem(element){
        this._containerSelector.append(element) 
    }
}
