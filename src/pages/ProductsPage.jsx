import React, { useState } from "react";
import { useProducts } from "../context/ProductContext";
import styles from "./ProductsPage.module.css";
import { FaListUl } from "react-icons/fa";
import Card from "../components/Card";
import Loader from "../components/Loader";
import { BiSearchAlt2 } from "react-icons/bi";

function ProductsPage() {
  const products = useProducts();
  const [search, setSearch] = useState("");
  const searchHandler = () => {
    console.log("search ");
  };
  const categoryHandler = (event) => {
    const { tagName } = event.target;
    const category = event.target.innerText.toLocaleLowerCase();
    if (tagName !== "LI") return;
    console.log(category);
  };
  return (
    <>
      <div>
        <input
          type="text"
          placeholder="Search ..."
          value={search}
          onChange={(e) => setSearch(e.target.value.toLocaleLowerCase().trim())}
        />
        <button onClick={searchHandler}>
          <BiSearchAlt2 />
        </button>
      </div>
      <div className={styles.container}>
        <div className={styles.products}>
          {!products.length && <Loader />}
          {products.map((p) => (
            <Card key={p.id} data={p} />
          ))}
        </div>
        <div>
          <div>
            <FaListUl />
            <p>Cafegories</p>
            <ul onClick={categoryHandler}>
              <li>All</li>
              <li>Men's clothing</li>
              <li>jewelery</li>
              <li>electronics</li>
              <li>Women's clothing</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductsPage;
