import { createContext, useContext, useReducer } from "react";
import { sumProducts } from "../helper/Helper";

const CartContext = createContext();
const initialState = {
  selectedItems: [],
  itemsCounter: 0,
  total: 0,
  checkOut: false,
};
const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_ITEM":
      if (!state.selectedItems.find((item) => item.id == action.payload.id)) {
        state.selectedItems.push({ ...action.payload, quantity: 1 });
      }
      return {
        ...state,
        ...sumProducts(state.selectedItems),
        checkOut: false,
      };
    default:
      throw new Error("Invalid Action!");
  }
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
