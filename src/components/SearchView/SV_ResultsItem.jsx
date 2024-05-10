export default function SV_ResultsItem(gif) {
  const categories = []; // will be populated by server query from categories table
  console.log('GIF is ', gif);
  return (
      <div className="searchResultItem">
        <div>
          <img key={gif.id} src={gif.images?.fixed_width?.url} alt={gif?.alt_text || "GIF image based on search terms"}/>
          <button>Favorite this!</button>
          <select>
            {categories.map((category) => {
              return <option value={category.id}>{category.name}</option>;
            })}
          </select>
        </div>
      </div>
  );
}
