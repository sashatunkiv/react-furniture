import React, { useContext } from 'react';
import AppContext from '../context/context';
import { Link } from 'react-router-dom';

function Wishlist() {
  const { favoriteItems, AddToFavorite, deleteFavorite } = useContext(AppContext);

  return (
    <div className='wishlist'>
      <div className="d-flex align-center justify-between">
        <Link to="/">
          <img className="cart-back" width={35} src="./img/left-arrow.png" />
        </Link>
        <h2>Wishlist</h2>
        <img />
      </div>
      <div className="container">
        {favoriteItems.map((item, i) => (
          <div key={i} className="card">
            <img
              onClick={() => deleteFavorite(item.id)}
              className="card-liked"
              src="./img/liked.svg"
            />
            <img className="card-img" width={100} src={item.imgUrl} />
            <h2 className="card-title">{item.title}</h2>
            <div className="d-flex justify-between">
              <h3>${item.price}</h3>
              {/* <img  className="card-add" src="./img/add.svg" /> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Wishlist;
