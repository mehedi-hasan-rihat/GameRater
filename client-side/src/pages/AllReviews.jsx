import React, { useContext, useEffect, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider";
import Loading from "../component/Loading";
export default function AllReviews() {
  const { loading, dataLoading, setDataLoading } = useContext(AuthContext);
  console.log(loading, dataLoading);
  const reviewsData = useLoaderData();
  const [reviews, setReviews] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setReviews(reviewsData);
    setDataLoading(false)
  }, []);
  
  if (loading || dataLoading) {
    return <Loading/>;
  }
 
  return (
    <div className="all-reviews relative px-3 mx-auto container my-5 md:my-12">
      <h1 className="text-3xl font-semibold sm:font-bold text-center my-8">All Reviews</h1>

      <div className="flex px-3 gap-2 absolute right-0 -top-5 my-16 ">
        <div
          onChange={(e) => {
            fetch(`https://game-sphere-server.vercel.app/sort?${e.target.value}`)
              .then((res) => res.json())
              .then((data) => setReviews(data))
              .catch((err) => console.log(err));
          }}
          className="form-control w-full max-w-[250px] my-4 relative "
        >
          <select
            id="genres"
            name="genres"
            className="select select-bordered w-full"
            defaultValue=""
            required
          >
            <option disabled value="">
              Sort by Year or Rating
            </option>
            <option value="rating=true&sortOrder=desc">
              Descending order by rating
            </option>
            <option value="year=true&sortOrder=desc">
              Descending order by Year
            </option>
          </select>
        </div>

        <div
          onChange={(e) => {
            fetch(`https://game-sphere-server.vercel.app/filter?genre=${e.target.value}`)
              .then((res) => res.json())
              .then((data) => setReviews(data))
              .catch((err) => console.log(err));
          }}
          className="form-control w-full max-w-[250px] my-4 relative "
        >
          <select
            id="genres"
            name="genres"
            className="select select-bordered w-full"
            defaultValue=""
            required
          >
            <option disabled value="">
              Sort by Genre Name
            </option>
            <option value="Action">Action</option>
            <option value="RPG">RPG</option>

            <option value="Adventure">Adventure</option>
          </select>
        </div>
      </div>


      {reviews.length < 1 ? <div className="h-[calc(100vh-500px)] flex items-center justify-center bg-gray-100 my-28 rounded-lg">No reviews found!</div>: 
      <div className="grid md:grid-cols-2 mt-24 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {reviews.map((review) => (
          <div
            key={review._id}
            className="card bg-base-100 shadow-xl"
           
          >
            <div className="bg-gradient-to-b from-white to-gray-50 rounded-lg text-gray-800 shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300">
              <img
                src={review.image}
                alt={review.title}
                className="w-full h-56 object-fill rounded-t-lg transform transition duration-300 hover:scale-110"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold  truncate">{review.title}</h3>
                <div className="flex flex-col gap-1">
                  <p className="text-sm text-gray-600 mt-1">
                    <span className="font-semibold">Rating :</span>{" "}
                    {review.rating}
                  </p>
                  <p className="text-sm text-gray-600">
                    <span className="text-md font-semibold">Genre : </span>
                    {review.genre}
                  </p>
                
                  <p className="text-sm text-gray-600">
                    <span className="text-md font-semibold">Release Year : </span>
                    {review.release_date}
                  </p>
                </div>

                <Link
                  to={`/review/${review._id}`}
                  className="btn btn-primary mt-4"
                >
                  Explore Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>}
    </div>
  );
}
