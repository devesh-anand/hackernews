import React, { useContext, useEffect, useState } from "react";
import firebaseInit from "../firebase/firestore";
import Feed from "./Feed";
import authContext from "../auth/authContext";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import bookmarksUpdated from "./bookmarksUpdated";

function Bookmarks() {
  const { auth, setAuth } = useContext(authContext);
  const [storyIds, setStoryIds] = useState([]);
  const db = firebaseInit.firestore();
  const currentUser = firebaseInit.auth().currentUser;

  const { bookmarksUpdatedOrNot, setBookmarksUpdated } =
    useContext(bookmarksUpdated);
  // console.log(bookmarksUpdatedOrNot);
  const getBookmarks = () => {
    // console.log("getBookmarks called", currentUser.uid, storyIds);
    let temp = [];
    db.collection("bookmarks")
      .where("uid", "==", currentUser.uid)
      .orderBy("date", "desc")
      .get()
      .then((doc) => {
        doc.forEach((i) => {
          let data = i.data();
          // console.log(data);
          temp.push(data.storyId);
          // setStoryIds((prev) => [...prev, i.data().storyId]);
        });
        setStoryIds(temp);
        // console.log(storyIds);
        temp = [];
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    onAuthStateChanged(getAuth(), (user) => {
      if (user) {
        setAuth(true);
        // console.log("user login persists");
      }
    });
  }, []);

  useEffect(() => {
    if (auth) {
      getBookmarks();
      // console.log("rerendered");
    }
  }, [auth, bookmarksUpdatedOrNot]);
  return (
    <div>
      {auth ? (
        storyIds.length ? (
          <Feed stories={storyIds} />
        ) : (
          <p style={{ color: "white" }}>No bookmarks yet</p>
        )
      ) : (
        <div style={{ color: "white" }}>Login First</div>
      )}

      {/* <Feed stories={storyIds} /> */}
    </div>
  );
}

export default Bookmarks;
