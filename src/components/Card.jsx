import React from 'react';

const Card = ({ card, onCardClick }) => {
  const handleClick = () => {
    onCardClick(card);
  };

  return (
    <li className="photo__card">
      <button
        className="photo__card-remove"
        type="button"
        title="Удалить"></button>
      <img
        className="photo__card-image"
        src={card.link}
        alt={card.name}
        onClick={handleClick}
      />
      <div className="photo__card-discription">
        <h2 className="photo__card-title">{card.name}</h2>
        <div className="photo__card-like-container">
          <button className="photo__card-like" type="button"></button>
          <span className="photo__card-like-count">{card.link.length}</span>
        </div>
      </div>
    </li>
  );
};

export default Card;
