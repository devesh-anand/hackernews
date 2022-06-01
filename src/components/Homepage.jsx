import { useEffect, useState, useLayoutEffect } from "react";
import "./../App.css";
import axios from "axios";
import Loading from "./Loading";
import Newsfeed from "./Newsfeed";

//The topstories and newstories will have different components (due to routing)
function Homepage() {
  const [stories, setStories] = useState([]);
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);

  const retrieveStoryIds = async () => {
    const response = await fetch(
      "https://hacker-news.firebaseio.com/v0/topstories.json"
    ); //print=pretty
    let ids = await response.json();
    ids = ids.slice(0, 30);
    setStories(ids);
  };

  useEffect(() => {
    setTimeout(() => {
      retrieveStoryIds();
      setLoading(true);
    }, 1000);
  }, []);

  useEffect(() => {
    setNews([]);
    stories.forEach(async (storyId) => {
      const response = await axios.get(
        `https://hacker-news.firebaseio.com/v0/item/${storyId}.json`
      );
      setNews((news) => [...news, response.data]);
    });
  }, [stories]);

  return (
    <div className="App">
      {!loading ? <Loading /> : <Newsfeed data={news} />}
    </div>
  );
}

export default Homepage;
