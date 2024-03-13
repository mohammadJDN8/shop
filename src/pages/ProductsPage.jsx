import React, { useState } from "react";
import { useProducts } from "../context/ProductContext";
import styles from "./ProductsPage.module.css";
import Card from "../components/Card";
import Loader from "../components/Loader";
import { BiSearchAlt2 } from "react-icons/bi";

function ProductsPage() {
  const products = useProducts();
  const [search, setSearch] = useState("");
  const searchHandler = () => {
    console.log("search ");
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
        <div>SideBar</div>
      </div>
    </>
  );
}

export default ProductsPage;
