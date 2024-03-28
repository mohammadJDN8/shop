import React from "react";
import { Link } from "react-router-dom";
import { MdShoppingCartCheckout } from "react-icons/md";
import { useCart } from "../context/CartContext";
import styles from '../layout/Layout.module.css'

function Layout({ children }) {
  const [state] = useCart();
  return (
    <>
      <header className={styles.header}>
        <Link to="/products">JDN Shop</Link>
        <Link to="/checkout">
          <div>
            <MdShoppingCartCheckout />
            {!!state.itemsCounter && <span>{state.itemsCounter}</span>}
          </div>
        </Link>
      </header>
      {children}
      <footer className={styles.footer}>
        <p>Developed by MohammadJDN8 With ❤️ </p>
      </footer>
    </>
  );
}

export default Layout;
