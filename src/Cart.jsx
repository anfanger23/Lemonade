import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { sellFruit } from './store';

function Cart() {
  const cart = useSelector((state) => state.cart);
  const expense = useSelector((state) => state.expense);
  const dispatch = useDispatch();

  const handleRemove = (fruit) => dispatch(sellFruit(fruit));

  const totalCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="cart">
      <h2>Cart</h2>
      <p>Total Items: {totalCount}</p>
      <p>Total Price: ${expense.toFixed(2)}</p>
      {cart.map(item => (
        <div key={item.id} className="cart-item">
          {item.name} (x{item.quantity}) 
          <button onClick={() => handleRemove(item)} className="remove-button">-</button>
        </div>
      ))}
    </div>
  );
}

export default Cart;