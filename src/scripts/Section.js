export default class Section{
    constructor({items, renderer}, containerSelector){
        this._items = items;
        this._renderer = renderer;
        this._containerSelector = containerSelector
        this._containerSelector = document.querySelector('.elements') 
    }

    renderItem(){
        this._items.forEach( (item) => {
            this._addItem(this._renderer(item))
        });
    }

    _addItem(element){
        this._containerSelector.prepend(element) 
    }
}
