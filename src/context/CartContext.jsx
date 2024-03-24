import { createContext, useReducer } from "react";

const CartContext = createContext();
const initialState = {};
const reducer = () => {};
function CartProvider({ children }) {
  const [state, dispach] = useReducer(reducer, initialState);
  return <CartContext.Provider value={state}>{children}</CartContext.Provider>;
}

export default CartProvider;
