import { useEffect, useState, useLayoutEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import News from "./components/News";
import Loading from "./components/Loading";
import Topstories from "./components/Topstories";

function App() {
  const [stories, setStories] = useState([]);
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);
  // const [idsfetched, setIdsfetched] = useState(0); 

  const retrieveStoryIds = async () => {
    const response = await fetch(
      "https://hacker-news.firebaseio.com/v0/topstories.json"
    );//print=pretty
    let ids = await (response.json());
    ids = ids.slice(0,30)
    console.log(ids);
    setStories(ids);
  };

  useEffect(() => {
    setTimeout(() => {
      retrieveStoryIds();
    // console.log(new Date(1653736511*1000))
    // setIdsfetched(true);
    setLoading(true);
    }, 2000)
  }, []);


  useEffect(() => {
    // individualNews();
    setNews([]);
    stories.forEach(async (storyId) => {
      const response = await fetch(
        `https://hacker-news.firebaseio.com/v0/item/${storyId}.json`
      );
      const data = await response.json();
      setNews((news) => [...news, data]); 
    });
  }, [stories]);

  return (
    <div className="App">
      <Navbar />

      { !loading ? <Loading/>:<Topstories data={news}/>}
      
    </div>
  );
}

export default App;
