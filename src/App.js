import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar'
import News from './components/News';

function App() {
  const [stories, setStories] = useState([]);

  useEffect( () => {
    const getId = async () => {
      const response = await fetch("https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty");
      const ids = await response.json();
      setStories(ids.hits);
      console.log(ids.hits);
    };
    getId();
  },[]);

  return (
    <div className="App">
      <Navbar />
      
      <News />
      <News />
      <News />
      <News />
      <News />
    </div>
  );
}

export default App;
