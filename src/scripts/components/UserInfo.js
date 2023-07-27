// отвечает за управление отображением информации о пользователе на странице
export class UserInfo {
  constructor(nameSelector, profSelector) {
    this._name = document.querySelector(nameSelector)
    this._profession = document.querySelector(profSelector)
  }

  getUserInfo() {
    return {
      name: this._name.textContent,
      profession: this._profession.textContent,
    }
  }

  setUserInfo({name, about}) {
    if (name) {
      this._name.textContent = name
    }
    if (about) {
      this._profession.textContent = about
    }
  }
}
