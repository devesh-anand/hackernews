import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar'
import News from './components/News';

function App() {
  const [stories, setStories] = useState([]);
  const [news, setNews] = useState([]);

  const getId = async () => {
    const response = await fetch("https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty");
    const ids = await response.json();
    setStories(ids);
    console.log(ids);
  };//try using promise
  async function getStory(id) {
    const response = await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`);
    const data = await response.json();
    setNews(data);
    console.log(data);
  };

  useEffect( () => {
    getId();
  },[]);

  useEffect( () => {
    
    getStory(29761166);
  },[]);

  return (
    <div className="App">
      <Navbar />
      
      {/* {[...stories(30)].map((story, i) => {
        getStory(story);

        
        // useEffect(getStory(story),[]);
      })}; */}

      {/* { news.map(story => {
        <News 
        key={story.id} 
        title={story.title} 
        author={story.by} 
        comments={story.kids.length} 
        time={story.time} 
        upvotes={story.score} 
        />
      })
      } */}

    </div>
  );
}

export default App;
