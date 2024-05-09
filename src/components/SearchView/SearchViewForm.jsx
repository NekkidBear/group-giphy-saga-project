import { useDispatch } from "react-redux";
import { useState } from "react";

export default function SearchViewForm() {
  const dispatch = useDispatch();

  const [searchTerms, setSearchTerms] = useState("");
  const searchGiphy = (e) => {
    e.preventDefault();
    dispatch({
      type: "FETCH_GIFS",
      payload: searchTerms.replace(' ', '+'),
    });
  };

  const inputHandler = (e) => {
    setSearchTerms(e.target.value);
  };

  return (
    <div>
      <form onSubmit={searchGiphy} className="searchForm">
        <input onChange={inputHandler} type="text" placeholder="Search for " />
        <button type="submit">Show me the GIFS!</button>
      </form>
    </div>
  );
}
