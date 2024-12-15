import React from "react";
import { useNavigate } from "react-router-dom";

export default function TopRatedCard({ game }) {
  const { _id, image, title, release_date, rating, genre, price } = game;
  const navigate = useNavigate();
  const handleExploreDetails = (id) => {
    navigate(`/review/${id}`);
  };

  return (
    <div
      className="bg-gradient-to-b from-gray-200 to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-lg text-gray-800 shadow-lg transform  sm:hover:scale-105  transition-all duration-300 bg-text-500 dark:text-white"
    >
      <img
        src={image}
        alt={title}
        className="w-full h-56 mb-1 object-fill rounded-t-lg transform transition duration-300"
      />
      <div className="p-4">
        <h3 className="text-lg font-bold truncate">{title}</h3>
        <div className="flex flex-col gap-1">
          <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
            <span className="font-semibold">Rating :</span> {rating}
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            <span className="text-md font-semibold">Genre : </span>
            {genre}
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-300" >
            <span className="text-md font-semibold">Relase date : </span>
            {release_date}
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            <span className="text-md font-semibold">Price : </span>
            {price}
          </p>
        </div>

        <button
          onClick={() => handleExploreDetails(_id)}
          className="mt-4 w-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white py-2 px-4 rounded-lg hover:opacity-90 shadow-md transform transition-all duration-300"
        >
          Explore Details
        </button>
      </div>
    </div>
  );
}
