import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchUsers } from "../Services/api";

const LoginPage = ({ setCurrentUser }) => {
  const [users, setUsers] = useState([]);
  const [selectedUserId, setSelectedUserId] = useState("");
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    fetchUsers()
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to load users. Try again.");
        setLoading(false);
      });
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");

    const user = users.find((u) => u.id === parseInt(selectedUserId));
    if (user) {
        setCurrentUser(user);
        navigate('/posts');
    } else {
      setError("Please select a valid user");
      setSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-gradient-to-br from-slate-50 to-zinc-100">
        <div className="text-center">
          <div className="animate-spin w-8 h-8 border-4 border-accent border-t-transparent rounded-full mx-auto mb-4" />
          <p className="text-[#494949]">Loading users...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center h-[60vh]">
      <form
        onSubmit={handleLogin}
        className="p-8 bg-white rounded-3xl shadow-lg border border-light flex flex-col gap-4"
      >
        <h2 className="text-xl font-bold text-[#494949]">Login</h2>
        <input
          type="number"
          placeholder="Enter User ID (1-10)"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          className="p-3 border border-light rounded-xl outline-accent"
          min="1"
          max="10"
          required
        />
        <button
          type="submit"
          className="bg-accent text-white p-3 rounded-xl font-bold hover:opacity-90"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;

//imana niyo buhungiro
//nzaguha umugisha