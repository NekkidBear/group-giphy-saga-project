import SV_ResultsItem from "./SV_ResultsItem";
import { useSelector } from "react-redux";

export default function SearchViewResults() {
  const GIPHYs = useSelector(store=>store.GIPHYs);
  console.log('GIPHYs is', GIPHYs)
  return (
    <div>
      <h2>Search Results</h2>
      {GIPHYs.map((gif)=>{
        return (
            <div>
                <SV_ResultsItem gif={gif} />
            </div>
        )
      })}
    </div>
  );
}
