import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import News from "./components/News";

function App() {
  const [stories, setStories] = useState([]);
  const [news, setNews] = useState([]);

  const getId = async () => {
    const response = await fetch(
      "https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty"
    );
    const ids = await response.json();
    setStories(ids);
  }; //try using promise

  async function getStory(id) {
    const response = await fetch(
      `https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`
    );
    const data = await response.json();
    // console.log(data);
    news.push(data);
    setNews(news);
    // console.log(news);
  }

  useEffect(() => {
    getId();
  }, []);

  useEffect(() => {
    if (stories.length >= 500) {
      stories.slice(0, 30).map((storyId) => {
        return getStory(storyId);
      });
      console.log("news", news);
      console.log("by", news);
    }
  }, [stories]);

  return (
    <div className="App">
      <Navbar />

      <div style={{ color: "white" }}>
        Hello
        {/* <p> Helle there {news[0] !== undefined ? news[0].by : "not loaded "}</p> */}
      </div>

      {
        // news.map((story) => (
        // <News
        //   key={story.id}
        //   title={story.title}
        // author={news[0].by}
        // comments={story.kids}
        // time={story.time}
        // upvotes={story.score}
        // />
        // ))
      }
    </div>
  );
}

export default App;
