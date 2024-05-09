export default function SV_ResultsItem(gifs) {
    const categories =[]; // will be populated by server query from categories table
  return (
    <>
      <div className="searchResultItem">
        {gifs.map((gif) => {
          return (
            <div>
              <img key={gif.id} src={gif.images?.fixed_width.url} />
              <button>Favorite this!</button>
              <select>
                {categories.map((category)=>{
                    return(
                        <option value={category.id}>{category.name}</option>
                    )
                })}
              </select>
            </div>
          );
        })}
      </div>
    </>
  );
}
