import { useEffect, useState } from 'react';
import PopupWithForm from './PopupWithForm';

const AddCardPopup = ({ isOpen, onClose, onAddCard }) => {
  const [name, setName] = useState('');
  const [link, setLink] = useState('');

  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleChangeLink(e) {
    setLink(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onAddCard({
      name,
      link,
    });
  }

  useEffect(() => {
    setName('');
    setLink('');
  }, [isOpen]);

  return (
    <PopupWithForm
      name="photo_card-add"
      title="Новое место"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}>
      <input
        onChange={handleChangeName}
        type="text"
        name="name"
        id="place-name"
        defaultValue={name}
        placeholder="Название"
        className="popup__input popup__input_type_place"
        required
        minLength="1"
        maxLength="30"
      />
      <span className="popup__error place-name-error"></span>
      <input
        onChange={handleChangeLink}
        type="url"
        name="link"
        id="place-link"
        defaultValue={link}
        placeholder="Ссылка изображения"
        className="popup__input popup__input_type_link"
        required
      />
      <span className="popup__error place-link-error"></span>
    </PopupWithForm>
  );
};

export default AddCardPopup;
