import Link from "next/link";
import React from "react";

const SignIn = () => {
  return (
    <section className="flex flex-col items-center justify-center w-full h-[80vh]">
      <div className="flex flex-col items-center w-[500px] py-12 rounded-[20px] border-2 border-gray-300 bg-white">
        <h1 className="text-black text-2xl font-bold mb-6">
          Log In to FoodFest
        </h1>
        <form className="flex flex-col items-center gap-4">
          <div className="flex flex-col gap-1.5">
            <input
              className="w-96 px-4 py-3 rounded-md border-2 border-gray-300 text-base focus:border-gray-500 focus:outline-none"
              type="email"
              placeholder="Email"
            />
            <p className="text-red-600 text-xs font-medium">Error message</p>
          </div>

          <div className="flex flex-col gap-1.5">
            <input
              className="w-96 px-4 py-3 rounded-md border-2 border-gray-300 text-base focus:border-gray-500 focus:outline-none"
              type="password"
              placeholder="Password"
            />
            <p className="text-red-600 text-xs font-medium">Error message</p>
          </div>

          <button className="w-full bg-red-600 text-white px-4 py-3 rounded-md text-base font-semibold hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-600">
            Continue
          </button>
        </form>

        {/* separator  */}
        <div className="my-8 flex items-center gap-4 w-full px-12">
          <span className="flex-grow h-[1px] bg-gray-300"></span>
          <h5 className="text-gray-700 font-medium">OR</h5>
          <span className="flex-grow h-[1px] bg-gray-300"></span>
        </div>

        {/* Social Login  */}
        <div className="flex flex-col gap-4 mb-12 w-full px-12">
          <button className="w-full bg-blue-500 text-white px-4 py-3 rounded-md hover:bg-blue-600 focus:outline-none ">
            Continue With Google
          </button>
          <button className="w-full bg-transparent text-black px-4 py-3 rounded-md border-2 border-black hover:bg-gray-100 focus:outline-none ">
            Continue With Instagram
          </button>
        </div>

        {/* Don't have account   */}
        <div className="flex flex-col items-center gap-4">
          <h6 className="text-gray-700 font-medium">
            Don&apos;t have an account?
          </h6>
          <Link href={"/sign-up"}>
            <button className="w-[200px] bg-transparent text-red-500 px-4 py-3 border-2 border-red-500 rounded-md hover:bg-red-100 focus:outline-none focus:ring-2 focus:ring-red-500">
              Sign Up
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SignIn;
