import React, { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../AuthProvider";
import Loading from "../component/Loading";
import Swal from "sweetalert2";
export default function ReviewDetails() {
  const details = useLoaderData() || [];
  const { user, loading, dataLoading, setDataLoading } =
    useContext(AuthContext);
  const [review, setReview] = useState({});

  useEffect(() => {
    if (details && details.length > 0) {
      setReview(details[0]);
      setDataLoading(false);
    }
  }, [details]);

  const reviewData = {
    title: review?.title,
    reviewrEmail: review?.reviewrEmail || "No Email",
    reviewrName: review?.reviewrName || "No Name",
    userEmail: user?.email || "No Email",
    userName: user?.displayName || "No Name",
    dataId: review?._id || "N/A",
    genre: review?.genre || "Unknown",
    rating: review?.rating || "Unrated",
    price: review?.price || "Unpriced",
    platform: review?.platform || "UnKnown",
  };

  const handleAddToWatchList = async () => {
    fetch(
      `https://game-sphere-server.vercel.app/addWishlist?id=${review?._id}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(reviewData),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        Swal.fire({
          title: "Successfully Added to watchList",
          text: " ",
          icon: "success",
        });
      })
      .catch((err) => {
        console.error(err);
      });
  };

  if (loading || dataLoading) {
    return <Loading />;
  }

  return (
    <div className="review-details w-full max-w-xl mx-auto my-20 px-3">
      <div className="card bg-base-100 shadow-xl">
        <figure>
          <img
            src={review?.image}
            alt={review?.title}
            className="w-full h-72 object-fill bg-gray-100"
          />
        </figure>
        <div className="card-body overflow-hidden mr-2">
          <h2 className="card-title">{review?.title || "No Title"}</h2>
          <p className="text-xs sm:text-sm">
            {review?.description || "No Description Available"}
          </p>

          <div className="grid grid-cols-2 mt-5">
            <p className="">
              <span className="text-sm sm:text-md font-semibold">Rating :</span>{" "}
              {review?.rating || "Unrated"}
            </p>
            <p>
              <span className="font-semibold text-sm sm:text-md ">Genre :</span>{" "}
              {review?.genre || "Unknown"}
            </p>
          </div>

          <div className="grid grid-cols-2 ">
            <p>
              <span className="font-semibold text-sm sm:text-md ">
                Release Year:
              </span>{" "}
              {review?.release_date || "N/A"}
            </p>
            <p>
              <span className="font-semibold text-sm sm:text-md ">
                Platform :
              </span>{" "}
              {review?.platform || "N/A"}
            </p>
          </div>

          <div className="grid grid-cols-2 ">
            <p>
              <span className="font-semibold text-sm sm:text-md ">Price :</span>{" "}
              {review?.price || "N/A"}
            </p>
          </div>

          <hr className="mt-5 mb-2"></hr>

          <div className="flex flex-col gap-2">
            <p className="">
              <span className="font-semibold text-sm sm:text-md ">
                Reviewer Name :
              </span>{" "}
              {review?.reviewrName || "N/A"}
            </p>
            <p className="">
              <span className="font-semibold text-sm sm:text-md ">
                Reviewer Email :
              </span>{" "}
              {review?.reviewrEmail || "N/A"}
            </p>
          </div>

          <button
            className="btn btn-primary mt-4"
            onClick={handleAddToWatchList}
          >
            Add to WatchList
          </button>
        </div>
      </div>
    </div>
  );
}
