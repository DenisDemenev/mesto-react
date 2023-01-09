import { useRef, useEffect } from 'react';
import PopupWithForm from './PopupWithForm';

const AvatarPopup = ({ isOpen, onClose, onUpdateAvatar, isLoad }) => {
  const avatarRef = useRef();

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateAvatar({
      avatar: avatarRef.current.value,
    });
  }

  useEffect(() => {
    avatarRef.current.value = '';
  }, [isOpen]);

  return (
    <PopupWithForm
      name="avatar"
      title="Обновить аватар"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      btnText={isLoad ? 'Сохраняем...' : 'Сохранить'}>
      <input
        ref={avatarRef}
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
