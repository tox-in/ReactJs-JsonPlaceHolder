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
          <p className="text-[#494949] font-medium">Gathering Users...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-10 text-[#494949]">
        Community Members
      </h1>

      <ul className="space-y-6 pb-10">
        {users.map((user) => (
          <li
            key={user.id}
            className="group bg-white rounded-3xl p-6 shadow-sm border border-zinc-100 hover:shadow-lg transition-all duration-300 flex gap-6 items-start"
          >
            <div className="shrink-0 w-20 h-20 bg-slate-100 rounded-2xl flex items-center justify-center">
              <LuUser className="text-4xl text-slate-500" />
            </div>

            <div className="flex-1 min-w-0 pt-1">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 className="text-2xl font-bold text-[#494949] leading-tight">
                    {user.name}
                  </h2>
                  <p className="text-accent font-medium">@{user.username}</p>
                </div>

                <Link
                  to={`/user/${user.id}`}
                  className="mt-1 bg-accent hover:bg-accent/90 text-white text-sm font-semibold px-6 py-2.5 rounded-2xl transition-all active:scale-95 whitespace-nowrap"
                >
                  View Profile
                </Link>
              </div>
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm">
                <div>
                  <p className="text-zinc-500 text-xs uppercase tracking-widest mb-1">Email</p>
                  <p className="text-[#494949] break-all">{user.email}</p>
                </div>
                <div>
                  <p className="text-zinc-500 text-xs uppercase tracking-widest mb-1">Website</p>
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
                  <p className="text-zinc-500 text-xs uppercase tracking-widest mb-1">Phone</p>
                  <p className="text-[#494949]">{user.phone}</p>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;