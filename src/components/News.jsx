import { React, useState } from "react";
import { FaArrowUp, FaRegComments, FaRegClock } from "react-icons/fa";
import { formatDistance } from "date-fns";
import { toDate } from "date-fns/esm";

const News = ({ author, title, url, score, comments, baseurl, time }) => {
  const [date, setDate] = useState(toDate(time * 1000));
  // console.log(time * 1000);

  return (
    <div className="container-sm bg-light flex-row main-card p-3">
      <div className="content px-2 py-1 mx-1 d-flex flex-row no-wrap">
        <div className="col-sm-3 pe-4 extras">by {author}</div>
        <div className="col-sm extras">
          <a
            href={"http://" + baseurl}
            target="_blank"
            rel="noreferrer noopener"
          >
            ({baseurl})
          </a>
        </div>
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
          <FaRegClock />
          {"  "}
          {formatDistance(toDate(time * 1000), new Date(), { addSuffix: true })}
        </div>
      </div>
    </div>
  );
};

export default News;
