import { useEffect, useState, useLayoutEffect } from "react";
import "./../../App.css";
import axios from "axios";
import Loading from "./../Loading";
import Newsfeed from "./../Newsfeed";

//The topstories and newstories logic will be here for now
function Feed({ stories }) {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setNews([]);
    stories.forEach(async (storyId) => {
      const response = await axios.get(
        `https://hacker-news.firebaseio.com/v0/item/${storyId}.json`
      );
      // console.log(response.data);
      setNews((news) => [...news, response.data]);
    });
  }, [stories]);

  return (
    <div className="App">
      {/* {!loading ? <Loading /> : <Newsfeed data={news} />} */}

      <Newsfeed data={news} bookmarked={true} />
    </div>
  );
}

export default Feed;
