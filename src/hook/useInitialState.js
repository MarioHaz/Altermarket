import { useState } from "react";

const initialState = {
  cart: [],
};

const useInitalState = () => {
  const [state, setState] = useState(initialState);
  const addToCart = (payload) => {
    setState({
      //lo que este en el estado mantenlo
      ...state,
      cart: [...state.cart, payload], // y agrega un producto
    });
  };

  return {
    state,
    addToCart,
  }; // devuelve el estado y la funcion
};

export default useInitalState;
