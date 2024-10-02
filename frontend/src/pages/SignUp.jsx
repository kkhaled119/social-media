import React from "react";
import { Button, Label, TextInput } from "flowbite-react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="min-h-screen mt-20">
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-6">
        {/* Left Side */}
        <div className="flex-1">
          <div className="font-semibold text-4xl">
            <span className="px-2 py-1 bg-gradient-to-r from-slate-700 to-green-500 rounded-xl text-white">
              Adventures
            </span>
            Blog
            <p className="text-sm mt-5 font-normal">
              This is a demo project. You can sign up with your email and
              password or with Google.
            </p>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex-1">
          <form className="flex flex-col gap-4">
            <div className="">
              <Label value="Your username" />
              <TextInput type="text" placeholder="Username" id="username" />
            </div>
            <div className="mb-4">
              <Label value="Your email" />
              <TextInput
                type="email"
                placeholder="name@comapany.com"
                id="email"
              />
            </div>
            <div className="mb-4">
              <Label value="Your password" />
              <TextInput type="password" placeholder="Password" id="password" />
            </div>
            <Button
              className="bg-gradient-to-r from-slate-700 to-green-500 rounded-xl text-white"
              type="submit"
            >
              Sign Up
            </Button>
          </form>
          <div className="flex gap-2 text-sm mt-5">
            <span>Have an account?</span>
            <Link to="/sign-in" className="text-blue-500">
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
