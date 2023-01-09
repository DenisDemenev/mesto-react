import { useRef, useEffect } from 'react';
import PopupWithForm from './PopupWithForm';
import { useFormAndValidation } from '../hooks/useFormAndValidation';

const AvatarPopup = ({ isOpen, onClose, onUpdateAvatar, isLoad }) => {
  const { handleChange, errors, isValid, resetForm } = useFormAndValidation({
    avatar: '',
  });
  const avatarRef = useRef();

  function handleSubmit(e) {
    e.preventDefault();
    if (isValid) {
      onUpdateAvatar({
        avatar: avatarRef.current.value,
      });
    }
  }

  useEffect(() => {
    if (!isOpen) {
      resetForm();
    }
  }, [isOpen, resetForm]);

  return (
    <PopupWithForm
      name="avatar"
      title="Обновить аватар"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      btnText={isLoad ? 'Сохраняем...' : 'Сохранить'}
      isValid={isValid}>
      <input
        ref={avatarRef}
        type="url"
        name="avatar"
        id="avatar-link"
        defaultValue=""
        placeholder="Ссылка изображения"
        className="popup__input popup__input_type_link"
        required
        onChange={handleChange}
      />
      <span
        className={`popup__error avatar-link-error ${
          isValid ? '' : 'popup__error_visible'
        }`}>
        {errors.avatar}
      </span>
    </PopupWithForm>
  );
};

export default AvatarPopup;
