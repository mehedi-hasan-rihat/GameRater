import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider";
import { FcGoogle } from "react-icons/fc";
import Swal from "sweetalert2";
export default function Login() {
  const navigate = useNavigate();
  const { loginUser, logInWithGoogle } = useContext(AuthContext);
  const location = useLocation()
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    loginUser(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        Swal.fire({
          title:"Successfully LogIn",
                  text: " ",
                  icon: "success"
        });
        console.log(location.state.location)
        navigate(location.state ? location.state.location : "/");
      })
      .catch((error) => {
        console.log(error);
        Swal.fire({
          title: "Invalid email and password",
          text: "Please Enter Correct email and password",
          icon: "error"
        });
      });
  };
  return (
    <div className="max-w-xl mx-auto bg-gray-100/50 my-10 rounded-lg">
      <form className="card-body" onSubmit={handleSubmit}>
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
          to="/auth/registration"
          className="relative -top-3 font-semibold text-xs hover:underline hover:text-gray-500"
        >
          Click for Registration
        </Link>

        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>

        <div
          className="btn btn-outline"
          onClick={() => {
            logInWithGoogle()
              .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
                Swal.fire({
                  title: "Successfully Login",
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
            <FcGoogle />
          </span>
          Continue with Google
        </div>
      </form>
    </div>
  );
}
