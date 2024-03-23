import { addDoc } from "firebase/firestore";
import { useState } from "react";
import { collectionRef } from "../main/Home";
import { Navigate, useNavigate } from 'react-router-dom';

const CreateBlog = () => {

  // localhost testing mode

  // const [title, setTitle] = useState();
  // const [body, setBody] = useState();
  // const [author, setAuthor] = useState();
  // const [isLoading,setIsLoading] =useState(false);
  // const navigate = useNavigate();

  // const handleSubmit =(e) => {
  //   e.preventDefault();
  //   const blog = {title,body,author};

  //   setIsLoading(true);

  //   fetch('http://localhost:8000/blogs',{
  //     method: 'POST',
  //     headers:{"Content-Type":"application/json"},
  //     body:JSON.stringify(blog)
  //   }).then(()=>{
  //     setIsLoading(false)
  //     navigate("/")
  //   })

  // }


  // Firebase production mode

  const [newtitle, setNewTitle] = useState('');
  const [newbody, setNewBody] = useState('');
  const [newauthor, setNewAuthor] = useState('');
  const [isLoading,setIsLoading] =useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);


    try {
      await addDoc(collectionRef, { title: newtitle, body: newbody, author: newauthor });

      setNewTitle('');
      setNewBody('');
      setNewAuthor('');
      setIsLoading(false);
      navigate("/")

    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  return (
    <>
      <div className="mx-auto my-10 max-w-[600px]">
        <h1 className="text-center text-2xl font-bold mb-6 text-[#EDF5E1]">
          Add New Blog
        </h1>
        <form onSubmit={handleSubmit} >
          <div className="mb-4">
            <label htmlFor="blog-title" className="block font-semibold mb-2">
              Blog Title:
            </label>
            <input
              value={newtitle}
              onChange={(e) => setNewTitle(e.target.value)}
              type="text"
              id="blog-title"
              placeholder="Enter your blog title"
              required
              className="w-full px-4 py-2 border rounded-md focus:outline-none bg-[#EDF5E1] bg-opacity-85"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="blog-body" className="block font-semibold mb-2">
              Blog Content:
            </label>
            <textarea
              value={newbody}
              onChange={(e) => setNewBody(e.target.value)}
              id="blog-body"
              placeholder="Enter the content"
              required
              className="w-full min-h-28 px-4 py-2 border rounded-md  focus:outline-none bg-[#EDF5E1] bg-opacity-85"
            ></textarea>
          </div>
          <div className="mb-4">
            <label htmlFor="blog-author" className="block font-semibold mb-2">
              Author:
            </label>
            <input
              value={newauthor}
              onChange={(e) => setNewAuthor(e.target.value)}
              id="blog-author"
              placeholder="Enter your name"
              className="w-full px-4 py-2 border rounded-md focus:outline-none bg-[#EDF5E1] bg-opacity-85"
            />
          </div>
  
          {!isLoading && <button
            type="submit"
            className="w-full mt-2 py-2 bg-[#053865] text-white rounded-md hover:bg-[hsl(208,91%,11%)] transition duration-300 font-semibold"
          >
            Add Blog
          </button>}
          {isLoading && <button disabled
            type="submit"
            className="w-full mt-2 py-2 bg-[#053865] text-white rounded-md hover:bg-[hsl(208,91%,11%)] transition duration-300 font-semibold"
          >
            Adding Blog....
          </button>}
        </form>
      </div>
    </>
  );
};

export default CreateBlog;
