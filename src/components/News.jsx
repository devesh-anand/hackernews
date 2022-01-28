import React from "react";
import { FaArrowUp, FaRegComments, FaRegClock } from "react-icons/fa";

const news = ({ author, title, url, score, comments, baseurl }) => {
  return (
    <div className="container-sm bg-light flex-row main-card p-3">
      <div className="content px-2 py-1 mx-1 d-flex flex-row no-wrap">
        <div className="col-sm-3 pe-4 extras">by {author}</div>
        <div className="col-sm extras">({baseurl})</div>
      </div>

      <a
        className="content main-heading px-2 mx-1 d-flex"
        href={url}
        target="_blank"
        rel="noreferrer noopener"
      >
        {title}
      </a>

      <div className="content p-2 mx-1 d-flex justify-content-between extras">
        <div>
          <FaArrowUp /> {score}
        </div>
        <div>
          <i className="bi bi-chat-right-text"></i>
          <FaRegComments /> {comments}
        </div>
        <div>
          <FaRegClock /> 4 hours ago
        </div>
      </div>
    </div>
  );
};

export default news;
