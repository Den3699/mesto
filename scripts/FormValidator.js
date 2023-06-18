export class FormValidator {
  constructor(configuration, form) {
    this._form = form;
    this._configuration = configuration;
    this._inputList = Array.from(
      this._form.querySelectorAll(this._configuration.inputSelector)
    );
    this._button = this._form.querySelector(
      this._configuration.submitButtonSelector
    );
  }

  _showInputError = (inputElement) => {
    const errorElement = this._form.querySelector(
      `.${inputElement.name}-error`
    );
    inputElement.classList.add(this._configuration.inputErrorClass);
    errorElement.textContent = inputElement.validationMessage;
    errorElement.classList.add(this._configuration.errorClass);
  };

  _hasInvalidInput = () => {
    return this._inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  };

  resetValidate = () => {
    this._form.reset();
    this._toggleButtonState();
    this._inputList.forEach((input) => {
      input.classList.remove(this._configuration.inputErrorClass);
      const errorElement = this._form.querySelector(
        `.${input.name}-error`
      );
      errorElement.textContent = ""; 
    });
    
   
  };

  _hideInputError = (inputElement) => {
    const errorElement = this._form.querySelector(
      `.${inputElement.name}-error`
    );
    inputElement.classList.remove(this._configuration.inputErrorClass);
    errorElement.classList.remove(this._configuration.errorClass);
    errorElement.textContent = "";
  };

  _checkInputValidity = (inputElement) => {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement);
    } else {
      this._hideInputError(inputElement);
    }
  };

  _toggleButtonState = () => {
    if (this._hasInvalidInput(this._inputList)) {
      this._button.classList.add(this._configuration.inactiveButtonClass);
      this._button.disabled = true;
    } else {
      this._button.classList.remove(this._configuration.inactiveButtonClass);
      this._button.disabled = false;
    }
  };

  _addListeners = () => {
    this._inputList.forEach((input) => {
      input.addEventListener("input", () => {
        this._checkInputValidity(input);
        this._toggleButtonState();
      });
    });
  }
  enableValidation() {
    this._toggleButtonState();
    this._addListeners();
  }

 
}
