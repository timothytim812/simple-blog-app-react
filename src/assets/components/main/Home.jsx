import { useEffect, useState } from "react";
import Blogs from "../blogs/Blogs";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../../firebase.config";
// import useFetch from "../../custom/useFetch";

export const collectionRef = collection(db , 'blogs');

const Home = () => {

  // Localhost testing using custom useFetch hook 

  // const {
  //   data: blogs,
  //   isLoading,
  //   error,
  // } = useFetch("http://localhost:8000/blogs"); this is for loacl host


  //  Fetching data from firestore for production mode

  const [blogs,setBlogs] = useState();
  const [isLoading, setIsLoading] = useState();
  const [error, setError] = useState(null);

  useEffect(() => {

    const abortCont = new AbortController();

    const blogData= async () => {
      try {
        const blogs= await getDocs(collectionRef, { signal: abortCont.signal });
        const data = blogs.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
        setBlogs(data);
        setIsLoading(false);
      } catch (err) {
        if (err.name === 'AbortError') {
          console.log('Fetch aborted');
        } else {
          setError("Error 404: Couldn't fetch the data ! ☹️");
          setIsLoading(false);
        }
      }
    };

    blogData();

    return () => abortCont.abort();

  },[])

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
        <Blogs blogs={blogs} title={"All blogs !" } />
        <Blogs blogs={blogs && blogs.filter((blog) => blog.author === 'Solulu') } title={"Solulu's blogs!"} />
        <Blogs blogs={blogs && blogs.filter((blog) => blog.author === 'Delulu') } title={"Delulu's blogs!"} />
      </div>
    </>
  );
};

export default Home;
