import {Popup} from "./Popup.js"
import {vConfig} from '../utils/constants.js'

export class PopupWithImage extends Popup{
  constructor(popupSelector) {
    super(popupSelector)
    this._title = this._popup.querySelector(vConfig.PopupImageCaptionSelector)
    this._image = this._popup.querySelector(vConfig.PopupImageSelector)
  }
  openPopup(name,link){
    this._title.textContent = name
    this._image.src = link
    this._image.alt = name
    super.openPopup()
  }
}
