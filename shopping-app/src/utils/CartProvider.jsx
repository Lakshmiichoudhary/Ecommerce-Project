import { useState } from "react";
import CartContext from "./CartContext";

const CartProvider = ({children}) => {
    const [items, setItems] = useState([]);
    const [totalAmount, setTotalAmount] = useState(0);
  
    const addItemHandler = (item) => {
      const existingItem = items.find((existing) => existing.id === item.id);

    if (existingItem) {
      setItems((prevItems) =>
        prevItems.map((prevItem) =>
          prevItem.id === item.id
            ? { ...prevItem, quantity: prevItem.quantity + 1 }
            : prevItem
        )
      );
    } else {
      setItems((prevItems) => [...prevItems, { ...item, quantity: 1 }]);
    }

    setTotalAmount((prevAmount) => prevAmount + item.price);
  };

  const removeItemHandler = (id) => {
    const itemToRemove = items.find((item) => item.id === id);
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
    setTotalAmount((prevAmount) => prevAmount - itemToRemove.price * itemToRemove.quantity);
  };

  const increaseQuantity = (id) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
    const item = items.find((item) => item.id === id);
    setTotalAmount((prevAmount) => prevAmount + item.price);
  };

  const decreaseQuantity = (id) => {
    setItems((prevItems) =>
    prevItems.map((item) =>
      item.id === id && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    )
  );

    const item = items.find((item) => item.id === id);
    if (item && item.quantity > 1) {
      setTotalAmount((prevAmount) => prevAmount - item.price);
    }
  };
    const context = {
      items: items,
      totalAmount: totalAmount,
      addItem: addItemHandler,
      removeItem: removeItemHandler,
      increaseQuantity: increaseQuantity,
      decreaseQuantity: decreaseQuantity,
    };
  
    return (
      <CartContext.Provider value={context}>
        {children}
      </CartContext.Provider>
    );
  };
  export default CartProvider