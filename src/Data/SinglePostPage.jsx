import React, { useMemo } from "react";
import useFetch from "../Hooks/useFetch";
import { useParams } from "react-router-dom";
import { fetchCommentsByPostId, fetchPostById } from "../Services/api";
import { useAuth } from "../components/AuthContext";
import { LuUser } from "react-icons/lu";

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

  const randomImgId = useMemo(() => Math.floor(Math.random() * 98 + 1), [id]);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        ...
      </div>
    );
  }
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="max-w-6xl mx-auto px-6 pb-32">
      <header className="border-b border-b-solid border-b-[#494949] mb-8 mt-10 pb-8">
        <h1 className="font-kaushan text-4xl font-bold text-center mb-4">
          {post.title}
        </h1>
        <h3 className="text-center text-accent mb-6">
          By <span className="font-semibold">{currentUser.name}</span>
        </h3>
        <div className="overflow-hidden rounded-xl shadow-lg aspect-video">
          <img
            src={`https://picsum.photos/id/${randomImgId}/1200/675`}
            alt="image"
            className="w-full h-full object-cover"
          />
        </div>
        <p className="font-comic text-xl leading-relaxed text-[#494949] mt-8">
          {post.body}
        </p>
      </header>
      <section className="mt-12">
        <h1 className="font-kaushan font-extrabold text-2xl mb-6">Comments</h1>

        {commentsLoading ? (
          <div className="flex justify-center py-10">
            <div className="animate-spin w-6 h-6 border-2 border-accent border-t-transparent rounded-full mx-auto mb-4" />
          </div>
        ) : commentsError ? (
          <p>Error loading comments: {commentsError}</p>
        ) : (
          <ul className="space-y-6">
            {comments.map((comment) => (
              <li
                key={comment.id}
                className="flex gap-4 bg-white p-5 rounded-xl shadow-sm"
              >
                <div className="bg-slate-100 h-15 w-15 rounded-full flex items-center justify-center shrink-0">
                  <LuUser className="text-slate-500 text-2xl" />
                </div>
                <div>
                  <div className="flex flex-col items-baseline gap-1">
                    <h4 className="font-bold text-slate-900">{comment.name}</h4>
                    <span className="text-sm text-slate-400">{comment.email}</span>
                  </div>
                  <p className="text-gray-600 mt-1 italic">{comment.body}</p>
                </div>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
};

export default SinglePostPage;
