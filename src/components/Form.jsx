import LoginAlert from "./LoginAlert";

import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function App() {
  const [loginError, setLoginError] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    axios
      .post("http://challenge-react.alkemy.org/", data)
      .then((response) => {
        console.log(response);
      })
      .catch((e) => {
        setLoginError(true);
      });
  };

  return (
    <div className="relative flex min-h-screen text-gray-800 antialiased flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12">
      <div className="relative py-3 sm:w-96 mx-auto text-center">
        <span className="text-2xl font-light ">Login to your account</span>
        <div className="mt-4 bg-white shadow-md rounded-lg text-left">
          <div className="h-2 bg-purple-400 rounded-t-md"></div>
          <div className="px-8 py-6 ">
            <form onSubmit={handleSubmit(onSubmit)}>
              <label className="block font-semibold"> Email </label>
              <input
                type="text"
                placeholder="Email"
                defaultValue={"challenge@alkemy.org"}
                className="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-indigo-500 focus:ring-1 rounded-md"
                {...register("email", {
                  required: {
                    value: true,
                    message: "This field is required",
                  },
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                  },
                })}
              />
              {errors.email && <span>{errors.email.message}</span>}

              <label className="block mt-3 font-semibold"> Pasword </label>
              <input
                type="password"
                placeholder="Password"
                defaultValue={"react"}
                className="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-indigo-500 focus:ring-1 rounded-md"
                {...register("password", { required: true })}
              />
              {errors.password && <span>This field is required</span>}
              <div className="flex justify-between items-baseline">
                <button
                  type="submit"
                  className="mt-4 bg-purple-500 text-white py-2 px-6 rounded-md hover:bg-purple-600 "
                >
                  Login
                </button>
                <a href="#" className="text-sm hover:underline">
                  Forgot password?
                </a>
              </div>
            </form>
            {loginError && <LoginAlert setLoginError={setLoginError} />}
          </div>
        </div>
      </div>
    </div>
  );
}
