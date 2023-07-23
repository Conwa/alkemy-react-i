import LoginAlert from "./LoginAlert";

import hombreLogo from "../assets/sally.png";

import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function LoginForm() {
  const [loginResult, setLoginResult] = useState({ value: false });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    axios
      .post("http://challenge-react.alkemy.org/", data)
      .then((response) => {
        setLoginResult({ ...loginResult, value: true, state: "accepted" });
        const token = response.data.token;
        localStorage.setItem("loggedUserToken", token);
      })
      .catch((e) => {
        setLoginResult({ ...loginResult, value: true, state: "denied" });
      });
  };

  return (
    <div className="relative flex h-full w-full antialiased flex-row justify-center items-center overflow-hidden">
      <div
        className="w-1/2 h-96"
        style={{
          backgroundImage: `url(${hombreLogo})`,
          backgroundSize: "cover",
        }}
      ></div>

      <div className="relative py-3 sm:w-96 mx-auto gap-10">
        <span className="headings-h1 ">Login</span>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className=" justify-start items-center gap-4 inline-flex">
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
          </div>
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
              className=" py-4 px-2 text-white w-full buttons-default body-regular"
            >
              Login
            </button>
          </div>
        </form>
        {loginResult.value && (
          <LoginAlert
            setLoginResult={setLoginResult}
            loginResult={loginResult}
          />
        )}
      </div>
    </div>
  );
}
