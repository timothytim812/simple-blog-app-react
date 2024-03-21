import { Link } from "react-router-dom";

const NotFound = () => {

  return (
    <div className="m-56  text-4xl p-10 mx-8 shadow-lg border bg-slate-100 rounded-lg font-semibold text-center">
      <h1 className="mb-10">
        Error 404 :
      </h1>
      <p className="mb-10">
      Page Not found  👀
      </p>
      <Link className=" mt-2 mr-5 py-2 px-4 bg-red-400 text-white rounded-md hover:bg-red-500 transition duration-300 text-base" to="/"> Home </Link>
    </div>
  )
}

export default NotFound;