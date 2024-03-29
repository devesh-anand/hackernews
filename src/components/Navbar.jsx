import "../../node_modules/bootstrap/dist/js/bootstrap.min.js";
import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import authContext from "./auth/authContext.jsx";
import AuthModal from "./auth/AuthModal.jsx";
import firebase from "firebase/compat";

export default function Navbar() {
  const { auth, setAuth } = useContext(authContext);
  const logout = () => {
    try {
      let info = firebase.auth().signOut();
      // console.log(info);
    } catch (e) {
      console.log(e);
    }
    setAuth(false);
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <h2>
          <Link className="text-dark" to="/">
            Hackernews
          </Link>
        </h2>

        {/* <h1 className="navbar-brand" href="/">
          Hackernews
        </h1> */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse flex-row-reverse"
          id="navbarNavDropdown"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink to="/" className="nav-link">
                Top-Stories
              </NavLink>
            </li>
            {/* <li className="nav-item">
              <NavLink to="/newstories" className="nav-link">
                New-Stories
              </NavLink>
            </li> */}
            {auth ? (
              <li className="nav-item">
                <NavLink to="/bookmarks" className="nav-link">
                  Bookmarks
                </NavLink>
              </li>
            ) : (
              // <Login />
              <AuthModal />
            )}
            <li className="nav-item">
              {auth ? (
                <button
                  style={{ position: "relative", top: "4px" }}
                  onClick={logout}
                >
                  Log out
                </button>
              ) : (
                <></>
              )}
            </li>
            <li className="nav-item">
              <p
                style={{
                  color: auth ? "green" : "red",
                  fontSize: "32px",
                }}
              >
                {auth ? (
                  <div
                    style={{
                      color: "green",
                      position: "relative",
                      bottom: "8px",
                      padding: "0 4px",
                    }}
                  >
                    •
                  </div>
                ) : (
                  <div
                    style={{
                      color: "red",
                      position: "relative",
                      bottom: "8px",
                      padding: "0 4px",
                    }}
                  >
                    •
                  </div>
                )}
              </p>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
