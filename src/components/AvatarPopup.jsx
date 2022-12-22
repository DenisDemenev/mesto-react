import React from 'react';
import PopupWithForm from './PopupWithForm';

const AvatarPopup = ({ isOpen, onClose }) => {
  return (
    <PopupWithForm
      name="avatar"
      title="Обновить аватар"
      isOpen={isOpen}
      onClose={onClose}>
      <input
        type="url"
        name="avatar"
        id="avatar-link"
        defaultValue=""
        placeholder="Ссылка изображения"
        className="popup__input popup__input_type_link"
        required
      />
      <span className="popup__error avatar-link-error"></span>
    </PopupWithForm>
  );
};

export default AvatarPopup;
