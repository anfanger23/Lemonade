import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { buyFruit } from './store';

function FruitStand() {
  console.log("FruitStand component rendered");
  const expense = useSelector((state) => state.expense);
  const dispatch = useDispatch();

  const handleBuy = (fruit) => dispatch(buyFruit(fruit));

  const fruits = useSelector((state) => state.fruits);

  return (
    <div className="fruit-stand">
      <h1 className="title">Fruit Stand</h1>
      <p className="expense">Total: ${expense}</p>
      <div className="buttons">
        {fruits.map(fruit => (
          <button key={fruit.id} onClick={() => handleBuy(fruit)} className="buy-button">
            Buy {fruit.name} (${fruit.price})
          </button>
        ))}
      </div>
    </div>
  );
}

export default FruitStand;