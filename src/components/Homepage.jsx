import { useEffect, useState, useContext } from "react";
import "./../App.css";
import axios from "axios";
import Loading from "./Loading";
import Newsfeed from "./Newsfeed";
import Pagination from "./Pagination";
import authContext from "./auth/authContext";

import { getAuth, onAuthStateChanged } from "firebase/auth";

//The topstories and newstories will have different components (due to routing)
function Homepage() {
  const [allIds, setAllIds] = useState([]);
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);

  const incPage = (num) => {
    if (num < 17) setCurrentPage(num + 1);
  };

  const decPage = (num) => {
    if (num > 1) setCurrentPage(num - 1);
  };

  const retrieveStoryIds = async () => {
    const response = await fetch(
      "https://hacker-news.firebaseio.com/v0/topstories.json"
    );
    let totalIds = await response.json();

    // console.log("retrived in first render");
    setAllIds(totalIds);
  };

  async function setCurrentPageData() {
    console.log("current page", currentPage);

    fetchNews((currentPage - 1) * 10, currentPage * 10);
  }

  async function fetchNews(start, end) {
    if (allIds.length) {
      let temp = [];
      for (let i = start; i < end; i++) {
        const response = await axios.get(
          `https://hacker-news.firebaseio.com/v0/item/${allIds[i]}.json`
        );

        temp.push(response.data);
        // console.log(response.data);
      }

      setNews(temp);
      setLoading(true);
    } else {
      console.log("no stories");
    }
  }

  useEffect(() => {
    setLoading(false);
    setCurrentPageData();
    window.scrollTo(0, 0);
  }, [currentPage, allIds]);

  const { auth, setAuth } = useContext(authContext);
  useEffect(() => {
    onAuthStateChanged(getAuth(), (user) => {
      if (user) {
        setAuth(true);
        console.log("user login persists");
      }
    });
    retrieveStoryIds();
  }, []);

  return (
    <div className="App">
      {!loading ? <Loading /> : news && <Newsfeed data={news} />}

      <Pagination
        currPage={currentPage}
        pageIncrement={incPage}
        pageDecrement={decPage}
      />
    </div>
  );
}

export default Homepage;
