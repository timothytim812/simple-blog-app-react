import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./Routes";
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
