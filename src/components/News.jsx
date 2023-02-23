import { React, useState, useContext } from "react";
import {
  FaArrowUp,
  FaRegComments,
  FaRegClock,
  FaRegBookmark,
  FaBookmark,
} from "react-icons/fa";
import { formatDistance } from "date-fns";
import { toDate } from "date-fns/esm";
import authContext from "./auth/authContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const News = ({ author, title, url, score, comments, baseurl, time }) => {
  const { auth } = useContext(authContext);

  const notify = (message) => {
    if (message) {
      toast.success("Added!");
    } else {
      toast.error("login first");
    }
  };

  const [bookmark, setBookmark] = useState(false);
  const bookmarkItem = () => {
    if (auth) {
      setBookmark(!bookmark);
      if (!bookmark) notify(true);
    } else {
      notify(false);
    }
  };
  return (
    <div className="container-sm bg-light flex-row main-card p-3">
      <div className="content px-2 py-1 mx-1 d-flex flex-row no-wrap">
        <div className="col-sm-3 pe-4 extras author">by {author}</div>
        <div className="col-sm extras baseurl">
          <a
            className="text-secondary hover:text-warning"
            href={"http://" + baseurl}
            target="_blank"
            rel="noreferrer noopener"
          >
            ({baseurl})
          </a>
        </div>
        <button
          className="ms-auto"
          style={{ border: "none", background: "inherit" }}
          onClick={bookmarkItem}
        >
          {bookmark ? <FaBookmark /> : <FaRegBookmark />}
        </button>
      </div>

      <a
        className="content main-heading px-2 mx-1 d-flex"
        href={url}
        target="_blank"
        rel="noreferrer noopener"
      >
        {title}
      </a>

      <div className="content p-2 mx-1 d-flex justify-content-between extras score">
        <div>
          <FaArrowUp /> {score}
        </div>
        <div>
          <i className="bi bi-chat-right-text comments"></i>
          <FaRegComments /> {comments}
        </div>
        <div className="time">
          <FaRegClock />
          {"  "}
          {formatDistance(toDate(time * 1000), new Date(), { addSuffix: true })}
        </div>
      </div>
    </div>
  );
};

export default News;
