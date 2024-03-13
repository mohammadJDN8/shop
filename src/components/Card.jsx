import React from "react";
import { Link } from "react-router-dom";
import { CgDetailsMore } from "react-icons/cg";
import { IoBagCheckOutline } from "react-icons/io5";


function Card({ data }) {
  const { id, image, title, price } = data;
  return (
    <div>
      <img src={image} alt={title} style={{ width: "150px" }} />
      <h3>{title}</h3>
      <p>{price} $</p>
      <div>
        <Link to={`/products/${id}`}>
          <CgDetailsMore />
        </Link>
        <button>
          <IoBagCheckOutline />
        </button>
      </div>
    </div>
  );
}

export default Card;
