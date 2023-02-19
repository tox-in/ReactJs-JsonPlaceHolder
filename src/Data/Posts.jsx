import React from "react";
import { fetchPosts } from "../Services/api";
import useFetch from "../Hooks/useFetch";

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
    <div>
      {posts.map((post) => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default Posts;
