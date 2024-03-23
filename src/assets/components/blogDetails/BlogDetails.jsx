import { deleteDoc, doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { db } from "../../../../firebase.config";
// import useFetch from "../../custom/useFetch";

const BlogDetails = () => {

  // Local Host testing purposes

  // const { id } = useParams();
  // const { data:blog, error, isLoading } = useFetch(
  //   `http://localhost:8000/blogs/${id}`
  // );
  // const navigate = useNavigate();

  // const handleClick = () => {
  //   fetch(`http://localhost:8000/blogs/${blog.id}`, {
  //     method:'DELETE'
  //   }).then(()=>{
  //     navigate("/")
  //   })
  // }

  //  firebase production mode

  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const Blog = async () => {
      try {
        const docRef = doc(db, "blogs", id);
        const blogDoc = await getDoc(docRef);
        if (blogDoc.exists()) {
          setBlog({ ...blogDoc.data(), id: blogDoc.id });
        } else {
          setError("Blog not found");
        }
      } catch (err) {
        console.error("Error fetching blog:", err);
        setError("Error fetching blog");
      } finally {
        setIsLoading(false);
      }
    };

    Blog();
  }, [id]);

  const handleClick = async () => {
    try {
      const docRef = doc(db, "blogs", id);
      await deleteDoc(docRef);
      navigate("/");
    } catch (err) {
      console.error("Error deleting blog:", err);
      setError("Error deleting blog");
    }
  };

  return (
    <div className=" w-[800px]">
      {isLoading && (
        <div className="m-10 text-xl p-10 mx-8 shadow-lg border bg-slate-100 rounded-lg font-semibold text-center">
          Loading......
        </div>
      )}
      {error && (
        <div className="m-10  text-xl p-10 mx-8 shadow-lg border bg-slate-100 rounded-lg font-semibold text-center">
          {error}
        </div>
      )}
      {blog && (
        <>
          <article className="m-10 text-xl p-4 mx-8 bg-[#EDF5E1] hover:shadow-lg hover:shadow-bg-[#EDF5E1]  rounded-lg flex justify-between flex-col">
            <h1 className=" my-5 text-3xl font-semibold text-blue-950 px-4">
              {blog.title}
            </h1>
            <p className="m-5 text-justify text-lg">{blog.body}</p>
            <div className="flex items-center justify-between">
            <p className="text-base text-justify text-slate-500 py-2 px-4">
              Written by {blog.author}
            </p>
            <div >
            <Link className=" mt-2 mr-5 py-2 px-4 bg-[#053865] text-white rounded-md hover:bg-[hsl(208,91%,11%)]  transition duration-300" to="/"> Home </Link>
            <button className=" mt-2 py-2 px-4 bg-[#053865] text-white rounded-md hover:bg-[hsl(208,91%,11%)]  transition duration-300" onClick={handleClick}>delete</button>
            </div>
            </div> 
          </article>
        </>
      )}
    </div>
  );
};

export default BlogDetails;
