import { useEffect, useState, useLayoutEffect } from "react";
import "./../App.css";
import axios from "axios";
import Loading from "./Loading";
import Newsfeed from "./Newsfeed";
import Pagination from "./Pagination";

//The topstories and newstories will have different components (due to routing)
function Homepage() {
  const [stories, setStories] = useState([]);
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [index, setIndex] = useState({
    start: 0,
    end: 30,
  });

  // console.log(index.start + " " + index.end);

  const retrieveStoryIds = async () => {
    const response = await fetch(
      "https://hacker-news.firebaseio.com/v0/topstories.json"
    ); //print=pretty
    let totalIds = await response.json();
    setIndex({
      start: (currentPage - 1) * 30,
      end: currentPage * 30,
    });
    let ids = totalIds.slice(index.start, index.end);
    setStories(ids);

    setTotalPages(Math.ceil(totalIds.length / 30));
  };

  useEffect(() => {
    setTimeout(() => {
      retrieveStoryIds();
      setLoading(true);
    }, 1000);
  }, [currentPage]);

  useEffect(() => {
    setNews([]);
    stories.forEach(async (storyId) => {
      const response = await axios.get(
        `https://hacker-news.firebaseio.com/v0/item/${storyId}.json`
      );
      setNews((news) => [...news, response.data]);
    });
  }, [stories]);

  const incPage = (num) => {
    if (num < 17) setCurrentPage(num + 1);
  };

  const decPage = (num) => {
    if (num > 1) setCurrentPage(num - 1);
  };

  return (
    <div className="App">
      {!loading ? <Loading /> : <Newsfeed data={news} />}

      <Pagination
        totalPages={totalPages}
        currPage={currentPage}
        pageIncrement={incPage}
        pageDecrement={decPage}
      />
    </div>
  );
}

export default Homepage;
