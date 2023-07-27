import LoginAlert from "./LoginAlert";

import hombreLogo from "../assets/sally.png";

import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export default function LoginForm() {
  const [loginResult, setLoginResult] = useState({ value: false });
  const navigate = useNavigate();
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
        navigate("/home");
      })
      .catch((e) => {
        setLoginResult({ ...loginResult, value: true, state: "denied" });
      });
  };

  return (
    <div className="flex flex-row grow">
      <div
        className="w-1/2 h-full"
        style={{
          backgroundImage: `url(${hombreLogo})`,
          backgroundSize: "contain",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
        }}
      ></div>

      <div className=" w-1/2 gap-7 pr-52 h-full flex flex-col justify-center">
        <h1 className="headings-h1">Login</h1>

        <form onSubmit={handleSubmit(onSubmit)} className=" w-3/4">
          <div className="relative mb-4">
            <input
              type="text"
              placeholder="Email"
              // defaultValue={"challenge@alkemy.org"}
              className="w-full h-auto border pl-10 py-4 hover:outline-none focus:outline-none focus:ring-indigo-500 focus:ring-2 rounded-lg bg-transparent"
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
            ></input>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              className="absolute py-2 px-3 -ml-1 top-2.5 w-12 h-auto"
            >
              <path
                d="M17 20.5H7C4 20.5 2 19 2 15.5V8.5C2 5 4 3.5 7 3.5H17C20 3.5 22 5 22 8.5V15.5C22 19 20 20.5 17 20.5Z"
                stroke="#8E95A9"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M17 9L13.87 11.5C12.84 12.32 11.15 12.32 10.12 11.5L7 9"
                stroke="#8E95A9"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            {errors.email && <span>{errors.email.message}</span>}
          </div>

          <div className="relative mb-4">
            <input
              type="password"
              placeholder="Password"
              defaultValue={"react"}
              className="w-full h-auto border pl-10 py-4 hover:outline-none focus:outline-none focus:ring-indigo-500 focus:ring-2 rounded-lg bg-transparent"
              {...register("password", { required: true })}
            />

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              className="absolute py-2 px-3 -ml-1 top-2.5 w-12 h-auto"
            >
              <path
                d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
                stroke="#8E95A9"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M16.2802 13.61C15.1502 14.74 13.5302 15.09 12.1002 14.64L9.5102 17.22C9.3302 17.41 8.9602 17.53 8.6902 17.49L7.4902 17.33C7.0902 17.28 6.7302 16.9 6.6702 16.51L6.5102 15.31C6.4702 15.05 6.6002 14.68 6.7802 14.49L9.3602 11.91C8.9202 10.48 9.2602 8.86001 10.3902 7.73001C12.0102 6.11001 14.6502 6.11001 16.2802 7.73001C17.9002 9.34001 17.9002 11.98 16.2802 13.61Z"
                stroke="#8E95A9"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10.4496 16.28L9.59961 15.42"
                stroke="#8E95A9"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M13.3949 10.7H13.4039"
                stroke="#8E95A9"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            {errors.password && <span>This field is required</span>}
          </div>

          <div className="flex justify-between items-baseline">
            <button
              type="submit"
              className=" py-3 px-2 text-white w-full buttons-default body-regular"
            >
              Login
            </button>
          </div>

          {loginResult.value && (
            <LoginAlert
              setLoginResult={setLoginResult}
              loginResult={loginResult}
            />
          )}
        </form>
      </div>
    </div>
  );
}
