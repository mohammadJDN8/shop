import React from "react";
import { Link } from "react-router-dom";
import { CgDetailsMore } from "react-icons/cg";
import { IoBagCheckOutline } from "react-icons/io5";
import { shortenText } from "../helper/Helper";
import styles from "./Card.module.css";
import { useCart } from "../context/CartContext";

function Card({ data }) {
  const [state, dispatch] = useCart();
  console.log(state);
  const clickHandler = () => {
    dispatch({ type: "ADD_ITEM", payload: data });
  };
  const { id, image, title, price } = data;
  return (
    <div className={styles.card}>
      <img src={image} alt={title} />
      <h3>{shortenText(title)}</h3>
      <p>{price} $</p>
      <div className={styles.actions}>
        <Link to={`/products/${id}`}>
          <CgDetailsMore />
        </Link>
        <div>
          <button onClick={clickHandler}>
            <IoBagCheckOutline />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
