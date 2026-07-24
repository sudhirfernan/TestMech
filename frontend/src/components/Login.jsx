import { useState } from "react";

function Login({ isOpen, onClose }) {

  if (!isOpen) return null;


  return (
    <div
      className="
      fixed inset-0
      bg-black/50
      flex items-center justify-center
      z-50
      "
    >

      {/* Modal */}
      <div
        className="
        bg-white
        w-full max-w-md
        rounded-2xl
        p-8
        shadow-2xl
        relative
        "
      >

        {/* Close Button */}
        <button
          onClick={onClose}
          className="
          absolute
          top-4 right-5
          text-gray-500
          text-2xl
          hover:text-gray-900
          "
        >
          ×
        </button>


        {/* Header */}
        <div className="text-center">

          <h2 className="text-3xl font-bold text-gray-900">
            Welcome Back
          </h2>

          <p className="mt-2 text-gray-500">
            Login to access mechanic assistance
          </p>

        </div>



        {/* Form */}
        <form className="mt-8 space-y-5">


          <div>

            <label className="text-sm text-gray-700">
              Username
            </label>

            <input
              type="string"
              placeholder="Enter your email"
              className="
              w-full mt-2
              border border-gray-300
              rounded-lg
              px-4 py-3
              focus:outline-none
              focus:ring-2
              focus:ring-blue-500
              "
            />

          </div>



          <div>

            <label className="text-sm text-gray-700">
              Password
            </label>

            <input
              type="password"
              placeholder="Enter your password"
              className="
              w-full mt-2
              border border-gray-300
              rounded-lg
              px-4 py-3
              focus:outline-none
              focus:ring-2
              focus:ring-blue-500
              "
            />

          </div>



          <div className="flex justify-between items-center">

            <label className="flex items-center gap-2 text-sm">

              <input type="checkbox" />

              Remember me

            </label>


            <button
              type="button"
              className="
              text-blue-600
              text-sm
              hover:underline
              "
            >
              Forgot password?
            </button>


          </div>



          <button
            className="
            w-full
            bg-blue-600
            text-white
            py-3
            rounded-lg
            font-semibold
            hover:bg-blue-700
            transition
            "
          >
            Login
          </button>


        </form>



        {/* Register */}
        <p className="text-center mt-6 text-gray-600">

          Don't have an account?

          <button
            className="
            ml-2
            text-blue-600
            font-semibold
            hover:underline
            "
          >
            Register
          </button>

        </p>


      </div>


    </div>
  );
}


export default Login;