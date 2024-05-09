import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"

function Favorites(){

const dispatch = useDispatch()
const favoriteGIPHYs = useSelector(store => store.GIPHYs)

useEffect(() => {
    fetchFavorites()
}, [])

    const fetchFavorites = () => {
        dispatch({
            type: 'FETCH_FAVS'
        })

    }

    return (
        <ul>
            {favoriteGIPHYs.map((gif) => {
                return(
                    <img key={gif.id} src={gif.img_url} />
                )
            })}            
        </ul>

    )
    //header
    //sub-component 
    //drop-down


}



export default Favorites