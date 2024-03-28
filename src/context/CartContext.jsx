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
    case "REMOVE_ITEM":
      const newSelectedItem = state.selectedItems.filter(
        (item) => item.id !== action.payload.id
      );
      return {
        ...state,
        selectedItems: [...newSelectedItem],
        ...sumProducts(newSelectedItem),
      };
    case "INCREASE":
      const increseIndex = state.selectedItems.findIndex(
        (item) => item.id == action.payload.id
      );
      state.selectedItems[increseIndex].quantity++;
      return {
        ...state,

        ...sumProducts(state.selectedItems),
      };
    case "DECREASE":
      const decreseIndex = state.selectedItems.findIndex(
        (item) => item.id == action.payload.id
      );
      state.selectedItems[decreseIndex].quantity--;
      return {
        ...state,
        ...sumProducts(state.selectedItems),
      };
    case "CHECKOUT":
      return {
        selectedItems: [],
        itemsCounter: 0,
        total: 0,
        checkOut: true,
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
