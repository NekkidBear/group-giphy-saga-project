import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

export default function SV_ResultsItem(gif) {
  const categories = useSelector(store=>store.categories) // will be populated by server query from categories table
  // console.log('GIF is ', gif);
  let favStatus = false;
  let favoriteItem = {img_url: "", category_id: ""}
  let categorySelected = "";
  const dispatch = useDispatch();

  const getCategories=()=>{
    dispatch ({
      type: "GET_CATEGORIES"
    })
  };

useEffect(()=>{
  getCategories();
}, []);

  let img_url = gif?.images?.fixed_width?.url;

  console.log(img_url)
  const markFav = (e) => {
    favStatus = !favStatus
    console.log("marking favorite");
    if (favStatus === true) {
      console.log('Added to Favorites')
      favoriteItem.img_url = img_url;
      console.log(favoriteItem)
    }
  };

  const setCategory = (e) => {
    categorySelected = e.target.value
    favoriteItem.category_id = categorySelected
    console.log("chosen category is", categorySelected)
    console.log (favoriteItem)
  };

  const publishFavoriteToServer = () =>{
    console.log(favoriteItem);
    dispatch({
      type: 'ADD_TO_FAVORITES',
      payload: {...favoriteItem}
    }).then(
      dispatch({
        type: 'FETCH_GIFS'
      })
    )
  }
  if(!gif){
    return <div></div>
  }

  return (
    
    <div className="searchResultItem">
      <div>
      {img_url ? (
        <img
          key={gif.id}
          src={img_url}
          alt={gif?.alt_text || "GIF image based on search terms"}
        />):(<div>Loading GIF...</div>)}
        <button onClick={markFav}>Favorite this!</button>
        <select onChange={(e) => setCategory(e)}>
          {categories.map((category) => {
            return (
              <option key={category.id}  value={category.id}>
                {category.name}
              </option>
            );
          })}
        </select>
        <button onClick={publishFavoriteToServer}>Submit Favorite</button>
      </div>
    </div>
  );
}
