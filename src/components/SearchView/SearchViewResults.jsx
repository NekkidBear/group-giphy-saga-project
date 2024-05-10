import SV_ResultsItem from "./SV_ResultsItem";
import { useSelector } from "react-redux";

function SearchViewResults() {
  const GIPHYs = useSelector(store=>store.GIPHYs);
  // console.log("in SearchViewResults")
  // console.log('GIPHYs is', GIPHYs)
  return (
    <div>
      <h3>Search Results</h3>
      {GIPHYs.map((gif)=>{
        {/* console.log("GIF item is: ", gif) */}
        return (
            <div key={gif.id}>
                <SV_ResultsItem {...gif} />
            </div>
        )
      })}
    </div>
  );
}

export default SearchViewResults;