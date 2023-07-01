import {vConfig} from '../utils/constants.js'

export class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector)
  }

  openPopup() {
    document.addEventListener('keydown',this._handleEscClose)
    this._popup.classList.add(vConfig.openClass) // 'popup_opened'
  }

  closePopup() {
    document.removeEventListener('keydown',this._handleEscClose)
    this._popup.classList.remove(vConfig.openClass)
  }

  _handleEscClose = e => {
    if (e.key === 'Escape') {
      this.closePopup()
    }
  }

  setEventListeners() {
    this._popup.addEventListener('click', e => {
      if (e.target.classList.contains('popup_opened') || e.target.classList.contains('popup__button-close')) {
        this.closePopup()
      }
    })
  }
}

