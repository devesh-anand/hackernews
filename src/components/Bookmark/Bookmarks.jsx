import React, { useContext, useEffect, useState } from "react";
import firebaseInit from "../firebase/firestore";

import Feed from "./Feed";
import authContext from "../auth/authContext";

function Bookmarks() {
  const { auth } = useContext(authContext);
  const [storyIds, setStoryIds] = useState([]);
  const db = firebaseInit.firestore();
  const currentUser = firebaseInit.auth().currentUser;

  const getBookmarks = () => {
    console.log("getBookmarks called", currentUser.uid, storyIds);
    let temp = [];
    db.collection("bookmarks")
      .where("uid", "==", currentUser.uid)
      .get()
      .then((doc) => {
        doc.forEach((i) => {
          let data = i.data();
          console.log(data);
          temp.push(data.storyId);
          // setStoryIds((prev) => [...prev, i.data().storyId]);
        });
        setStoryIds(temp);
        console.log(storyIds);
        temp = [];
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    if (auth) getBookmarks();
  }, []);
  return (
    <div>
      {auth ? (
        <Feed stories={storyIds} />
      ) : (
        <div style={{ color: "white" }}>Login First</div>
      )}

      {/* <Feed stories={storyIds} /> */}
    </div>
  );
}

export default Bookmarks;
