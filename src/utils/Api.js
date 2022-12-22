class Api {
  constructor(data) {
    this._url = data.url;
    this._headers = data.headers;
  }

  async getInitialCards() {
    const res = await fetch(`${this._url}cards`, {
      method: 'GET',
      headers: this._headers,
    });
    return this._checkResponse(res);
  }

  async getUserInfo() {
    const res = await fetch(`${this._url}users/me`, {
      method: 'GET',
      headers: this._headers,
    });
    return this._checkResponse(res);
  }

  async setUserInfo(newUser) {
    const res = await fetch(`${this._url}users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name: newUser.name,
        about: newUser.title,
      }),
    });
    return this._checkResponse(res);
  }

  async addCard({ name, link }) {
    const res = await fetch(`${this._url}cards`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        name,
        link,
      }),
    });
    return this._checkResponse(res);
  }

  async setAvatar({ avatar }) {
    const res = await fetch(`${this._url}users/me/avatar`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({ avatar }),
    });
    return this._checkResponse(res);
  }

  async deleteCard(id) {
    const res = await fetch(`${this._url}cards/${id}`, {
      method: 'DELETE',
      headers: this._headers,
    });
    return this._checkResponse(res);
  }

  async deleteLike(id) {
    const res = await fetch(`${this._url}cards/${id}/likes`, {
      method: 'DELETE',
      headers: this._headers,
    });
    return this._checkResponse(res);
  }

  async addLike(id) {
    const res = await fetch(`${this._url}cards/${id}/likes`, {
      method: 'PUT',
      headers: this._headers,
    });
    return this._checkResponse(res);
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }
}

const api = new Api({
  url: 'https://mesto.nomoreparties.co/v1/cohort-54/',
  headers: {
    authorization: '349c10e3-f1a2-49ea-9b78-f66ecb70c6ef',
    'content-type': 'application/json',
  },
});
export default api;
