import { useDispatch } from "react-redux";
import { useState } from "react";

export default function SearchViewForm() {
  const dispatch = useDispatch();

  const [searchTerms, setSearchTerms] = useState("");
  console.log("search terms = ", searchTerms)
  const searchGiphy = (e) => {
    e.preventDefault();
    dispatch({
      type: "FETCH_GIFS",
      payload: searchTerms,
    });
  };

  const inputHandler = (e) => {
    setSearchTerms(e.target.value);
  };
  console.log("search terms", searchTerms)
  return (
    <div>
      <form onSubmit={searchGiphy} className="searchForm">
      <label htmlFor="searchInput">Search Terms </label>
        <input id="searchInput" onChange={inputHandler} type="text" placeholder="Search for " />
        <button type="submit">Show me the GIFS!</button>
      </form>
    </div>
  );
}
