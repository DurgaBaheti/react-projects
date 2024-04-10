import React, { useState } from "react";
import authService from "../appwrite/auth";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { login } from "../store/authSlice";
import { Logo, Input, Button } from "./index";
import { useDispatch } from "react-redux";

function SignUp() {
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { handleSubmit, register } = useForm();
  const dispatch = useDispatch();

  const create = async (data) => {
    setError("");
    try {
      const session = await authService.createAccount(data);
      if (session) {
        const userData = await authService.getCurrentUser();
        if (userData) dispatch(login(userData));
        navigate("/");
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="flex items-center justify-center">
      <div className="{`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}">
        <div className="mb-2 flex justify-center ">
          <span className="inline-block w-full max-w-[100px]">
            <Logo width="100%" />
          </span>
        </div>
        <h2 className="text-center text-2xl font-bold leading-tight">
          SIGN UP
        </h2>
        <p className="mt-2 text-center text-base text-black/60">
          Already have an account?&nbsp;
          <Link
            to={"/login"}
            className="font-medium text-primary transition-all duration-200 hover:underline"
          >
            sign up
          </Link>
        </p>
        {error && <p className="text-red-600 mt-8 text-center">{error}</p>}

        <form onSubmit={handleSubmit(create)}>
          <div className="space-y-5">
            <Input
              type="text"
              label="Full Name: "
              palceholder="Enter Your Name"
              {...register("name", {
                required: true,
              })}
            />
            <Input
              type="text"
              label="Email: "
              palceholder="Enter Your Email"
              {...register(email, {
                required: true,
                validation: {
                  matchPatern: (value) => {
                    /^([\w\.\-_]+)?\w+@[\w-_]+(\.\w+){1,}$/.test(value) ||
                      "Email address must be a valid address";
                  },
                },
              })}
            />
            <Input
              type="password"
              label="Password: "
              palceholder="Enter Your Password"
              {...register(password, {
                required: true,
              })}
            />
            <Button type="submit" className="w-full">
              Create Account
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
