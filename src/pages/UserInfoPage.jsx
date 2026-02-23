import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAuth } from '../components/AuthContext';
import { fetchUserById } from '../Services/api';
import { LuUser } from 'react-icons/lu';

const UserInfoPage = () => {
  const { id } = useParams();
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const isOwnProfile = currentUser && String(currentUser.id) === id;

  useEffect(() => {
    if (!id) {
      setError('No user ID in URL');
      setLoading(false);
      return;
    }

    setLoading(true);
    setError('');

    fetchUserById(id)
      .then((data) => setUser(data))
      .catch((err) => setError(err.message || 'Failed to load user'))
      .finally(() => setLoading(false));
  }, [id]);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-[70vh] bg-linear-to-br from-slate-50 to-zinc-100">
        <div className="text-center">
          <div className="animate-spin w-10 h-10 border-4 border-accent border-t-transparent rounded-full mx-auto mb-4" />
          <p className="text-[#494949] font-medium">Loading profile...</p>
        </div>
      </div>
    );
  }

  if (error || !user) {
    return (
      <div className="flex items-center justify-center h-[70vh] bg-linear-to-br from-slate-50 to-zinc-100">
        <div className="text-center text-red-500">
          <p className="text-xl font-semibold">Oops!</p>
          <p>{error || 'User not found'}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 to-zinc-100 py-10 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="flex flex-col lg:flex-row gap-10 p-8 md:p-12">
            <div className="shrink-0 flex justify-center lg:justify-start">
              <div className="relative w-64 h-64 bg-linear-to-br from-slate-100 to-zinc-200 rounded-3xl shadow-inner overflow-hidden">
                <img
                  src="../../public/User.jpg"
                  alt={user.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="hidden absolute inset-0 items-center justify-center">
                  <LuUser className="text-8xl text-slate-400" />
                </div>
              </div>
            </div>

            <div className="flex-1">
              <div className="mb-8">
                <h1 className="text-4xl font-bold text-[#494949] tracking-tight">
                  {user.name}
                </h1>
                <p className="text-xl text-accent font-medium mt-1">
                  @{user.username}
                </p>
              </div>

              <div className="space-y-6 text-[#494949]">
                <div>
                  <span className="block text-xs uppercase tracking-widest text-zinc-500 mb-1">Email</span>
                  <p className="text-lg">{user.email}</p>
                </div>

                <div>
                  <span className="block text-xs uppercase tracking-widest text-zinc-500 mb-1">Phone</span>
                  <p className="text-lg">{user.phone}</p>
                </div>

                <div>
                  <span className="block text-xs uppercase tracking-widest text-zinc-500 mb-1">Website</span>
                  <a
                    href={`https://${user.website}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg text-accent hover:underline"
                  >
                    {user.website}
                  </a>
                </div>

                <div>
                  <span className="block text-xs uppercase tracking-widest text-zinc-500 mb-1">Company Name</span>
                  <p className="text-lg">{user.company?.name}</p>
                </div>

                <div>
                  <span className="block text-xs uppercase tracking-widest text-zinc-500 mb-1">Address</span>
                  <p className="text-lg leading-relaxed">
                    {user.address?.street} {user.address?.suite}<br />
                    {user.address?.city}, {user.address?.zipcode}
                  </p>
                </div>
              </div>

              {isOwnProfile && (
                <div className="mt-12">
                  <button
                    onClick={handleLogout}
                    className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-4 rounded-2xl transition-all active:scale-95 text-lg"
                  >
                    Logout
                  </button>
                  <p className="text-center text-xs text-zinc-400 mt-3">
                    You are viewing your own profile
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserInfoPage;