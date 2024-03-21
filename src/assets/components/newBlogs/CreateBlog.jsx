import { useState } from "react";
import { Navigate, useNavigate } from 'react-router-dom';

const CreateBlog = () => {
  const [title, setTitle] = useState();
  const [body, setBody] = useState();
  const [author, setAuthor] = useState();
  const [isLoading,setIsLoading] =useState(false);
  const navigate = useNavigate();

  const handleSubmit =(e) => {
    e.preventDefault();
    const blog = {title,body,author};

    setIsLoading(true);

    fetch('http://localhost:8000/blogs',{
      method: 'POST',
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(blog)
    }).then(()=>{
      setIsLoading(false)
      navigate("/")
    })

  }

  return (
    <>
      <div className="mx-auto my-10 max-w-[600px]">
        <h1 className="text-center text-2xl font-bold mb-6 text-red-500">
          Add New Blog
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="blog-title" className="block font-semibold mb-2">
              Blog Title:
            </label>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              type="text"
              id="blog-title"
              placeholder="Enter your blog title"
              required
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-red-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="blog-body" className="block font-semibold mb-2">
              Blog Content:
            </label>
            <textarea
              value={body}
              onChange={(e) => setBody(e.target.value)}
              id="blog-body"
              placeholder="Enter the content"
              required
              className="w-full min-h-28 px-4 py-2 border rounded-md  focus:outline-none focus:border-red-500"
            ></textarea>
          </div>
          <div className="mb-4">
            <label htmlFor="blog-author" className="block font-semibold mb-2">
              Author:
            </label>
            <input
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              id="blog-author"
              placeholder="Enter your name"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-red-500"
            />
          </div>
          {!isLoading && <button
            type="submit"
            className="w-full mt-2 py-2 bg-red-400 text-white rounded-md hover:bg-red-500 transition duration-300"
          >
            Add Blog
          </button>}
          {isLoading && <button disabled
            type="submit"
            className="w-full mt-2 py-2 bg-red-400 text-white rounded-md hover:bg-red-500 transition duration-300"
          >
            Adding Blog....
          </button>}
        </form>
      </div>
    </>
  );
};

export default CreateBlog;
