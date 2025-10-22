import React, { useState } from "react";
import api from "../api/api";

const CreateStoryPage = () => {
  const [story, setStory] = useState({ title: "", content: "" });

  const handleChange = (e) => {
    setStory({ ...story, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    try {
      await api.post("/stories", story, {
        headers: { Authorization: `Bearer ${token}` },
      });
      alert("Story posted successfully!");
      setStory({ title: "", content: "" });
    } catch (error) {
      alert(error.response?.data?.message || "Failed to post story");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-xl shadow-lg w-96"
      >
        <h1 className="text-2xl font-bold mb-4 text-center">Create Story</h1>
        <input
          type="text"
          name="title"
          value={story.title}
          onChange={handleChange}
          placeholder="Story Title"
          className="border p-2 w-full mb-3 rounded"
        />
        <textarea
          name="content"
          value={story.content}
          onChange={handleChange}
          placeholder="Write your story..."
          className="border p-2 w-full mb-3 rounded h-40"
        ></textarea>
        <button
          type="submit"
          className="bg-blue-500 text-white w-full py-2 rounded hover:bg-blue-600"
        >
          Publish
        </button>
      </form>
    </div>
  );
};

export default CreateStoryPage;
