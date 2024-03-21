import { Link, useNavigate, useParams } from "react-router-dom";
import useFetch from "../../custom/useFetch";

const BlogDetails = () => {
  const { id } = useParams();
  const { data:blog, error, isLoading } = useFetch(
    `http://localhost:8000/blogs/${id}`
  );
  const navigate = useNavigate();

  const handleClick = () => {
    fetch(`http://localhost:8000/blogs/${blog.id}`, {
      method:'DELETE'
    }).then(()=>{
      navigate("/")
    })
  }

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
          <article className="m-10 text-xl p-4 mx-8 bg-slate-100 hover:shadow-lg hover:shadow-neutral-400 rounded-lg flex justify-between flex-col">
            <h1 className=" my-5 text-3xl font-semibold text-red-600 px-4">
              {blog.title}
            </h1>
            <p className="m-5 text-justify text-lg">{blog.body}</p>
            <div className="flex items-center justify-between">
            <p className="text-base text-justify text-slate-500 py-2 px-4">
              Written by {blog.author}
            </p>
            <div >
            <Link className=" mt-2 mr-5 py-2 px-4 bg-red-400 text-white rounded-md hover:bg-red-500 transition duration-300" to="/"> Home </Link>
            <button className=" mt-2 py-2 px-4 bg-red-400 text-white rounded-md hover:bg-red-500 transition duration-300" onClick={handleClick}>delete</button>
            </div>
            </div> 
          </article>
        </>
      )}
    </div>
  );
};

export default BlogDetails;
