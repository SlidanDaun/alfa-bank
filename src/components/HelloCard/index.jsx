import React from 'react';
import style from './index.module.css';

const GreetingCard = () => {
  return (
    <div className={style.card}>
      <h1>Привет, <span className={style.name}>Мария!</span></h1>
      <p>Как ты? А у нас сошлись звёзды, и мы сделали лимитированную коллекцию дизайнов карт с Олесей Иванченко. Посмотришь?</p>
    </div>
  );
}

export default GreetingCard;