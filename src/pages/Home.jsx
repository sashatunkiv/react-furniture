import React, { useContext } from 'react';

import Category from '../components/Category';
import Card from '../components/Card';
import AppContext from '../context/context';
import { Link } from 'react-router-dom';

function Home() {
  const { categoryId, setCategoryId, items, AddToCart, AddToFavorite, itemsLength } =
    useContext(AppContext);
  return (
    <>
      <header className="header d-flex justify-between align-center">
        <h2>Furniture</h2>

        <Link to="/react-furniture/favorite">
          <img width={28} src="/img/wishlist.png" />
        </Link>
        <Link to='/react-furniture/card'>
          <div className="header-length">
            <img width={28} src="./img/cart.png" />
            <div className="length">{itemsLength}</div>
          </div>
        </Link>
      </header>
      <div>
        <Category categoryId={categoryId} onClickCategory={(id) => setCategoryId(id)} />
        <div className="container">
          {items.map((obj) => (
            <Card
              key={obj.id}
              AddToFavorite={(obj) => AddToFavorite(obj)}
              onAddToCart={(obj) => AddToCart(obj)}
              {...obj}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;
