import React from "react";
import { FaArrowUp, FaRegComments, FaRegClock } from "react-icons/fa";
import moment from "moment";

const news = ({ author, title, url, score, comments, baseurl, time }) => {
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
          <FaRegClock />{" "}
          {moment(
            moment.unix(time).format("DD MM YYYY hh:mm:ss"),
            "DD MM YYYY hh:mm:ss"
          ).fromNow()}
        </div>
      </div>
    </div>
  );
};

export default news;
