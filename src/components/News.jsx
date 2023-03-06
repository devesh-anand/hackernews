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

import firebaseInit from "./firebase/firestore";

const News = ({
  author,
  title,
  url,
  score,
  comments,
  baseurl,
  time,
  id,
  bookmarked,
}) => {
  const { auth } = useContext(authContext);

  const db = firebaseInit.firestore();
  const notify = (message) => {
    if (message == true) {
      toast.success("Added!");
    } else {
      toast.error(message);
    }
  };

  const [bookmark, setBookmark] = useState(false);
  const bookmarkItem = () => {
    if (auth) {
      setBookmark(!bookmark);

      let currentUser = firebaseInit.auth().currentUser;

      db.collection("bookmarks")
        .where("uid", "==", currentUser.uid)
        .where("storyId", "==", id)
        .get()
        .then((snapshot) => {
          if (snapshot.empty) {
            db.collection("bookmarks")
              .add({
                uid: currentUser.uid,
                storyId: id,
              })
              .then(() => {
                console.log("Document successfully written!");
                notify(true);
              })
              .catch((error) => {
                console.error("Error writing document: ", error);
              });
          } else {
            console.log("already exists");
            snapshot.forEach((snap) => {
              snap.ref.delete();
            });
            notify("already exists");
          }
        })
        .catch((e) => {
          console.log(e);
        });

      // if (!bookmark) notify(true);
    } else {
      notify("login first");
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
          {bookmark || bookmarked ? <FaBookmark /> : <FaRegBookmark />}
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
