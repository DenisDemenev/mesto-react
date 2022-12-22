import React from 'react';
import PopupWithForm from './PopupWithForm';

const ProfilePopup = ({ isOpen, onClose }) => {
  return (
    <PopupWithForm
      name="profile_edit"
      title="Редактировать профиль"
      isOpen={isOpen}
      onClose={onClose}>
      <input
        type="text"
        name="name"
        id="profile-name"
        defaultValue=""
        placeholder="Имя"
        className="popup__input popup__input_type_name"
        required
        minLength="2"
        maxLength="40"
      />
      <span className="popup__error profile-name-error"></span>
      <input
        type="text"
        name="title"
        id="profile-title"
        defaultValue=""
        placeholder="Деятельность"
        className="popup__input popup__input_type_title"
        required
        minLength="2"
        maxLength="200"
      />
      <span className="popup__error profile-title-error"></span>
    </PopupWithForm>
  );
};

export default ProfilePopup;
