import {Popup} from "./Popup.js";

export class PopupWithForm extends Popup {
  constructor(popupSelector, _submitHandler) {
    super(popupSelector)
    this._submitHandler = _submitHandler
    this._form = this._popup.querySelector('.form')
    // достаём все элементы полей
    this._inputs = [...this._form.querySelectorAll('.form__input')]
  }

  _getInputValues() {
    const values = {} // создаём пустой объект
    // добавляем в этот объект значения всех полей
    this._inputs.forEach(input => values[input.name] = input.value)
    return values // возвращаем объект значений
  }

// перезаписываем род.метод - добавляем обнуление формы
  closePopup() {
    this._form.reset()
    super.closePopup()
  }

// перезаписываем род.метод
  setEventListeners() {
    super.setEventListeners()
    this._form.addEventListener('submit', e => {
      e.preventDefault()
      this._submitHandler(this._getInputValues())
    })
  }
}
