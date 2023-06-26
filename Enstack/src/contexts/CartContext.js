import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    // Check if the item is already in the cart
    const existingItem = cartItems.find(
      (cartItem) => cartItem.product_id === item.product_id
    );

    if (existingItem) {
      // Item already exists in the cart, update the quantity
      const updatedCartItems = cartItems.map((cartItem) => {
        if (cartItem.product_id === item.product_id) {
          return {
            ...cartItem,
            quantity: cartItem.quantity + 1, // Increment the quantity
          };
        }
        return cartItem;
      });

      setCartItems(updatedCartItems);
    } else {
      // Item is not in the cart, add it as a new item
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  };

  const addAllToCart = (items) => {
    const updatedCartItems = [...cartItems];

    items.forEach((item) => {
      const existingItem = updatedCartItems.find(
        (cartItem) => cartItem.product_id === item.product_id
      );

      if (existingItem) {
        // Item already exists in the cart, update the quantity
        existingItem.quantity += 1;
      } else {
        // Item is not in the cart, add it as a new item
        updatedCartItems.push({ ...item, quantity: 1 });
      }
    });

    setCartItems(updatedCartItems);
  };

  const removeFromCart = (itemId) => {
    // Remove the item from the cartItems array based on the itemId
    const updatedCartItems = cartItems.filter(
      (item) => item.product_id !== itemId
    );
    setCartItems(updatedCartItems);
  };

  const clearCart = () => {
    setCartItems([]); // Clear all items by setting an empty array
  };

  const incrementQuantity = (itemId) => {
    const updatedCart = cartItems.map((item) => {
      if (item.product_id === itemId) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    setCartItems(updatedCart);
  };

  const decrementQuantity = (itemId) => {
    const updatedCart = cartItems.map((item) => {
      if (item.product_id === itemId && item.quantity > 1) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    setCartItems(updatedCart);
  };

  const getTotalPrice = () => {
    let totalPrice = 0;

    cartItems.forEach((item) => {
      totalPrice += item.price * item.quantity;
    });

    return totalPrice;
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        decrementQuantity,
        incrementQuantity,
        getTotalPrice,
        clearCart,
        addAllToCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
