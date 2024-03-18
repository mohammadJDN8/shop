import { FaListUl } from "react-icons/fa";
import { createQueryObject } from "../helper/Helper";

function SideBar({ setQuery }) {
  const categoryHandler = (event) => {
    const { tagName } = event.target;
    const category = event.target.innerText.toLocaleLowerCase();
    if (tagName !== "LI") return;
    setQuery((query) => createQueryObject(query, { category }));
  };
  return (
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
  );
}

export default SideBar;
