import React, { useState } from "react";
import authService from "../appwrite/auth";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import {Logo, Input} from "./index";

function SignUp() {
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { handleSubmit, register } = useForm();

  const signup = async (data) => {
    setError("");
    try {
      const session = await authService.createAccount(data);
      if (session) navigate("/login");
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
        <h2 className="text-center text-2xl font-bold leading-tight">SIGN UP</h2>
        <p className="mt-2 text-center text-base text-black/60">Already have an account?&nbsp;
            <Link 
                to={"/login"}
                className="font-medium text-primary transition-all duration-200 hover:underline"
            >
                sign up
            </Link>
        </p>
        {error && <p className="text-red-600 mt-8 text-center">{error}</p>}

        <form onSubmit={handleSubmit(signup)}> // recheck signup 
            <div className="space-y-5">
                <Input
                    type="text"
                    label="Full Name"
                    palceholder="Enter Your Name"
                    {...register("name", {
                        required: true
                    })}
                />
                // add input for email and password 
            </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
