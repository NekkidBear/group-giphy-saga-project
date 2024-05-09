import { useDispatch } from "react-redux"
import { useState } from "react";

export default function SearchView(){
    const dispatch = useDispatch();
    const [searchTerms, setSearchTerms] = useState('')
    const searchGiphy = () =>{
        e.preventDefault();
        dispatch({
            type: "FETCH_GIFS",
            payload: searchTerms
        })
    }
    const inputHandler=(e)=>{
        e.preventDefault
        setSearchTerms(e.target.value);
    }

    return(
        <div>
            <form onSubmit={searchGiphy} className="searchForm">
                <input onChange={inputHandler}
                    type="text"
                    placeholder="Search for "
                    />
                    <button>Show me the GIFS!</button>
            </form>
        </div>
    )
    
}