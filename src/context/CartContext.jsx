import { createContext, useContext, useReducer } from "react";

const CartContext = createContext();
const initialState = {};
const reducer = (state, action) => {
  console.log(action);
};
function CartProvider({ children }) {
  const [state, dispach] = useReducer(reducer, initialState);
  return (
    <CartContext.Provider value={{ state, dispach }}>
      {children}
    </CartContext.Provider>
  );
}
const useCart = () => {
  const { state, dispach } = useContext(CartContext);
  return [state, dispach];
};
export default CartProvider;
export { useCart };
