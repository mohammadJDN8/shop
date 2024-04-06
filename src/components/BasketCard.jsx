import React from "react";
import { shortenText } from "../helper/Helper";
import { MdDelete } from "react-icons/md";
import styles from "../pages/BasketCard.module.css";

function BasketCard({ data, clickHandler }) {
  const { image, title, quantity } = data;
  return (
    
      <div className={styles.card}>
      <div>
        <img src={image} alt={title} />
        
      </div>
      <div>
      <p>{shortenText(title)}</p>
      </div>
      <div className={styles.actions}>
        {quantity == 1 && (
          <button onClick={() => clickHandler("REMOVE_ITEM", data)}>
            {" "}
            <MdDelete />
          </button>
        )}
        {quantity > 1 && (
          <button onClick={() => clickHandler("DECREASE", data)}>-</button>
          )}
        <span>{quantity}</span>
        <button onClick={() => clickHandler("INCREASE", data)}>+</button>
      </div>
          </div>
    
  );
}

export default BasketCard;
