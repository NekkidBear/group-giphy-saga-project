import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useSelector } from "react-redux";
function TrendingTest() {
  const dispatch = useDispatch();
  const giphys = useSelector((store) => store.GIPHYs);

  useEffect(() => {
    getTrendingGIPHYs();
  }, []);

  const getTrendingGIPHYs = () => {
    dispatch({ type: "LOAD_TRENDING" });
  };
  return (
    <>
      {giphys.map((gif) => {
        return <img key={gif.id} src={gif.images.original.url} />;
      })}
    </>
  );
}
