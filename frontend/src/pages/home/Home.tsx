import React, { useState, useEffect } from "react";
import Profile from "../../components/profile/Profile";
import { useAuth } from "../../context/AuthContext";
import PostCreation from "../../components/postCreation/PostCreation";

function Home() {
  const { user, loading } = useAuth();
  const [posts, setPosts] = useState([]);

  // 1. Fetch posts from Rails backend
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("http://localhost:3000/posts");
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, []);

  // 2. Callback function to add the new post to the top of the list
  const handleNewPost = (newPost) => {
    setPosts([newPost, ...posts]);
  };

  // Safety check: wait for AuthContext to finish loading user
  if (loading) return <div>Loading...</div>;
  if (!user) return <div>Please log in to view this page.</div>;

  return (
    <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 p-4">
      {/* Sidebar: Profile Info */}
      <div className="md:col-span-1">
        <Profile name={user.username} />
      </div>

      {/* Main Content: Post Creation & Feed */}
      <div className="md:col-span-2 space-y-6">
        <h2 className="text-2xl font-bold text-gray-800">
          Share Your Feelings with your Friends!
        </h2>

        {/* Pass the callback to PostCreation */}
        <PostCreation onPostCreated={handleNewPost} />

        {/* --- THE FEED --- */}
        <div className="space-y-4">
          {posts?.length === 0 ? (
            <p className="text-gray-500 italic">
              No posts yet. Be the first to share!
            </p>
          ) : (
            posts.map((post) => (
              <div
                key={post.id}
                className="bg-white p-5 rounded-xl shadow-sm border border-gray-200"
              >
                <div className="flex justify-between items-start">
                  <h4 className="font-bold text-lg text-blue-600">
                    @{post.user?.username || "anonymous"}
                  </h4>
                  <span className="text-xs text-gray-400">
                    {new Date(post.created_at).toLocaleDateString()}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mt-2">{post.title}</h3>
                <p className="text-gray-700 mt-2 leading-relaxed">
                  {post.content}
                </p>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
