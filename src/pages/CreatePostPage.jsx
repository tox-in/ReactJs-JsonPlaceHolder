import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createPost, fetchUserById } from "../Services/api";
import { useAuth } from "../components/AuthContext";

const CreatePostPage = () => {
  const { currentUser } = useAuth();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [userId, setUserId] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!title.trim()) return setError("Title is required");
    if (!content.trim()) return setError("Content is required");
    if (!currentUser?.id)
      return setError("You must be logged in to create a post.");

    setSubmitting(true);
    try {
      await fetchUserById(currentUser.id);

      const postData = {
        title: title.trim(),
        body: content.trim(),
        userId: currentUser.id,
      };
      const newPost = await createPost(postData);

      navigate("/myPosts");
    } catch (err) {
      setError(`Failed to create post: ${err.message}`);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-slate-50 to-zinc-100 px-4">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold text-[#494949] tracking-tight">
          Create Post
        </h1>
        <p className="text-zinc-500 mt-2">Share your thoughts</p>
      </div>

      <div className="w-full max-w-md">
        <form
          onSubmit={handleSubmit}
          className="bg-white p-10 rounded-3xl shadow-2xl border border-zinc-100 flex flex-col gap-8"
        >
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-zinc-600">
              Post Title
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full p-4 border border-zinc-200 rounded-2xl outline-none focus:border-accent focus:ring-2 focus:ring-accent/20"
              placeholder="Enter post title..."
              required
              disabled={submitting}
            />
            {error && <p className="text-red-500 text-sm">{error}</p>}
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-zinc-600">
              Post Content
            </label>
            <input
              type="text"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full p-4 border border-zinc-200 rounded-2xl outline-none focus:border-accent focus:ring-2 focus:ring-accent/20"
              placeholder="Enter post content..."
              required
              disabled={submitting}
            />
            {error && <p className="text-red-500 text-sm">{error}</p>}
          </div>

          <button
            type="submit"
            disabled={submitting}
            className={`w-full bg-accent text-white py-4 rounded-2xl font-bold text-lg transition-all active:scale-95 flex items-center justify-center gap-2 ${
              submitting
                ? "opacity-75 cursor-not-allowed"
                : "hover:bg-accent/90"
            }`}
          >
            {submitting ? (
              <>
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                Creating Post...
              </>
            ) : (
              "Create Post"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreatePostPage;
