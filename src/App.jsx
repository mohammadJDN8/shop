import { Navigate, Route, Routes } from "react-router-dom";
import ProductsPage from "./pages/ProductsPage";
import CheckOutPage from "./pages/CheckOutPage";
import PageNotFound from "./pages/PageNotFound";
import DetailsPage from "./pages/DetailsPage";
import ProductsProvider from "./context/ProductContext";
import CartProvider from "./context/CartContext";

function App() {
  return (
    <>
      <CartProvider>
        <ProductsProvider>
          <Routes>
            <Route index element={<Navigate to="/products" replace />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/products/:id" element={<DetailsPage />} />
            <Route path="/checkout" element={<CheckOutPage />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </ProductsProvider>
      </CartProvider>
    </>
  );
}

export default App;
