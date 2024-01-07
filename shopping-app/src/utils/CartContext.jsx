// CartContext.js
import React, { createContext, useState } from 'react';

const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
  increaseQuantity: [],
  decreaseQuantity: [],
});

export default CartContext;
