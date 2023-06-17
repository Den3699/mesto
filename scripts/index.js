import { FormValidator } from "./FormValidator.js";
import initialCards from "./initialCards.js";
import { Card } from "./Card.js";

const popupEditProfile = document.querySelector(".popup_type_edit");
const popupCardAdd = document.querySelector(".popup_type_add");
const popupImageBig = document.querySelector(".popup_type_image");

// контент
const formEditProfile = popupEditProfile.querySelector(".form");
const nameInput = popupEditProfile.querySelector(".popup__input_form_name");
const jobInput = popupEditProfile.querySelector(
  ".popup__input_form_occupation"
);
const profileName = document.querySelector(".profile__name");
const profileOccupation = document.querySelector(".profile__occupation");
const popupImageBigItem = popupImageBig.querySelector(".opened-image__image");
const popupImageBigName = popupImageBig.querySelector(".opened-image__caption");

// открытие попапов
const popupOpenButtonElement = document.querySelector(".profile__edit-button");
const popupCardAddOpenButtonElement = document.querySelector(
  ".profile__add-button"
);

// закрытие попапов
const popupCloseButtonElement = popupEditProfile.querySelector(
  ".popup__close-button"
);
const popupCloseCardAdd = popupCardAdd.querySelector(".popup__close-button");
const popupCloseImageBig = popupImageBig.querySelector(".popup__close-button");

// const для card
const cardSubmitBtn = popupCardAdd.querySelector("#card-submit");
const cardListElement = document.querySelector(".elements__list");

const formAddCard = popupCardAdd.querySelector(".form");
const formInputCardName = popupCardAdd.querySelector(
  ".popup__input_form_place-name"
);
const formInputCardLink = popupCardAdd.querySelector(
  ".popup__input_form_place-img"
);
const cardTemplateSelector = "#card-template";

//Для валидации
const cardAddForm = popupCardAdd.querySelector(".form");
const profileEditForm = popupEditProfile.querySelector(".form");

const validationConfig = {
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__close-button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__input-error_active",
};

const formAddCardValidator = new FormValidator(validationConfig, cardAddForm);
const profileEditFormValidator = new FormValidator(
  validationConfig,
  profileEditForm
);

formAddCardValidator.enableValidation();
profileEditFormValidator.enableValidation();

// Функции карточек: добавление, удаление, лайки

const handleOpenBigImage = (name, link) => {
  popupImageBigItem.src = link;
  popupImageBigItem.alt = name;
  popupImageBigName.textContent = name;
  openPopup(popupImageBig);
};

const createNewCard = (data) => {
  const newCard = new Card(data, cardTemplateSelector, handleOpenBigImage);
  const cardElement = newCard.createCard();

  return cardElement;
};

const renderInitialCards = (data) => {
  cardListElement.prepend(createNewCard(data));
};

initialCards.forEach((data) => {
  renderInitialCards(data);
});

//Функция отправки формы карточки

const handleFormSubmitAddCard = (e) => {
  e.preventDefault();
  renderInitialCards({
    name: formInputCardName.value,
    link: formInputCardLink.value,
  });
  e.target.reset();
  closePopup(popupCardAdd);
};

//  Открытие и закрытие попапа
function openPopup(popup) {
  popup.classList.add("popup_opened");
  document.addEventListener("keydown", closePopupOnEsc);
}

function closePopup(popup) {
  popup.classList.remove("popup_opened");
  document.removeEventListener("keydown", closePopupOnEsc);
}

// Закрытие попапа по overlay

const closePopupByOverlay = (e) => {
  if (!e.target.closest(".popup__container")) {
    closePopup(e.target);
  }
};

//Функция для кнопки Сохранить popup profile
function submitEditProfileForm(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileOccupation.textContent = jobInput.value;
  closePopup(popupEditProfile);
}

// Функция закрытия попапов по нажатию на Esc
function closePopupOnEsc(evt) {
  if (evt.key === "Escape") {
    const openedPopup = document.querySelector(".popup_opened");
    closePopup(openedPopup);
  }
}

//Слушатели

popupOpenButtonElement.addEventListener("click", function () {
  profileEditFormValidator.resetValidate()
  openPopup(popupEditProfile);
  nameInput.value = profileName.textContent;
  jobInput.value = profileOccupation.textContent;
});

popupCloseButtonElement.addEventListener("click", function () {
  closePopup(popupEditProfile);
});

popupCardAddOpenButtonElement.addEventListener("click", function () {
  
    formAddCardValidator.resetValidate();
    cardSubmitBtn.classList.add("popup__close-button_disabled");
  openPopup(popupCardAdd);
});

popupCloseCardAdd.addEventListener("click", function () {
  closePopup(popupCardAdd);
});

popupCloseImageBig.addEventListener("click", function () {
  closePopup(popupImageBig);
});
formEditProfile.addEventListener("submit", submitEditProfileForm);

formAddCard.addEventListener("submit", handleFormSubmitAddCard);

popupEditProfile.addEventListener("click", closePopupByOverlay);
popupCardAdd.addEventListener("click", closePopupByOverlay);
popupImageBig.addEventListener("click", closePopupByOverlay);
