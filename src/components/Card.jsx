import React from "react";
import { Link } from "react-router-dom";
import { CgDetailsMore } from "react-icons/cg";
import { IoBagCheckOutline } from "react-icons/io5";
import { shortenText } from "../helper/Helper";
import styles from "./Card.module.css";

function Card({ data }) {
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
          <button>
            <IoBagCheckOutline />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
