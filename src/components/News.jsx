import React from "react";

const news = ({ author, title, url }) => {
  return (
    <div className="container-sm bg-light flex-row main-card p-3">
      <div className="content px-2 py-1 mx-1 d-flex flex-row no-wrap">
        <div className="col-sm-3 pe-4 extras">by {author}</div>
        <div className="col-sm extras">({url})</div>
      </div>

      <a className="content main-heading px-2 mx-1 d-flex" href={url}>
        {title}
      </a>

      <div className="content p-2 mx-1 d-flex justify-content-between extras">
        <div>
          <i className="bi bi-caret-up"></i>182
        </div>
        <div>
          <i className="bi bi-chat-right-text"></i> 36
        </div>
        <div>4 hours ago</div>
      </div>
    </div>
  );
};

export default news;
