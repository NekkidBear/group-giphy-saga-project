import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

function TrendingTest() {
  const dispatch = useDispatch();
  const giphys = useSelector((store) => store.GIPHYs);

  useEffect(() => {
    getTrendingGIPHYs();
  }, []);

  const getTrendingGIPHYs = () => {
    axios({
      method: "GET",
      url: "/api/giphy",
    }).then(dispatch({ type: "SET_GIPHYs" }))
    .catch((error)=>{
      console.log("error", error)
    });
  };
  return (
    <>
      {giphys.map((gif) => {
        return <img key={gif.id} src={gif.images.original.url} />;
      })}
    </>
  );
}
