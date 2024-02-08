import { useEffect, useState } from 'react';
import AppContext from './context/context';
import { Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

import Card from './components/Card';
import './index.scss';
import 'macro-css';
import Category from './components/Category';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Wishlist from './pages/Wishlist';

function App() {
  const [items, setItems] = useState([]);
  const [categoryId, setCategoryId] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  const [favoriteItems, setFavoriteItems] = useState([]);

  console.log(favoriteItems);

  useEffect(() => {
    fetch(
      `https://65c367dc39055e7482c0d0bb.mockapi.io/furniture?${
        categoryId > 0 ? `category=${categoryId}` : ''
      }`,
    )
      .then((res) => res.json())
      .then((json) => setItems(json))
      .catch((err) => {
        console.warn(err);
        alert('Виникла помилка рпи завантаженні даних');
      });
  }, [categoryId]);

  const AddToCart = (obj) => {
    setCartItems([...cartItems, obj]);
  };

  const AddToFavorite = (obj) => {
    setFavoriteItems([...favoriteItems, obj])
  }

  const deleteCart = (id) => {
    setCartItems((prev) => prev.filter(item => item.id !== id))
  }

  const deleteFavorite = (id) => {
    setFavoriteItems((prev) => prev.filter(item => item.id !== id))
  }

  const itemsLength = cartItems.length

  return (
    <AppContext.Provider value={{ items, categoryId, setCategoryId, items, AddToCart, deleteCart, favoriteItems, AddToFavorite, deleteFavorite, itemsLength }}>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Routes>
          <Route path="/card" element={<Cart cartItems={cartItems}/>} />
        </Routes>
        <Routes>
          <Route path="/favorite" element={<Wishlist />} />
        </Routes>
      </div>
    </AppContext.Provider>
  );
}

export default App;
