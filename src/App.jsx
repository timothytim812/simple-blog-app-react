import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./Routes";
import NavBar from "./assets/components/navbar/Navbar";




const App = () => {
  

  return (
    <>
        <Router>
          <div className=" max-w-[850px] mx-auto  h-screen">
          <Routes />
          </div>
        </Router>
    </>
  );
};

export default App;
