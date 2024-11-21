'use client';

import { createContext, useState, useContext } from 'react';

const AppContext = createContext(undefined);

export const AppContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [userCookies, setUserCookies] = useState([]);

  console.log(userCookies)


  const cartLength = cart.length

  const handleAddToCart = (name, price, image, id, quantity) =>{
    const product = {
      name,
      price,
      image,
      id,
      quantity,
    };
    const existingProduct = cart.find((item) => item.id === id)
    setCart([...cart, product]);
    if (existingProduct){
      existingProduct.quantity += quantity;
      return setCart([...cart])
    }else{
        setCart([...cart, product])
    }
  
  };

  const handleRemoveProduct = (id) =>{
    const restProducts = cart.filter (product => product.id !== id)
    setCart(restProducts)
  }

  const cartTotal = () => cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const discountPercentage = 0.1;
  const subtotal = cartTotal(); 
  const discountAmount = subtotal * discountPercentage; 
  const totalWithDiscount = subtotal-discountAmount;


  

  return (
    <AppContext.Provider
      value={{
        cart,
        setCart,
        cartLength,
        handleAddToCart,
        cartTotal,
        handleRemoveProduct,
        subtotal, 
        discountAmount,
        totalWithDiscount,
        userCookies,
        setUserCookies
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error(`useAppContext tiene que ser usado dentro del provider`);
  }
  return context;
};

export default AppContext;
