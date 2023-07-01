import './index.css'
import {Card} from "../scripts/components/Card.js"
import {FormValidator} from "../scripts/components/FormValidator.js"
import {UserInfo} from "../scripts/components/UserInfo.js"
import {PopupWithForm} from "../scripts/components/PopupWithForm.js"
import {PopupWithImage} from "../scripts/components/PopupWithImage.js"
import {Section} from "../scripts/components/Section.js"
import {
  vConfig,
  popupEditForm,
  popupAddForm,
  popupEditOpenBtn,
  nameInput,
  profInput,
  popupAddCardOpenBtn,
  initialCards,
} from "../scripts/utils/constants.js";

function createCard(cardData){
  const card = new Card(
    cardData,
    '.cards-grid-template',
    cardImageClickHandler
  )
  return card.renderCard()
}

const editProfileSubmitHandler = (inputValues) => {
  userInfo.setUserInfo({
    name: inputValues.name,
    about: inputValues.profession
  })
  popupWithEditForm.closePopup()
}

const addCardSubmitHandler = ({place,link}) => {
  createAndRenderCard({
    name: place,
    link: link
  })
  popupWithAddForm.closePopup()
}

function createAndRenderCard(cardData) {
  const newCard = createCard(cardData)
  cardsGridTemplate.addItem(newCard)
}

// Логика отрисовки карточек при помощи Section
const cardsGridTemplate = new Section({renderer: createAndRenderCard}, '.cards-grid') // куда рисуем карточку

// отрисовка шаблонных карточек
cardsGridTemplate.renderItems(initialCards)

// валидация для Edit Popup
const editProfileFormValidator = new FormValidator(vConfig, popupEditForm)
editProfileFormValidator.enableValidation()

// валидация для Add Popup
const addCardFormValidator = new FormValidator(vConfig, popupAddForm)
addCardFormValidator.enableValidation()

const userInfo = new UserInfo('.profile__title', '.profile__profession')

const popupWithEditForm = new PopupWithForm('.popup-type-edit',editProfileSubmitHandler)
popupWithEditForm.setEventListeners()

const popupWithAddForm = new PopupWithForm('.popup-type-add-card',addCardSubmitHandler)
popupWithAddForm.setEventListeners()

const popupWithImage = new PopupWithImage('.popup-type-image')
popupWithImage.setEventListeners()

function cardImageClickHandler(title,link){
  popupWithImage.openPopup(title,link)
}

// ==================  Edit form  ==================
popupEditOpenBtn.addEventListener('click', () => {
  popupWithEditForm.openPopup()
  editProfileFormValidator.clearInputError()
  editProfileFormValidator.setButtonEnabled()

  const user = userInfo.getUserInfo()
  // передаём значения из profile в инпуты попапа
  nameInput.value = user.name
  profInput.value = user.profession

})

// ==================  Add form ==================
popupAddCardOpenBtn.addEventListener('click', () => {
  addCardFormValidator.clearInputError()
  addCardFormValidator.setButtonDisabled()
  popupWithAddForm.openPopup()
})
