// ==================  Edit popup  ==================
export const popupEditForm = document.forms['editPopupForm'], // form name="editPopupForm"
  nameInput = popupEditForm.elements.name, // input name="name"
  profInput = popupEditForm.elements.profession // input "prof"

// ==================  Add popup  ==================
export const popupAddForm = document.forms['addPopupForm'] // form name ="addPopupForm"

// ================== Open Buttons  ==================
export const popupAddCardOpenBtn = document.querySelector('.profile__button-add') // open [ + ]
export const popupEditOpenBtn = document.querySelector('.profile__button-edit') // open [ edit ]

// Настройки
export const vConfig = {
  formSelector: 'form', // class="form"
  inputSelector: '.form__input', //  class="form__input"
  submitButtonSelector: '.form__submit', // class="form__submit"
  inactiveButtonClass: 'popup__button-submit_disabled', // disabled button
  inputErrorClass: 'form__input_type_error', // border-bottom-color: red
  errorClass: 'form__input-error_active', // opacity 1 - показываем сообщение ошибки)
  openClass: 'popup_opened',
  PopupImageCaptionSelector: '.popup__image-caption',
  PopupImageSelector: '.popup__image',
}

// массив из карточек
export const initialCards = [
  {
    name: 'Paris',
    link: 'https://images.unsplash.com/photo-1471960098958-2059c6681742?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2021&q=80'
  },
  {
    name: 'Prague',
    link: 'https://images.unsplash.com/photo-1519677100203-a0e668c92439?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80'
  },
  {
    name: 'Freedom',
    link: 'https://images.unsplash.com/photo-1495555694070-b0fe5bcd2576?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80'
  }, {
    name: 'Tokyo',
    link: 'https://images.unsplash.com/photo-1527596773609-5f8544271a51?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
  },
  {
    name: 'Istanbul',
    link: 'https://images.unsplash.com/photo-1623439844752-524658b16ce6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=889&q=80'
  },
  {
    name: 'Tokyo',
    link: 'https://images.unsplash.com/photo-1616386232536-ed7340327763?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=676&q=80'
  },
  {
    name: 'Kóspallag',
    link: 'https://images.unsplash.com/photo-1617046085573-d2040c3a1cdd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80'
  },
  {
    name: 'Hong Kong',
    link: 'https://images.unsplash.com/photo-1620175527578-3a01876fd6c7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1868&q=80'
  },
  {
    name: 'Tenerife',
    link: 'https://images.unsplash.com/photo-1616105345895-f20f485f1874?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1067&q=80'
  },

];

