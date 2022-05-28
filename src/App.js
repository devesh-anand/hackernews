import { useEffect, useState, useLayoutEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import News from "./components/News";

function App() {
  const [stories, setStories] = useState([]);
  const [news, setNews] = useState([]);
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
    retrieveStoryIds();
    console.log(new Date(1653736511*1000))
    // setIdsfetched(true);
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
      <div style={{ color: "white" }}>
        {news &&
          news.map((story) => (
            <News
              key={story.id + story.title}
              author={story.by}
              title={story.title}
              url={
                story.url === undefined
                  ? `https://news.ycombinator.com/item?id=${story.id}`
                  : story.url
              }
              baseurl={
                story.url === undefined
                  ? "news.ycombinator.com"
                  : new URL(story.url).host
              }
              score={story.score != null ? story.score : 0}
              comments={story.descendants != null ? story.descendants : 0}
              time={story.time}
            />
          ))}
      </div>
    </div>
  );
}

export default App;
