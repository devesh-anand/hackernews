import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import News from "./components/News";

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
    // console.log(news);
  }, [stories]);

  // useEffect(() => {
  //   console.log(news);
  // }, [news]);

  const baseur = (url) => {
    let finaluri = new URL(url).host;
    console.log(finaluri);
    return (finaluri);
  }

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
              url={story.url}
              // baseurl={() => {return (new URL(story.url).host)}}
              score={story.score != null ? story.score : 0}
              comments={story.descendants != null ? story.descendants : 0}
            />
          ))}
      </div>
    </div>
  );
}

export default App;