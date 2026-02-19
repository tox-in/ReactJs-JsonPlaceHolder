import React from "react";
import useFetch from "../Hooks/useFetch";
import { useParams } from "react-router-dom";
import { fetchCommentsByPostId, fetchPostById } from "../Services/api";
import { useAuth } from "../components/AuthContext";

const SinglePostPage = () => {
  const { id } = useParams();
  const {
    data: post,
    loading,
    error,
  } = useFetch(() => fetchPostById(Number(id)));
  
  const {
    data: comments,
    loading: commentsLoading,
    error: commentsError,
  } = useFetch(() => fetchCommentsByPostId(Number(id)));

  const { currentUser } = useAuth();

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
      <div className="bg-black text-accent h-100vh w-100% flex items-center justify-center">
        <div key={post.id}>
            <h1>{currentUser.name}</h1>
            <h3>{post.title}</h3>
            <img
                src={`https://picsum.photos/id/${Math.floor(Math.random() * 98 + 1)}/800/500`}
                alt="image" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <h3>{post.body}</h3>
        </div>
        <div>
            <h1>Comments</h1>
            {
                commentsLoading ? (
                    <p>Loading comments...</p>
                ) : commentsError ? (
                    <p>Error loading comments: {commentsError}</p>
                ) : (
                    <ul className="space-y-4">
                        {comments.map((comment) => (
                            <div key={comment.id} className="bg-white p-4 rounded-lg shadow">
                                <h3 className="font-bold">{comment.name}</h3>
                                <h3>{comment.email}</h3>
                                <p className="text-gray-700">{comment.body}</p>
                            </div>
                        ))}
                    </ul>
                )
            }
        </div>
      </div>
    </div>
  );
};

export default SinglePostPage;
