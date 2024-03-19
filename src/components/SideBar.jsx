import { FaListUl } from "react-icons/fa";
import { createQueryObject } from "../helper/Helper";
import styles from "./SideBar.module.css";

function SideBar({ query, setQuery }) {
  const categories = [
    { id: 1, type: "All" },
    { id: 2, type: "jewelery" },
    { id: 3, type: "Men's clothing" },
    { id: 4, type: "Electronics" },
    { id: 5, type: "Women's clothing" },
  ];
  const categoryHandler = (event) => {
    const { tagName } = event.target;
    const category = event.target.innerText.toLocaleLowerCase();
    if (tagName !== "LI") return;
    setQuery((query) => createQueryObject(query, { category }));
  };
  return (
    <div className={styles.sidebar}>
      <div>
        <FaListUl />
        <p>Categories</p>
      </div>
      <ul onClick={categoryHandler}>
        {categories.map((item) => (
          <li key={item.id} className={item.type.toLocaleLowerCase() ==query.category ? styles.selected : null} >{item.type}</li>
        ))}
      </ul>
    </div>
  );
}

export default SideBar;
