import { React, createContext } from "react";

const bookmarksUpdated = createContext({
  updated: false,
  setUpdated: () => {},
});

export default bookmarksUpdated;
