import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const [isLoading, setIsLoading] = useState(true);


  useEffect(()=>{
    fetch('http://localhost:8111/blfogs')
      .then(
        res=>{
          return res.json();
        }
      )
      .then(
        data=>{
          setBlogs(data, setIsLoading(false))
        }
      ).catch(err=>{
        console.log("guess what Erorr time that u will never understands it and u will take days and hours", err)
      })
  },[]);

  return (
   <div className="home">
    {isLoading && <h1>I am Loading Just a sec 😍👌</h1>}
    { blogs && <BlogList blogs={blogs} title="all Blogs" />}
    </div>
  );
}
 
export default Home;