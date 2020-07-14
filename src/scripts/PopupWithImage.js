import Popup from "./Popup";
import { elementImageOpened } from "./constants";
import { cosh } from "core-js/fn/number";

export default class PopupWithImage extends Popup{
    constructor(popup){
        super(popup)
    }

    open(link, name){
        super.open(elementImageOpened)
        this._popup.querySelector('.popup__element-image').src = link;
        this._popup.querySelector('.popup__element-text').textContent = name;
    }
}