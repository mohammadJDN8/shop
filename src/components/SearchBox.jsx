import { BiSearchAlt2 } from "react-icons/bi";
import { createQueryObject } from "../helper/Helper";

function SearchBox({search,setQuery,setSearch}) {
  const searchHandler = () => {
    setQuery((query) => createQueryObject(query, { search }));
  };
  return (
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
  )
}

export default SearchBox
