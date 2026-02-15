import React, { useEffect, useState } from 'react';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { fetchUsers } from '../Services/api';
import { Link } from 'react-router-dom'; // Prepare for clickability

const Users = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchUsers().then(setUsers).finally(() => setLoading(false));
    }, []);

    if (loading) return <div className='text-center p-10 animate-pulse text-accent font-bold'>Gathering Users...</div>

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-8 text-[#494949]">Community Members</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {users.map((user) => (
                    <div 
                        key={user.id} 
                        className="group relative bg-white p-6 rounded-3xl shadow-sm border border-light transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-accent cursor-pointer overflow-hidden"
                    >
                        <div className="absolute -right-4 -top-4 w-24 h-24 bg-accent/10 rounded-full transition-transform group-hover:scale-150" />

                        <div className="relative z-10">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-white font-bold text-lg">
                                    <AccountCircleOutlinedIcon />
                                </div>
                                <div>
                                    <h2 className="text-xl font-bold text-[#494949] dark:text-white">{user.name}</h2>
                                    <span className="text-sm text-accent">{user.name}</span>
                                </div>
                            </div>

                            <div className="space-y-2 border-t border-light pt-4 mt-4">
                                <p className="text-sm text-gray-500 flex items-center gap-2">
                                    <span className="font-bold">📧</span> {user.email.toLowerCase()}
                                </p>
                                <p className="text-sm text-gray-400 italic">
                                    🌐 {user.website}
                                </p>
                            </div>

                            <div className="mt-6 flex justify-end">
                                <span className="text-xs font-bold uppercase tracking-tighter text-accent opacity-0 group-hover:opacity-100 transition-opacity">
                                    View Details →
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Users;