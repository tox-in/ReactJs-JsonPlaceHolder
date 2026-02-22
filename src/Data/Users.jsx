import React, { useEffect, useState } from "react";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { fetchUsers } from "../Services/api";
import { Link } from "react-router-dom"; // Prepare for clickability
import { LuUser } from "react-icons/lu";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUsers()
      .then(setUsers)
      .finally(() => setLoading(false));
  }, []);

  if (loading)
    return (
      <div className="text-center p-10 animate-pulse text-accent font-bold">
        Gathering Users...
      </div>
    );

  return (
    <div className="p-4 pb-32">
      <h1 className="text-2xl font-bold mb-8 text-[#494949]">
        Community Members
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {users.map((user) => (
          <li
            key={user.id}
            className="group flex gap-4 bg-white p-5 rounded-xl shadow-sm border border-light transition-shadow hover:shadow-md"
          >
            <div className="bg-slate-100 h-15 w-15 rounded-full flex items-center justify-center shrink-0">
              <LuUser className="text-slate-500 text-2xl" />
            </div>
            <div className="z-10">
              <div className="flex items-center gap-4 mb-4">
                <div>
                  <div className="flex flex-row items-baseline gap-1">
                    <h2 className="text-xl font-bold text-[#494949]">
                      {user.name}
                    </h2>
                    <span className="text-sm text-[#494949]">
                      {" "}
                      {user.email.toLowerCase()}
                    </span>
                    <span  className="text-lg text-[#494949]">
                        {user.website}
                    </span>
                    <Link to={"/"} className="text-xs font-bold uppercase tracking-tighter text-[#494949] transition-opacity">
                  View Details
                </Link>
                  </div>
                </div>
              </div>
            </div>
          </li>
        ))}
      </div>
    </div>
  );
};

export default Users;
