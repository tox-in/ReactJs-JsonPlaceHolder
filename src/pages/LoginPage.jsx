import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchUserById } from "../Services/api";
import { useAuth } from "../components/AuthContext";

const LoginPage = ({ setCurrentUser }) => {
  const [userId, setUserId] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const { login } = useAuth();

  const handleLogin = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");

    const id = Number(userId);

    if (!id || id < 1 || id > 10) {
      setError("Enter a number between 1 and 10");
      setSubmitting(false);
      return;
    }

    try {
      const user = await fetchUserById(id);
      login(user);
      navigate("/posts");
    } catch (err) {
      setError(`User doesn't exist. ${err.message}`);
    } finally {
      setSubmitting(false);
    }
  };

  if (submitting) {
    return (
      <div className="flex items-center justify-center h-screen bg-gradient-to-br from-slate-50 to-zinc-100">
        <div className="text-center">
          <div className="animate-spin w-8 h-8 border-4 border-accent border-t-transparent rounded-full mx-auto mb-4" />
          <p className="text-[#494949]">Logging in...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-slate-50 to-zinc-100 px-4">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold text-[#494949] tracking-tight">
          Log in
        </h1>
        <p className="text-zinc-500 mt-2">Enter your user ID</p>
      </div>

      <div className="w-full max-w-md">
        <form
          onSubmit={handleLogin}
          className="bg-white p-10 rounded-3xl shadow-2xl border border-zinc-100 flex flex-col gap-8"
        >
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-zinc-600">
              User ID (1-10)
            </label>
            <input
              type="number"
              min="1"
              max="10"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
              className="w-full p-4 border border-zinc-200 rounded-2xl outline-none focus:border-accent focus:ring-2 focus:ring-accent/20"
              placeholder="Enter ID..."
              required
              disabled={submitting}
            />
            {error && <p className="text-red-500 text-sm">{error}</p>}
          </div>

          <button
            type="submit"
            disabled={submitting}
            className={`w-full bg-accent text-white py-4 rounded-2xl font-bold text-lg transition-all active:scale-95 flex items-center justify-center gap-2 ${
              submitting
                ? "opacity-75 cursor-not-allowed"
                : "hover:bg-accent/90"
            }`}
          >
            {submitting ? (
              <>
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                Logging in...
              </>
            ) : (
              "Sign in"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
