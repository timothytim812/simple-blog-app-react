import { useRoutes } from "react-router-dom"
import LandingPage from "./assets/pages/landingPage"
import NewBlog from "./assets/pages/newBlogs";
import Contact from "./assets/pages/contact";
import NotFound from "./assets/pages/Notfound";
import DetailsPage from "./assets/pages/blogdetails";


const MyprojectRoutes = () => {

  let element = useRoutes([
    {
      path: "/",
      element: <LandingPage/>,
    },
    {
      path: "/create-blog",
      element: <NewBlog/>,
    },
    {
      path: "/blogs/:id",
      element: <DetailsPage/>,
    },
    {
      path: "/contact",
      element: <Contact/>,
    },
    {
      path: "*",
      element: <NotFound/>
    }
  ])

  return element;
}

export default MyprojectRoutes;