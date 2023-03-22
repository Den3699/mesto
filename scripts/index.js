const popupElement = document.querySelector('.popup');
const popupEdit = document.querySelector('.popup_type_edit');
const popupEditClose = popupEdit.querySelector('.popup__close');
const popupElementOpenButton = document.querySelector('.profile__edit-button');
const formElement = popupEdit.querySelector('.popup__content');
const nameInput = popupEdit.querySelector('.popup__input_form_name');
const jobInput = popupEdit.querySelector('.popup__input_form_occupation');
const profileName = document.querySelector('.profile__name');
const profileOccupation = document.querySelector('.profile__occupation');


const popupAdd = document.querySelector('.popup_type_add');
const formCard = popupAdd.querySelector('.popup__content');
const cardPlaceName = document.querySelector('.popup__place-name');
const cardPlaceImg = document.querySelector('.popup__place-img');
const placeNameInput = popupAdd.querySelector('.popup__input_form_place-name');
const placeImgInput = popupAdd.querySelector('.popup__input_form_place-img');
const popupCardOpenButton = document.querySelector('.profile__add-button');
const popupAddClose = popupAdd.querySelector('.popup__close');
const popupImage = document.querySelector('.popup_type_image');
const popupImageClose = popupImage.querySelector('.popup__close');

const cardsList = document.querySelector('.elements');






function openPopup(popup) {
  popup.classList.add('popup_animated');
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupByEscape);
  document.addEventListener('mouseup', closePopupByOverlay);
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopupByEscape);
  document.removeEventListener('mouseup', closePopupByOverlay);
}

popupElementOpenButton.addEventListener('click', () => {
  openPopup(popupEdit);

  nameInput.value = profileName.textContent;
  jobInput.value = profileOccupation.textContent;
});


popupEditClose.addEventListener('click', () => {
  closePopup(popupEdit);
});

function handlerFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileOccupation.textContent = jobInput.value;
  closePopup(popupEdit);
}



formElement.addEventListener('submit', handlerFormSubmit);



const elements = [
  {
    image: 'images/photo_2023-02-25_16-40-36.jpg',
    alt: 'Молодой на когтечестке.',
    heading: 'Карточка 1'
  },
  {
    image: 'images/photo_2023-02-25_16-40-07.jpg',
    alt: 'Стул.',
    heading: 'Карточка 2'
  },
  {
    image: 'images/photo_2023-02-25_16-39-43.jpg',
    alt: 'Холодильник.',
    heading: 'Карточка 3'
  },
  {
    image: 'images/photo_2023-02-25_16-39-12.jpg',
    alt: 'Вода.',
    heading: 'Карточка 4'
  },
  {
    image: 'images/photo_2023-02-25_16-38-38.jpg',
    alt: 'Когтечестка.',
    heading: 'Карточка 5'
  },
  {
    image: 'images/photo_2023-02-25_16-37-38.jpg',
    alt: 'Седушка.',
    heading: 'Карточка 6'
  }
]

const page = document.querySelector('.elements')




const createCard = (element) => {
const Card = document.querySelector('#elementTemplate').content.cloneNode(true)

const cardHeading = Card.querySelector('.element__caption')
cardHeading.textContent = element.heading
const cardImage = Card.querySelector('.element__image')
cardImage.setAttribute('src', element.image)
cardImage.setAttribute('alt', element.alt)
const deleteButton = Card.querySelector('.element__delete-icon')
deleteButton.addEventListener('click', handleDeleteButtonClick)


const likeButton = Card.querySelector('.element__like');
likeButton.addEventListener('click', evt => {
  evt.target.classList.toggle('element__like_active');
});


page.append(Card)

}

elements.forEach(createCard)

function handleDeleteButtonClick(evt) {
  const button = evt.target
  const element = button.closest('.element')
  element.remove()
}







popupCardOpenButton.addEventListener('click', () => {
  openPopup(popupAdd);
});


popupAddClose.addEventListener('click', () => {
  closePopup(popupAdd);

});




function handleCardFormSubmit(evt) {
  evt.preventDefault();

  addCard({
    name: placeNameInput.value,
    link: placeImgInput.value
  }, cardsList, true);

  closePopup(popupAdd);
}

formCard.addEventListener('submit', handleCardFormSubmit);



function addCard(element, cardContainer, newCard) {
  const card = createCard(element);

  if (newCard) {
    cardContainer.prepend(card);
  } else {
    cardContainer.append(card);
  }
}



const imageElement = popupImage.querySelector('.opened-image__image');
const imageCaption = popupImage.querySelector('.opened-image__caption');

function closePopupByEscape(evt) {
  if (evt.key === 'Escape') {
    const openPopup = document.querySelector('.popup_opened');
    closePopup(openPopup);
  }
}

function closePopupByOverlay(evt) {
  if (evt.target.classList.contains('popup_opened')) {
    const openPopup = document.querySelector('.popup_opened');
    closePopup(openPopup);
  }
}


cardsList.addEventListener("click", (event) => {
  if (event.target.classList.contains("element__image")) {
    imageElement.src = event.target.src;
    imageElement.alt = event.target.alt;
    imageCaption.textContent = event.target.alt;

    openPopup(popupImage);
  }
});

popupImageClose.addEventListener('click', () => {
  closePopup(popupImage);
});






