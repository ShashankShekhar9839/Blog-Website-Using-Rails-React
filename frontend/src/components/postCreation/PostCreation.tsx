import { memo, useState } from "react";
import { useAuth } from "../../context/AuthContext";

const PostCreation = ({ onPostCreated }) => {
  const { user } = useAuth();

  // 1. State for form inputs
  const [formData, setFormData] = useState({
    title: "",
    content: "", // Matches the 'content' column in Rails
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // 2. Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // 3. Submit to Rails
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.title || !formData.content)
      return alert("Please fill all fields");

    setIsSubmitting(true);
    try {
      const response = await fetch("http://localhost:3000/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          post: {
            ...formData,
            user_id: user.id, // From AuthContext
          },
        }),
      });

      const data = await response.json();

      if (response.ok) {
        // Clear form
        setFormData({ title: "", content: "" });
        // Update the list in the parent component (Home)
        if (onPostCreated) onPostCreated(data);
        alert("Post published successfully!");
      } else {
        alert(data.errors?.join(", ") || "Failed to create post");
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-xl mx-auto bg-white rounded-xl shadow-md p-6 space-y-5"
    >
      <h3 className="text-xl font-semibold text-gray-800">Create New Post</h3>

      <div className="space-y-2">
        <label className="text-sm font-medium text-gray-600">Post Title</label>
        <input
          name="title" // Name attribute matches the key in formData
          type="text"
          value={formData.title}
          onChange={handleChange}
          placeholder="Enter post title"
          className="w-full rounded-lg border border-gray-300 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium text-gray-600">Description</label>
        <textarea
          name="content" // Matches Rails column name
          rows={4}
          value={formData.content}
          onChange={handleChange}
          placeholder="Write your post description..."
          className="w-full rounded-lg border border-gray-300 px-4 py-2 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className={`w-full rounded-lg py-2.5 text-sm font-medium text-white transition ${
          isSubmitting ? "bg-gray-400" : "bg-blue-600 hover:bg-blue-700"
        }`}
      >
        {isSubmitting ? "Publishing..." : "Publish Post"}
      </button>
    </form>
  );
};

export default memo(PostCreation);
