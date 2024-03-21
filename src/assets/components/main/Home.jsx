import Blogs from "../blogs/Blogs";
import useFetch from "../../custom/useFetch";

const Home = () => {
  const {
    data: blogs,
    isLoading,
    error,
  } = useFetch("http://localhost:8000/blogs");

  return (
    <>
      <div>
        {error && (
          <div className="m-10  text-xl p-10 mx-8 shadow-lg border bg-slate-100 rounded-lg font-semibold text-center">
            {error}
          </div>
        )}
        {isLoading && (
          <div className="m-10 text-xl p-10 mx-8 shadow-lg border bg-slate-100 rounded-lg font-semibold text-center">
            Loading......
          </div>
        )}
        <Blogs blogs={blogs} title={"All blogs !"} />
        <Blogs blogs={blogs && blogs.filter((blog) => blog.author === 'Solulu') } title={"Solulu's blogs!"} />
        <Blogs blogs={blogs && blogs.filter((blog) => blog.author === 'Delulu') } title={"Delulu's blogs!"} />
      </div>
    </>
  );
};

export default Home;
