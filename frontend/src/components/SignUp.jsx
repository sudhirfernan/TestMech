import { useState } from "react";

const API_BASE_URL = "http://localhost:3000"; // update if your backend runs elsewhere

function SignUp({ isOpen, onClose, onLoginSuccess, onSwitchToRegister }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Please enter both email and password.");
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch(`${API_BASE_URL}/auth/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        // NestJS error responses typically include a "message" field
        throw new Error(data.message || "Invalid username or password.");
      }

      // Expecting { access_token: string } from AuthService.signIn()
      localStorage.setItem("access_token", data.access_token);

      setIsLoading(false);
      onLoginSuccess?.(data);
      onClose();
    } catch (err) {
      setIsLoading(false);
      setError(err.message || "Something went wrong. Please try again.");
    }
  };

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
          <h2 className="text-3xl font-bold text-gray-900">Welcome Back</h2>
          <p className="mt-2 text-gray-500">
            Sign Up to access mechanic assistance
          </p>
        </div>

        {/* Error message */}
        {error && (
          <div className="mt-5 bg-red-50 border border-red-200 text-red-700 text-sm rounded-lg px-4 py-3">
            {error}
          </div>
        )}

        {/* Form */}
        <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
          <div>
            <label className="text-sm text-gray-700">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              disabled={isLoading}
              className="
              w-full mt-2
              border border-gray-300
              rounded-lg
              px-4 py-3
              focus:outline-none
              focus:ring-2
              focus:ring-blue-500
              disabled:bg-gray-100
              "
            />
          </div>

          <div>
            <label className="text-sm text-gray-700">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              disabled={isLoading}
              className="
              w-full mt-2
              border border-gray-300
              rounded-lg
              px-4 py-3
              focus:outline-none
              focus:ring-2
              focus:ring-blue-500
              disabled:bg-gray-100
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
            type="submit"
            disabled={isLoading}
            className="
            w-full
            bg-blue-600
            text-white
            py-3
            rounded-lg
            font-semibold
            hover:bg-blue-700
            transition
            disabled:opacity-60
            disabled:cursor-not-allowed
            "
          >
            {isLoading ? "Logging in..." : "Login"}
          </button>
        </form>

        
      </div>
    </div>
  );
}

export default SignUp;