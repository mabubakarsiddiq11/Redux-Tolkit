import React, { useState }  from 'react'
import { useNewPostMutation } from "../Feature/apiSlice";


function AddPost() {
    const [post, setPost] = useState("");
    const [caption, setCaption] = useState("");
    const [newAddPost] = useNewPostMutation()
  
    const handleAdd = () => {
      const newPost = {
          post,
          caption,
          id : Math.random() * 1000,
          
      }
      newAddPost(newPost)
  
      setPost("");
      setCaption("");
    };
  return (
    <div>
       <div className="max-w-sm mx-auto mt-10 p-6 bg-white rounded-lg shadow-md ">
        <h2 className="text-xl font-bold mb-4">Add Post</h2>
        <input
          type="text"
          placeholder="First Input"
          className="w-full mb-3 px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={post}
          onChange={(e) => setPost(e.target.value)}
        />
        <input
          type="text"
          placeholder="Second Input"
          className="w-full mb-3 px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={caption}
          onChange={(e) => setCaption(e.target.value)}
        />
        <button
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
          onClick={handleAdd}
        >
          Add
        </button>
      </div>
    </div>
  )
}

export default AddPost
