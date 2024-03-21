import { useState, useEffect } from "react";

const useFetch = (url) => {

  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {

    const abortCont = new AbortController();

    setTimeout(() => {
      fetch(url,{signal:abortCont.signal})
        .then(res => {
          if (!res.ok) {
            throw Error("Error 404: could not find the data !! ☹️");
          }
          return res.json();
        })
        .then((data) => {
          setData(data);
          setIsLoading(false);
          setError(null);
        })
        .catch((err) => {
          if(err.name ==='AbortError'){
              console.log('fetch aborted')
          }else{
            setError(err.message);
          setIsLoading(false);
          }
        });
    }, 500);

    return () => abortCont.abort();
  }, []);

  return {data, isLoading, error}
};

export default useFetch;