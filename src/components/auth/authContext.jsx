import { createContext } from "react";

const authContext = createContext({
  authenticated: false,
  setAuthenticated: () => {},
});

export default authContext;
