import { useSelector } from "react-redux";

export default function SV_ResultsItem(gif) {
  const categories = []; // will be populated by server query from categories table
  console.log('GIF is ', gif);
 
  const markFav = (e)=>{
    //todo
  }
 
  const setCategory = (e)=> {
    //todo
  }
  return (
      <div className="searchResultItem">
        <div>
          <img key={gif.id} src={gif.images?.fixed_width?.url} alt={gif?.alt_text || "GIF image based on search terms"}/>
          <button onClick={markFav}>Favorite this!</button>
          <select>
            {categories.map((category) => {
              return <option onClick={(e) => setCategory} value={category.id}>{category.name}</option>;
            })}
          </select>
        </div>
      </div>
  );
}
