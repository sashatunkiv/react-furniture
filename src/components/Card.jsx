import React, { useContext, useState } from 'react';
import AppContext from '../context/context';

function Card({id, price, title, imgUrl, onAddToCart, AddToFavorite }) {
    const [isFavorite, setIsFavorite] = useState(false);
    const onClickPlus = () => {
        onAddToCart({id, price, title, imgUrl})
    }

    const onClickFavorite = () => {
        AddToFavorite({id, price, title, imgUrl})
        setIsFavorite(!isFavorite);
    }

  return (
    <div className="card">
      <img onClick={onClickFavorite} className="card-liked" src={isFavorite ? `./img/liked.svg` : `./img/unliked.svg`} />
      <img className="card-img" width={100} src={imgUrl} />
      <h2 className="card-title">{title}</h2>
      <div className="d-flex justify-between">
        <h3>${price}</h3>
        <img onClick={onClickPlus} className="card-add" src="./img/add.svg" />
      </div>
    </div>
  );
}

export default Card;
