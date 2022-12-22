import React from 'react';
import PopupWithForm from './PopupWithForm';

const AddCardPopup = ({ isOpen, onClose }) => {
  return (
    <PopupWithForm
      name="photo_card-add"
      title="Новое место"
      isOpen={isOpen}
      onClose={onClose}>
      <input
        type="text"
        name="name"
        id="place-name"
        defaultValue=""
        placeholder="Название"
        className="popup__input popup__input_type_place"
        required
        minLength="1"
        maxLength="30"
      />
      <span className="popup__error place-name-error"></span>
      <input
        type="url"
        name="link"
        id="place-link"
        defaultValue=""
        placeholder="Ссылка изображения"
        className="popup__input popup__input_type_link"
        required
      />
      <span className="popup__error place-link-error"></span>
    </PopupWithForm>
  );
};

export default AddCardPopup;
