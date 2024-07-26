import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { request } from "../config/request";
import { saveState } from "../config/storage";

export const UserLogin = () => {
  const navigate = useNavigate();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const submit = (data) => {
    request
      .post("/login", data)
      .then((res) => {
        if (res.data) {
          saveState("user", {
            accessToken: res.data.accessToken,
            ...res.data.user,
          });
          navigate("/", { replace: true });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <h1 className="my-10 text-center text-4xl font-bold">Login</h1>
      <div>
        <form
          className="grid justify-center gap-3 text-center"
          onSubmit={handleSubmit(submit)}
        >
          <div>
            <input
              className="border-[2px] border-slate-500 p-3 text-center"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                  message: "Email is not valid",
                },
              })}
              placeholder="Email"
              type="email"
            />
            {errors.email && (
              <span className="text-sm text-red-500">
                {errors.email.message}
              </span>
            )}
          </div>
          <div>
            <input
              className="border-[2px] border-slate-500 p-3 text-center"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
              placeholder="Password"
              type="password"
            />
            {errors.password && (
              <span className="text-sm text-red-500">
                {errors.password.message}
              </span>
            )}
          </div>
          <button className="border-[2px] border-white bg-blue-500 p-3 py-3 text-center font-bold text-white transition-all duration-300 hover:border-blue-500 hover:bg-white hover:text-blue-500">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};
