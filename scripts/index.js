const card = document.querySelector("#elementTemplate").content;
const popupEdit = document.querySelector(".popup_type_edit");
const popupEditClose = popupEdit.querySelector(".popup__close-button");
const popupProfileOpenButton = document.querySelector(".profile__edit-button");
const formProfile = popupEdit.querySelector(".form");
const nameInput = popupEdit.querySelector(".popup__input_form_name");
const jobInput = popupEdit.querySelector(".popup__input_form_occupation");
const profileName = document.querySelector(".profile__name");
const profileOccupation = document.querySelector(".profile__occupation");

const popupAdd = document.querySelector(".popup_type_add");
const formCard = popupAdd.querySelector(".form");
const cardPlaceName = document.querySelector(".popup__place-name");
const cardPlaceImg = document.querySelector(".popup__place-img");
const placeNameInput = popupAdd.querySelector(".popup__input_form_place-name");
const placeImgInput = popupAdd.querySelector(".popup__input_form_place-img");
const popupCardOpenButton = document.querySelector(".profile__add-button");
const popupAddClose = popupAdd.querySelector(".popup__close-button");
const popupImage = document.querySelector(".popup_type_image");
const popupImageClose = popupImage.querySelector(".popup__close-button");
const formCardSubmit = popupAdd.querySelector('.popup-button');
const inputListCardPopup = Array.from(
  formCard.querySelectorAll(setting.inputSelector)
);

// Обьединяем в одну константу закрытие попапа

const buttonCloseList = document.querySelectorAll(".popup__close-button");

buttonCloseList.forEach((btn) => {
  const popup = btn.closest(".popup");
  popup.addEventListener("mousedown", closePopupByOverlay);
  btn.addEventListener("click", () => closePopup(popup));
  // btn.addEventListener('click', () => resetValidate(popup));
});

// popupImage.addEventListener('mousedown', closePopupByOverlay);
// popupAdd.addEventListener('mousedown', closePopupByOverlay);
// popupEdit.addEventListener('mousedown', closePopupByOverlay);

// Открытие и закрытие попапа

function openPopup(popup) {
  popup.classList.add("popup_opened");
  document.addEventListener("keydown", closePopupByEscape);
  // document.addEventListener('mouseup', closePopupByOverlay);
}

function closePopup(popup) {
  popup.classList.remove("popup_opened");
  document.removeEventListener("keydown", closePopupByEscape);
  // document.removeEventListener('mouseup', closePopupByOverlay);
}

// Попап редактирования профиля

popupProfileOpenButton.addEventListener("click", () => {
  openPopup(popupEdit);

  nameInput.value = profileName.textContent;
  jobInput.value = profileOccupation.textContent;
});

popupEditClose.addEventListener("click", () => {
  // closePopup(popupEdit);
  resetValidate(formProfile);
});

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileOccupation.textContent = jobInput.value;
  closePopup(popupEdit);

  resetValidate(formProfile);
}

formProfile.addEventListener("submit", handleProfileFormSubmit);

// Функция создания карточки

const page = document.querySelector(".elements");

function createCard(element) {
  // const сard = document.querySelector('#elementTemplate').content.cloneNode(true)
  const cardElement = card.cloneNode(true);
  const cardHeading = cardElement.querySelector(".element__caption");
  cardHeading.textContent = element.name;
  const cardImage = cardElement.querySelector(".element__image");
  cardImage.src = element.link;
  cardImage.alt = element.name;

  const deleteButton = cardElement.querySelector(".element__delete-icon");
  deleteButton.addEventListener("click", handleDeleteButtonClick);

  const likeButton = cardElement.querySelector(".element__like");
  likeButton.addEventListener("click", (evt) => {
  evt.target.classList.toggle("element__like_active");
  });

  return cardElement;
}

elements.forEach((element) => {
  const newCard = createCard(element);
  addCard(newCard, page);
});

function handleDeleteButtonClick(evt) {
  const button = evt.target;
  const element = button.closest(".element");
  element.remove();
}

// Функция добавления карточки

popupCardOpenButton.addEventListener("click", () => {
  openPopup(popupAdd);
});

popupAddClose.addEventListener("click", () => {
  // closePopup(popupAdd);
  resetValidate(formCard);
});

function handleCardFormSubmit(evt) {
  evt.preventDefault();

  const card = {
    name: placeNameInput.value,
    link: placeImgInput.value,
    // alt: placeNameInput.value
  };

  const newCard = createCard(card);
  addCard(newCard, page);
  evt.target.reset();
  closePopup(popupAdd);
  resetValidate(formCard);
  toggleButtonState(inputList, formCardSubmit, setting);
}

formCard.addEventListener("submit", handleCardFormSubmit);

function addCard(element, cardContainer) {
  cardContainer.prepend(element);
}

// Открытие попапа с картинкой

const imageElement = popupImage.querySelector(".opened-image__image");
const imageCaption = popupImage.querySelector(".opened-image__caption");

function closePopupByEscape(evt) {
  if (evt.key === "Escape") {
    const openPopup = document.querySelector(".popup_opened");
    closePopup(openPopup);
  }
}

function closePopupByOverlay(evt) {
  if (evt.target.classList.contains("popup_opened")) {
    // const openPopup = document.querySelector('.popup_opened');
    closePopup(evt.target);
  }
}

page.addEventListener("click", (event) => {
  if (event.target.classList.contains("element__image")) {
    imageElement.src = event.target.src;
    imageElement.alt = event.target.alt;
    imageCaption.textContent = event.target.alt;

    openPopup(popupImage);
  }
});

// popupImageClose.addEventListener('click', () => {
// closePopup(popupImage);
// });
