
import React from 'react';
import "./card.css";

const Card = ({ title, price, speed, isTall, titleColor, priceColor }) => {
  return (
    <div className={`card ${isTall ? 'tall' : ''}`}>
      <div className="section title" style={{ backgroundColor: titleColor }}>{title}</div>
      <div className="section price" style={{ backgroundColor: priceColor }}>
      <div className="price-stairs">
          <span className="price-rub">руб</span>
          <span className="price-value">{price}</span>
          <span className="price-month">/мес</span>
        </div>
      </div>
      <div className="section speed">{speed}</div>
      <div className="section traffic">Объем включенного трафика не ограничен</div>
    </div>
  );
};

export default Card;