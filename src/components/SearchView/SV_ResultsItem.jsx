import { useDispatch, useSelector } from "react-redux";
export default function SV_ResultsItem(gif) {
  const categories = useSelector(store=>store.categories) // will be populated by server query from categories table
  // console.log('GIF is ', gif);
  let favStatus = false;
  let favoriteItem = {img_URL: "", category_id: ""}
  let category = "";

  let img_URL = gif.images.fixed_width.url;
  const markFav = (e) => {
    favStatus = !favStatus
    console.log("marking favorite");
    if (favStatus === true) {
      console.log('Added to Favorites')
      favoriteItem.img_URL = img_URL;
      console.log(favoriteItem)
    }
  };

  const setCategory = (e) => {
    category = e.target.category_id
    favoriteItem.category_id = category
  };

  const createFavorite = () =>{
    //todo
  }

  return (
    <div className="searchResultItem">
      <div>
        <img
          key={gif.id}
          src={gif.images?.fixed_width?.url}
          alt={gif?.alt_text || "GIF image based on search terms"}
        />
        <button onClick={markFav}>Favorite this!</button>
        <select>
          {categories.map((category) => {
            console.log(category)
            return (
              <option onClick={(e) => setCategory} value={category.id}>
                {category.name}
              </option>
            );
          })}
        </select>
        <button onClick={createFavorite}>Update favorites status</button>
      </div>
    </div>
  );
}
