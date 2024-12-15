import React, { useContext, useEffect, useState } from "react";
import TopRatedCard from "./topRatedCard";
import { AuthContext } from "../../../AuthProvider";
import Loading from "../../Loading";
export default function TopRated() {
  const [topRatedGame, setTopRatedGame] = useState([]);
  const { loading, dataLoading, setDataLoading } = useContext(AuthContext);

  useEffect(() => {
    fetch("https://game-sphere-server.vercel.app/topRated")
      .then((res) => res.json())
      .then((data) => {
        setTopRatedGame(data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => setDataLoading(false));
  }, []);

  if (loading || dataLoading) {
    return <Loading />;
  }

  return (
    <div className="container mt-14 md:my-20 py-5 px-3 mx-auto">
      <div className="text-md font-medium md:text-xl lg:text-2xl text-black dark:text-white md:font-semibold text-center my-5 md:my-10 titleForSection">
        EXPLORE THE GOD OF TOPRATED GAME
      </div>
      {topRatedGame.length < 1 ? (
        <div className="h-64 flex items-center justify-center bg-gray-100 my-12 rounded-lg">
          No reviews found!
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {topRatedGame.map((game) => {
            return <TopRatedCard key={game._id} game={game} />;
          })}
        </div>
      )}
    </div>
  );
}
