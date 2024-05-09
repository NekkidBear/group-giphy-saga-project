import SV_ResultsItem from "./SV_ResultsItem";
export default function SearchViewResults(gifs) {
  return (
    <div>
      <h2>Search Results</h2>
      {gifs.map((gif)=>{
        return (
            <div>
                <SV_ResultsItem gif />
            </div>
        )
      })}
    </div>
  );
}
