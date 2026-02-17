import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchUsers } from '../Services/api';

const LoginPage = ({ setCurrentUser }) => {
  const [users, setUsers] = useState([]);
  const [selectedUserId, setSelectedUserId] = useState('');
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  
  const navigate = useNavigate();

  useEffect(() => {
    fetchUsers()
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch(() => {
        setError('Failed to load users. Try again.');
        setLoading(false);
      });
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError('');

    const user = users.find((u) => u.id === parseInt(selectedUserId));

    if (user) {
      setCurrentUser(user);
      navigate('/posts');
    } else {
      setError('Please select a valid user.');
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
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-slate-50 to-zinc-100 px-4">
      <div className="mb-12 text-center">
        <div className="w-20 h-20 bg-accent rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-md">
          <span className="text-white text-4xl font-black">L</span>
        </div>
        <h1 className="text-4xl font-bold text-[#494949] tracking-tight">Log in</h1>
        <p className="text-zinc-500 mt-2">Welcome back to your network</p>
      </div>

      <div className="w-full max-w-md">
        <form 
          onSubmit={handleLogin}
          className="bg-white p-10 rounded-3xl shadow-2xl border border-zinc-100 flex flex-col gap-8"
        >
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-zinc-600">Who are you?</label>
            <select
              value={selectedUserId}
              onChange={(e) => {
                setSelectedUserId(e.target.value);
                setError('');
              }}
              className="w-full p-4 border border-zinc-200 rounded-2xl outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 bg-white text-[#494949] transition-all"
              required
              disabled={submitting}
            >
              <option value="">Select a user to log in as</option>
              {users.map((user) => (
                <option key={user.id} value={user.id}>
                  {user.name} • @{user.username}
                </option>
              ))}
            </select>
            {error && <p className="text-red-500 text-sm">{error}</p>}
          </div>

          <button
            type="submit"
            disabled={submitting || !selectedUserId}
            className={`w-full bg-accent text-white py-4 rounded-2xl font-bold text-lg transition-all active:scale-95 flex items-center justify-center gap-2 ${
              submitting ? 'opacity-75 cursor-not-allowed' : 'hover:bg-accent/90'
            }`}
          >
            {submitting ? (
              <>
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                Logging in...
              </>
            ) : (
              'Sign in'
            )}
          </button>

          <p className="text-center text-xs text-zinc-400">
            Demo login • Powered by JSONPlaceholder
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;