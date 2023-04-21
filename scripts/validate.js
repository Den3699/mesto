const setting = {
  formSelector: ".form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__close-button_disabled" ,
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__input-error_active",

};

const showInputError = (formElement, inputElement, configuration) => {
  const errorElement = formElement.querySelector(`.${inputElement.name}-error`);
  inputElement.classList.add(configuration.inputErrorClass);
  errorElement.textContent = inputElement.validationMessage;
  errorElement.classList.add(configuration.errorClass);
};

const hideInputError = (formElement, inputElement, configuration) => {
  const errorElement = formElement.querySelector(`.${inputElement.name}-error`);
  inputElement.classList.remove(configuration.inputErrorClass);
  errorElement.classList.remove(configuration.errorClass);
  errorElement.textContent = "";
};

const checkInputValidity = (formElement, inputElement, configuration) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement,inputElement,configuration);
  } else {
    hideInputError(formElement, inputElement, configuration);
  }
};

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};
function disableButton(button, classButton){
  button.classList.add(classButton);
  button.disabled = true;

}
function enableButton(button, classButton){
  button.classList.remove(classButton);
  button.disabled = false;

}

const toggleButtonState = (inputList, buttonElement, configuration) => {
  if (hasInvalidInput(inputList)) {
    disableButton(buttonElement, configuration.inactiveButtonClass)

  } else {
    enableButton(buttonElement, configuration.inactiveButtonClass)
  }
};

const resetValidate = (formElement, setting) => {
  formElement.reset();

  const formInputsList = Array.from(formElement.querySelectorAll(setting.inputSelector));
  formInputsList.forEach((input) => {
    input.classList.remove(setting.inputErrorClass);
  })

  const formSpansList = Array.from(formElement.querySelectorAll(setting.errorClass));
  formSpansList.forEach((span) => {
    span.textContent = ''
  })
};



const setEventListeners = (formElement, configuration) => {
  const inputList = Array.from(
      formElement.querySelectorAll(configuration.inputSelector)
  );

  const buttonElement = formElement.querySelector(configuration.submitButtonSelector);

  toggleButtonState(inputList, buttonElement, configuration);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", function () {
      checkInputValidity(formElement, inputElement, configuration);
      toggleButtonState(inputList, buttonElement, configuration);
    });
  });
};

const enableValidation = ({formSelector, ...restConfig}) => {
  const formList = Array.from(document.querySelectorAll(formSelector));
  formList.forEach((formElement) => {
    formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });

    setEventListeners(formElement, restConfig);
  });
};

enableValidation(setting);