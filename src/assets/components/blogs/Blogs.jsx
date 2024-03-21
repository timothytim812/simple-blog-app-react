import { Link } from "react-router-dom";

const Blogs = ({ title, blogs }) => {
  return (
    <>
      <div>
        {blogs && (
          <>
            <h1 className=" font-semibold text-2xl p-4 mx-5 mt-5 mb-2">
              {title}
            </h1>
            <div className="grid grid-cols-2 gap-4">
              {blogs.map((blog) => (
                <Link to={`/blogs/${blog.id}`}>
                  <div
                    key={blog.id}
                    className="mb-10 text-xl p-4 mx-8 bg-slate-100 hover:shadow-lg hover:shadow-neutral-400 rounded-lg"
                  >
                    <h1 className="font-semibold text-red-600 px-4">
                      {blog.title}
                    </h1>
                    <p className="m-5 text-justify text-lg text-limi-to-two-line">
                      {blog.body}
                    </p>
                    <span className="text-base text-justify text-slate-500 py-2 px-4">
                      Blogger : {blog.author}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Blogs;
