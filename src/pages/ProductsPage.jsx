import React, { useEffect, useState } from "react";
import { useProducts } from "../context/ProductContext";
import styles from "./ProductsPage.module.css";
import { FaListUl } from "react-icons/fa";
import Card from "../components/Card";
import Loader from "../components/Loader";
import { BiSearchAlt2 } from "react-icons/bi";
import { filterProducts, searchProducts } from "../helper/Helper";

function ProductsPage() {
  const products = useProducts();
  const [displayed, setDisplayed] = useState([]);
  useEffect(() => {
    setDisplayed(products);
  }, [products]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState({});
  useEffect(() => {
    let finalProducts = searchProducts(products, query.search);
    finalProducts = filterProducts(finalProducts, query.category);
    setDisplayed(finalProducts);
  }, [query]);
  const searchHandler = () => {
    setQuery((query) => ({ ...query, search }));
  };
  const categoryHandler = (event) => {
    const { tagName } = event.target;
    const category = event.target.innerText.toLocaleLowerCase();
    if (tagName !== "LI") return;
    setQuery((query) => ({ ...query, category }));
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
          {!displayed.length && <Loader />}
          {displayed.map((p) => (
            <Card key={p.id} data={p} />
          ))}
        </div>
        <div>
          <div>
            <FaListUl />
            <p>Categories</p>
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
