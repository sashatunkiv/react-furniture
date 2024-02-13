import React from 'react';

function Order({addOrder}) {
  return (
    <div className='order'>
      <div>Ваше замовлення прийняте в обробку</div>
      <a href='/react-furniture' >На головну</a>
    </div>
  );
}

export default Order;
