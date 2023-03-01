const popupElement = document.querySelector('.popup');
const popupCloseButtonElement = popupElement.querySelector('.popup__close');
const popupOpenButtonElement = document.querySelector('.profile__edit-button');
const formElement = popupElement.querySelector('.popup__content');
const nameInput = popupElement.querySelector('.popup__input_form_name');
const jobInput = popupElement.querySelector('.popup__input_form_occupation');
const profileName = document.querySelector('.profile__name');
const profileOccupation = document.querySelector('.profile__occupation');


const openPopup = function() {
  popupElement.classList.add('popup_opened');
  nameInput.value = profileName.textContent;
  jobInput.value = profileOccupation.textContent;
};






const closePopup = function() {
  popupElement.classList.remove('popup_opened');
};


function formSubmitHandler(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileOccupation.textContent = jobInput.value;
  closePopup();
}


popupOpenButtonElement.addEventListener('click', openPopup);
popupCloseButtonElement.addEventListener('click', closePopup);
formElement.addEventListener('submit', formSubmitHandler);

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




elements.forEach(function(element) {
const Card = document.querySelector('#elementTemplate').content.cloneNode(true)

const cardHeading = Card.querySelector('.element__caption')
cardHeading.textContent = element.heading
const cardImage = Card.querySelector('.element__image')
cardImage.setAttribute('src', element.image)
page.append(Card)

})
