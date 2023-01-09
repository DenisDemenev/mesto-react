import { useState, useEffect, useContext } from 'react';
import { CurrentUserContext } from '../context/CurrentUserContext';
import PopupWithForm from './PopupWithForm';

const ProfilePopup = ({ isOpen, onClose, onUpdateUser, isLoad }) => {
  const [name, setName] = useState('');
  const [title, setTitle] = useState('');
  const currentUser = useContext(CurrentUserContext);

  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleChangeTitle(e) {
    setTitle(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateUser({
      name,
      about: title,
    });
  }

  useEffect(() => {
    setName(currentUser.name);
    setTitle(currentUser.about);
  }, [currentUser, isOpen]);

  return (
    <PopupWithForm
      name="profile_edit"
      title="Редактировать профиль"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      btnText={isLoad ? 'Сохраняем...' : 'Сохранить'}>
      <input
        type="text"
        name="name"
        id="profile-name"
        value={name || ''}
        placeholder="Имя"
        className="popup__input popup__input_type_name"
        required
        minLength="2"
        maxLength="40"
        onChange={handleChangeName}
      />
      <span className="popup__error profile-name-error"></span>
      <input
        type="text"
        name="title"
        id="profile-title"
        value={title || ''}
        placeholder="Деятельность"
        className="popup__input popup__input_type_title"
        required
        minLength="2"
        maxLength="200"
        onChange={handleChangeTitle}
      />
      <span className="popup__error profile-title-error"></span>
    </PopupWithForm>
  );
};

export default ProfilePopup;
