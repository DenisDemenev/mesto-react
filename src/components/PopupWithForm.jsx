import React from 'react';

const PopupWithForm = ({
  name,
  title,
  isOpen,
  children,
  onClose,
  onSubmit,
  btnText,
}) => {
  return (
    <div className={`popup popup_${name} ${isOpen ? 'popup_open' : ''}`}>
      <div className="popup__container">
        <button
          type="button"
          className="popup__button-close"
          aria-label="Закрыть"
          onClick={onClose}></button>
        <h3 className="popup__title">{title}</h3>
        <form
          onSubmit={onSubmit}
          name={`${name}_form`}
          className="popup__form"
          noValidate>
          {children}
          <button
            className="popup__save-button"
            type="submit"
            aria-label="Сохранить">
            {btnText}
          </button>
        </form>
      </div>
    </div>
  );
};

export default PopupWithForm;
