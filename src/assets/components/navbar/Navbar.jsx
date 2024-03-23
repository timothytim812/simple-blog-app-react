import { Link } from "react-router-dom";
import 'font-awesome/css/font-awesome.min.css';

const NavBar = () => {
  return (
    <>
      <div className="flex flex-row items-center justify-between text-xl mt-5 mx-8 pb-4 border-b-stone-400 border-b-[1px]">
      <div className="flex flex-row justify-between font-semibold">
          <div className="mx-5 bg-[#053865] rounded-3xl px-3 pb-2 pt-1 shadow-2xl shadow-black text-xl text-white">
            < Link to="/">
              <i className="fa fa-home"></i>
            </Link>
          </div>
        </div>
        <div>
          <h1 className="text-[#EDF5E1] font-bold text-2xl uppercase">Simply Blog Website </h1>
        </div>
        <div className="flex flex-row justify-between font-semibold">
          <div className="mx-5 bg-[#053865] rounded-3xl px-3 pb-2 pt-0.5 shadow-2xl shadow-black text-2xl text-white">
          < Link to="/create-blog">
          +
          </Link>
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
