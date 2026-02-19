import React from "react";
import { fetchPosts } from "../Services/api";
import useFetch from "../Hooks/useFetch";
import { Link } from "react-router-dom";
import { IoArrowForward } from "react-icons/io5";

const Posts = () => {
  const { data: posts, loading, error } = useFetch(fetchPosts);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-gradient-to-br from-slate-50 to-zinc-100">
        <div className="animate-spin w-8 h-8 border-4 border-accent border-t-transparent rounded-full mx-auto mb-4" />
        <p className="text-[#494949]">Loading...</p>
      </div>
    );
  }
  if (error) return <p>Error: {error}</p>;

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

            <Link
              to={`/post/${post.id}`}
              className="group mt-4 flex flex-row items-center gap-2 italic text-xl font-kaushan text-accent transition-transform duration-300"
            >
              <span className="group-hover:scale-103">View Details</span>
              <IoArrowForward className="group-hover:scale-125" />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Posts;
