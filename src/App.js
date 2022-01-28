import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import News from "./components/News";
import moment from "moment";

function App() {
  const [stories, setStories] = useState([]);
  const [news, setNews] = useState([]);

  const retrieveStoryIds = async () => {
    const response = await fetch(
      "https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty"
    );
    const ids = await response.json();
    setStories(ids);
  };

  useEffect(() => {
    retrieveStoryIds();
  }, []);

  useEffect(() => {
    stories.slice(0, 30).forEach(async (storyId) => {
      const response = await fetch(
        `https://hacker-news.firebaseio.com/v0/item/${storyId}.json?print=pretty`
      );
      const data = await response.json();
      setNews((prev) => [...prev, data]);
    });
  }, [stories]);

  return (
    <div className="App">
      <Navbar />
      <div style={{ color: "white" }}>
        {news &&
          news.map((story) => (
            <News
              key={story.id}
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
