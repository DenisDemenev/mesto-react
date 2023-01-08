import { useState, useEffect } from 'react';
import Footer from './Footer';
import Header from './Header';
import Main from './Main';
import ProfilePopup from './ProfilePopup';
import AddCardPopup from './AddCardPopup';
import AvatarPopup from './AvatarPopup';
import ImagePopup from './ImagePopup';
import { CurrentUserContext } from '../context/CurrentUserContext';
import api from '../utils/Api';

const App = () => {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});
  const [currentUser, setCurrentUser] = useState({});
  const [cards, setCards] = useState([]);

  useEffect(() => {
    Promise.all([api.getUserInfo(), api.getInitialCards()])
      .then(([user, cards]) => {
        setCurrentUser(user);
        setCards(cards);
      })
      .catch((err) => {
        console.log(`Что-то пошло не так: ${err}`);
      });
  }, []);

  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(true);
  };

  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(true);
  };

  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(true);
  };

  const closeAllPopups = () => {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard({});
  };

  const handleCardClick = (card) => {
    setSelectedCard(card);
  };

  const handleCardLike = (card) => {
    const isLiked = card.likes.some((i) => i._id === currentUser._id);
    api
      .changeLikeCardStatus(card._id, !isLiked)
      .then((newCard) => {
        setCards((state) =>
          state.map((c) => (c._id === card._id ? newCard : c))
        );
      })
      .catch((err) => console.log(`Что-то пошло не так: ${err}`));
  };

  const handleCardDelete = (card) => {
    api
      .deleteCard(card._id)
      .then(() => {
        setCards((cards) =>
          cards.filter((newCard) => newCard._id !== card._id)
        );
      })
      .catch((err) => console.log(`Что-то пошло не так: ${err}`));
  };

  const handleUpdateUser = (newUser) => {
    api
      .setUserInfo(newUser)
      .then((res) => {
        setCurrentUser(res);
        closeAllPopups();
      })
      .catch((err) => console.log(`Что-то пошло не так: ${err}`));
  };

  const handleUpdateAvatar = (avatar) => {
    api
      .setAvatar(avatar)
      .then((res) => {
        setCurrentUser(res);
        closeAllPopups();
      })
      .catch((err) => console.log(`Что-то пошло не так: ${err}`));
  };

  function handleAddPlaceSubmit(data) {
    api
      .addCard(data)
      .then((res) => {
        setCards([res, ...cards]);
        closeAllPopups();
      })
      .catch((err) => console.log(`Что-то пошло не так: ${err}`));
  }

  return (
    <>
      <CurrentUserContext.Provider value={currentUser}>
        <Header />
        <Main
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onCardClick={handleCardClick}
          cards={cards}
          onCardLike={handleCardLike}
          onCardDelete={handleCardDelete}
        />
        <Footer />
        <ProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser}
        />
        <AddCardPopup
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          onAddCard={handleAddPlaceSubmit}
        />
        <AvatarPopup
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          onUpdateAvatar={handleUpdateAvatar}
        />
        <ImagePopup card={selectedCard} onClose={closeAllPopups} />
      </CurrentUserContext.Provider>
    </>
  );
};

export default App;
