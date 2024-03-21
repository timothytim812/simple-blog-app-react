import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <div className="flex flex-row items-center justify-between text-xl mt-5 mx-8 pb-4 border-b-stone-500 border-b-[1px]">
        <div>
          <h1 className="text-red-500 font-bold text-2xl capitalize">Simple Blog Website</h1>
        </div>
        <div className="flex flex-row justify-between font-semibold">
          <div className="mx-5">
            < Link to="/">Home</Link>
          </div>
          <span>|</span>
          <div className="mx-5">
          < Link to="/create-blog"> Create New Blog</Link>
          </div>
          {/* <span>|</span>
          <div className="ml-5">
          < Link>Contact</Link>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default NavBar;
