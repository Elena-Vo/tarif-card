
import React, { useState } from 'react';
import PropTypes from "prop-types";
import "./card.css";

const Card = ({ title, price, speed, titleColor, priceColor, traffic }) => {
  const [isTall, setIsTall] = useState(false);
  const toggleTall = () => {
    setIsTall(!isTall)
  };


  return (
    <div className={`card ${isTall ? 'tall' : ''}`} onClick={toggleTall}>
      <div className="section title" style={{ backgroundColor: titleColor }}>{title}</div>
      <div className="section price" style={{ backgroundColor: priceColor }}>
      <div className="price-stairs">
          <span className="price-rub">руб</span>
          <span className="price-value">{price}</span>
          <span className="price-month">/мес</span>
        </div>
      </div>
      <div className="section speed">{speed}</div>
      <div className="section traffic">{traffic}</div>
    </div>
  );
};
Card.propTypes = {
  title: PropTypes.string.isRequired, // Строка, обязательно
  price: PropTypes.number.isRequired, // Число, обязательно
  speed: PropTypes.string.isRequired, // Строка, обязательно
  titleColor: PropTypes.string, // Строка, не обязательно
  priceColor: PropTypes.string, // Строка, не обязательно
  traffic: PropTypes.string // Строка, не обязательно
};

Card.defaultProps = {
  titleColor: "#fff",
  priceColor: "#fff",
  traffic: "Объем включенного трафика не ограничен"
}

export default Card;