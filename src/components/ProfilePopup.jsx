import { useState, useEffect, useContext } from 'react';
import { CurrentUserContext } from '../context/CurrentUserContext';
import PopupWithForm from './PopupWithForm';

const ProfilePopup = ({ isOpen, onClose, onUpdateUser }) => {
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
      onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        id="profile-name"
        defaultValue={name}
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
        defaultValue={title}
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
