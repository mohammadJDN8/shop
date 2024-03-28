import React from "react";
import { Link } from "react-router-dom";
import { CgDetailsMore } from "react-icons/cg";
import { IoBagCheckOutline } from "react-icons/io5";
import { shortenText } from "../helper/Helper";
import styles from "./Card.module.css";
import { useCart } from "../context/CartContext";
import { MdDeleteOutline } from "react-icons/md";

function Card({ data }) {
  const [state, dispatch] = useCart();
  console.log(state);
  const clickHandler = (type) => {
    dispatch({ type, payload: data });
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
          <button onClick={() => clickHandler("ADD_ITEM")}>
            <IoBagCheckOutline />
          </button>
          <button onClick={() => clickHandler("REMOVE_ITEM")}>
            <MdDeleteOutline />
          </button>
          <button onClick={() => clickHandler("INCREASE")}>+</button>
          <button onClick={() => clickHandler("DECREASE")}>-</button>
        </div>
      </div>
    </div>
  );
}

export default Card;
