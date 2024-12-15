import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FcGoogle } from "react-icons/fc";
import Swal from "sweetalert2";

export default function SignIn() {
  const navigate = useNavigate();
  const [error, setError] = useState(false);
  const { createUser, profileUpdate, logInWithGoogle } = useContext(AuthContext);

  useEffect(()=>{
    if(error){
      toast.error("Password must have an Uppercase, Lowercase letter & at least 6 character");
      setError(false)
   }
  },[error])
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo_url = form.photo_url.value;
    const email = form.email.value;
    const password = form.password.value;

    const validPass = (password) => {
      const regex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
      return regex.test(password);
    };
    const validPassCheak = validPass(password);

    if (!validPassCheak) {
      setError(true);
      return;
    } else {
      setError(false);
    }

    createUser(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        Swal.fire({
          title: "Successfully SignUp",
                  text: " ",
                  icon: "success"
        });
        profileUpdate(name, photo_url).catch((error) => {
          console.log(error);
        });
        navigate(location.state ? location.state.location : "/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="max-w-xl mx-auto bg-gray-100/50 my-10 rounded-lg">
      <form className="card-body" onSubmit={handleSubmit}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            placeholder="name"
            name="name"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo_url</span>
          </label>
          <input
            type="url"
            name="photo_url"
            placeholder="photo_url"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            name="email"
            placeholder="email"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            name="password"
            placeholder="password"
            className="input input-bordered"
            required
          />
          <label className="label"></label>
        </div>
        <Link
          to="/auth/login"
          className="relative -top-3 font-semibold text-xs hover:underline hover:text-gray-500"
        >
          Click for Login
        </Link>

        <div className="form-control mt-6">
          <button className="btn btn-primary">Register</button>
        </div>
        <div
          className="btn btn-outline"
          onClick={() => {
            logInWithGoogle()
              .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
                Swal.fire({
                  title: "Successfully SignUp",
                  text: " ",
                  icon: "success"
                });
                navigate(location.state ? location.state.location : "/");
              })
              .catch((error) => {
                console.log(error);
              });
          }}
        >
          <span className="">
            <FcGoogle/>
          </span>
          Continue with Google
        </div>
      </form>
    </div>
  );
}
