import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../context/context';
import Order from '../components/Order';

function Cart({ cartItems }) {
  const [isOrder, setIsOrder] = useState(true);
  const { deleteCart } = useContext(AppContext);

  const TotalPrice = cartItems.reduce((sum, obj) => obj.price + sum, 0);

  const addOrder = () => {
    setIsOrder(!isOrder);
  };
  return (
    <div className="cart">
      <div className="d-flex align-center justify-between">
        <Link to="/react-furniture">
          <img className="cart-back" width={35} src="./img/left-arrow.png" />
        </Link>
        <h2>Cart</h2>
        <img />
      </div>
      <div>
      {isOrder ? (
        <>
        <div className="cart-wrap">
          {cartItems.map((item, i) => (
            <div className="cart-product" key={i}>
              <img className="cart-furniture" width={60} src={item.imgUrl} />
              <div>
                <h3>{item.title}</h3>
                <h3 className="cart-price">${item.price}</h3>
              </div>
              <img
                onClick={() => deleteCart(item.id)}
                className="cart-delete"
                width={20}
                height={20}
                src="./img/delete.png"
              />
            </div>
          ))}
        </div>
        <div>
          <div className="cart-total">
            <h2>Total price</h2>
            <h3>${TotalPrice}</h3>
          </div>
          <button onClick={addOrder}>Checkout</button>
        </div>
      </>
      ) : (
        <Order addOrder={addOrder} />
      )}
      </div>
    </div>
  );
}

export default Cart;
