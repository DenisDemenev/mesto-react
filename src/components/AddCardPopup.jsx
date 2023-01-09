import { useEffect, useState } from 'react';
import PopupWithForm from './PopupWithForm';

const AddCardPopup = ({ isOpen, onClose, onAddCard, isLoad }) => {
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
      onSubmit={handleSubmit}
      btnText={isLoad ? 'Сохраняем...' : 'Сохранить'}>
      <input
        onChange={handleChangeName}
        type="text"
        name="name"
        id="place-name"
        value={name}
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
        value={link}
        placeholder="Ссылка изображения"
        className="popup__input popup__input_type_link"
        required
      />
      <span className="popup__error place-link-error"></span>
    </PopupWithForm>
  );
};

export default AddCardPopup;
