import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { LuUser } from "react-icons/lu";
import { fetchUsers } from "../Services/api";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUsers()
      .then(setUsers)
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-[60vh]">
        <div className="text-center">
          <div className="animate-spin w-10 h-10 border-4 border-accent border-t-transparent rounded-full mx-auto mb-4" />
          <p className="text-[#494949] font-medium">Gathering community members...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-7xl pb-32 mx-auto">
      <h1 className="text-3xl font-bold mb-10 text-[#494949]">
        Community Members
      </h1>

      {/* Grid of proper cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {users.map((user) => (
          <div
            key={user.id}
            className="group bg-white rounded-3xl shadow-sm border border-zinc-100 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            {/* Avatar + Name Section */}
            <div className="p-6 flex flex-col items-center text-center border-b border-zinc-100">
              <div className="w-20 h-20 bg-gradient-to-br from-slate-100 to-zinc-200 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <LuUser className="text-4xl text-slate-500" />
              </div>
              <h2 className="text-2xl font-bold text-[#494949]">{user.name}</h2>
              <p className="text-accent font-medium">@{user.username}</p>
            </div>

            {/* Details */}
            <div className="p-6 space-y-4 text-sm">
              <div>
                <span className="block text-zinc-500 text-xs tracking-widest uppercase mb-1">Email</span>
                <p className="text-[#494949] font-medium break-all">{user.email}</p>
              </div>
              <div>
                <span className="block text-zinc-500 text-xs tracking-widest uppercase mb-1">Website</span>
                <a
                  href={`https://${user.website}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:underline"
                >
                  {user.website}
                </a>
              </div>
              <div>
                <span className="block text-zinc-500 text-xs tracking-widest uppercase mb-1">Phone</span>
                <p className="text-[#494949]">{user.phone}</p>
              </div>
            </div>

            {/* Footer with button */}
            <div className="border-t border-zinc-100 p-6">
              <Link
                to={`/users/${user.id}`}   // ← Change this to your actual route
                className="block w-full bg-accent hover:bg-accent/90 text-white font-semibold text-center py-3.5 rounded-2xl transition-all active:scale-95"
              >
                View Full Profile
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;