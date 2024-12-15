import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider";
import { MdDeleteForever } from "react-icons/md";
import { GrDocumentUpdate } from "react-icons/gr";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import Loading from "../Loading";
export default function MyReviews() {
  const [reviews, setReviews] = useState([]);
  const { loading, dataLoading, setDataLoading, user } =
    useContext(AuthContext);
  console.log(loading, dataLoading);
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure to Delete?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://game-sphere-server.vercel.app/review/${id}`, {
          method: "delete",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            Swal.fire({
              title: "Deleted!",
              text: "Your Review has been deleted.",
              icon: "success",
            });
            const newData = reviews.filter((review) => review._id != id);
            console.log(newData);
            setReviews(newData);
          })
          .catch((err) => console.log(err));
      }
    });

   
  };

  useEffect(() => {
    if (user) {
      console.log(user.email);
      fetch(
        `https://game-sphere-server.vercel.app/myReviews?email=${user.email}`
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setReviews(data);
        })
        .catch((err) => {
          console.error(err);
        })
        .finally(() => setDataLoading(false));
    }
  }, [user]);

  if (loading || dataLoading) {
    return <Loading />;
  }

  return (
    <div className="my-reviews">
      <h1 className="text-2xl sm:text-3xl font-semibold text-center my-8 text-gray-800">
        My Reviews
      </h1>

     

      {reviews.length < 1 ? (
        <div className="min-h-[calc(100vh-500px)] flex items-center justify-center bg-gray-100 my-28 mx-auto container rounded-lg">
          No reviews found!
        </div>
      ) : (
        <div className="overflow-x-auto px-1 rounded-xl text-sm sm:text-md min-h-[calc(100vh-500px)]">
          <table className="table-auto w-full border-collapse border border-gray-300">
            <thead className="bg-blue-500 text-white">
              <tr>
                <th className="p-4">#</th>
                <th className="p-4 text-left">Title</th>
                <th className="p-4">Rating</th>
                <th className="p-4">Genre</th>
                <th className="p-4">Review Year</th>
                <th className="p-4">Action</th>
              </tr>
            </thead>
            <tbody>
              {reviews.map((review, index) => (
                <tr
                  key={review._id}
                  className="even:bg-gray-100 hover:bg-gray-200 transition-colors"
                >
                  <td className="p-4 text-center">{index + 1}</td>
                  <td className="p-4">{review.title}</td>
                  <td className="p-4 text-center">{review.rating}</td>
                  <td className="p-4 text-center">{review.genre}</td>
                  <td className="p-4 text-center">{review.release_date}</td>
                  <td className="p-4 text-center flex gap-5 items-center justify-center">
                    <Link
                      to={`/updateReview/${review._id}`}
                      className="text-lg font-extrabold  hover:bg-white/50 p-3 rounded-full"
                    >
                      <GrDocumentUpdate />
                    </Link>
                    <p
                      onClick={() => {
                        handleDelete(review._id);
                      }}
                      className="text-2xl font-extrabold  hover:bg-white/50 p-2 rounded-full"
                    >
                      <MdDeleteForever />
                    </p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
