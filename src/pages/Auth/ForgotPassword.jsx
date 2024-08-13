import React, { useState } from "react";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    setSuccess("");

    try {
      // Assume reset password functionality here
      setSuccess("Password reset instructions have been sent to your email.");
    } catch (error) {
      setError("Failed to process your request. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 w-full max-w-md">
        <h3 className="text-2xl font-bold text-center mb-4 text-gray-900 dark:text-gray-100">
          Forgot Password
        </h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-transparent"
            />
          </div>
          <button
            type="submit"
            className={`w-full py-2 text-white rounded-md font-bold transition-colors ${
              isLoading ? "bg-gray-400 cursor-not-allowed" : "bg-orange-600 hover:bg-orange-700"
            }`}
            disabled={isLoading}
          >
            {isLoading ? "Processing..." : "Reset Password"}
          </button>
          {error && (
            <div className="mt-4 text-red-600 font-semibold">
              {error}
            </div>
          )}
          {success && (
            <div className="mt-4 text-green-600 font-semibold">
              {success}
            </div>
          )}
        </form>
      </div>
    </div>
  );
}

export default ForgotPassword;
