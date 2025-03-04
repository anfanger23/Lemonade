import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialState = {
  fruits: [
    { id: 1, name: 'Lemon 🍋', price: 2 },
    { id: 2, name: 'Apple 🍎', price: 3 },
    { id: 3, name: 'Orange 🍊', price: 4 },
  ],
  cart: [],
  expense: 0,
};

const fruitSlice = createSlice({
  name: 'fruit',
  initialState,
  reducers: {
    sellFruit: (state, action) => {
      const item = state.cart.find(item => item.id === action.payload.id);
      if (item) {
        item.quantity -= 1;
        state.expense -= action.payload.price;
        if (item.quantity === 0) {
          state.cart = state.cart.filter(item => item.id !== action.payload.id);
        }
      }
    },
    buyFruit: (state, action) => {
      const item = state.cart.find(item => item.id === action.payload.id);
      if (item) {
        item.quantity += 1;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
      state.expense += action.payload.price;
    },
  },
});

export const { sellFruit, buyFruit } = fruitSlice.actions;

const store = configureStore({
  reducer: fruitSlice.reducer,
});

export default store;