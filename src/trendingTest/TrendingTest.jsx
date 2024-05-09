import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

function TrendingTest() {
  const dispatch = useDispatch();
  const giphys = useSelector((store) => store.GIPHYs);

  const getTrendingGIPHYs = () => {
    dispatch({
      type: "FETCH_TRENDING",
    });

    useEffect(() => {
      getTrendingGIPHYs();
    }, []);

    return (
      <>
        {giphys.map((gif) => {
          return <img key={gif.id} src={gif.images.original.url} />;
        })}
      </>
    );
  };
}

export default TrendingTest;
