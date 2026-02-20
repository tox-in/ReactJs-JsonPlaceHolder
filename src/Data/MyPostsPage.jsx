import React from "react";
import { fetchMyPosts } from "../Services/api";
import useFetch from "../Hooks/useFetch";
import { useAuth } from "../components/AuthContext";
import { Link } from "react-router-dom";
import { IoCreate } from "react-icons/io5";
import { IoTrash } from "react-icons/io5";
import { IoArrowForward } from "react-icons/io5";

const MyPostsPage = () => {
  const { currentUser } = useAuth();
  const {
    data: posts,
    loading,
    error,
  } = useFetch(() => fetchMyPosts(currentUser?.id || 1));

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-gradient-to-br from-slate-50 to-zinc-100">
        <div className="animate-spin w-8 h-8 border-4 border-accent border-t-transparent rounded-full mx-auto mb-4" />
      </div>
    );
  }
  if (error) return <p className="text-red-700">Error: {error}</p>;

  return (
    <div className="space-y-6 pb-32">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <div
            key={post.id}
            className="bg-white p-6 rounded-2xl shadow-sm border border-light flex flex-col justify-between items-center hover:shadow-md transition-shadow"
          >
            <h3 className="mt-2 mb-2 text-xl font-kaushan font-semibold text-[#494949] leading-tight">
              {post.title}
            </h3>
            <p className="m-2 text-lg font-kaushan text-[#494949]">
              {post.body}
            </p>

            <div className="w-100% flex flex-row space-x-8">
              <Link
                to={`/post/${post.id}`}
                className="group mt-4 flex flex-row items-center gap-2 italic text-xl font-kaushan text-[#494949] transition-transform duration-300"
              >
                <span className="group-hover:scale-103">Read</span>
                <IoArrowForward className="group-hover:scale-125" />
              </Link>

              <Link
                to={`/post/${post.id}`}
                className="group mt-4 flex flex-row items-center gap-2 italic text-xl font-kaushan text-accent transition-transform duration-300"
              >
                <span className="group-hover:scale-103">Update</span>
                <IoCreate className="group-hover:scale-125" />
              </Link>

              <Link
                to={`/post/${post.id}`}
                className="group mt-4 flex flex-row items-center gap-2 italic text-xl font-kaushan text-red-700 transition-transform duration-300"
              >
                <span className="group-hover:scale-103">Delete</span>
                <IoTrash className="group-hover:scale-125" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyPostsPage;
