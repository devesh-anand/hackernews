import React from "react";
import News from "./News";

function Newsfeed({ data }) {
  console.log(data);
  return (
    <div style={{ color: "white" }}>
      {data &&
        data.map((story) => (
          <News
            key={story.id}
            author={story.by}
            title={story.title}
            url={
              story.url === undefined
                ? `https://news.ycombinator.com/item?id=${story.id}`
                : story.url
            }
            baseurl={
              story.url === undefined
                ? "news.ycombinator.com"
                : new URL(story.url).host
            }
            score={story.score != null ? story.score : 0}
            comments={story.descendants != null ? story.descendants : 0}
            time={story.time}
          />
        ))}
    </div>
  );
}

export default Newsfeed;
