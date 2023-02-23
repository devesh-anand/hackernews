import "../../node_modules/bootstrap/dist/js/bootstrap.min.js";
import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import authContext from "./auth/authContext.jsx";

export default function Navbar() {
  const { auth } = useContext(authContext);
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
            <li className="nav-item">
              <NavLink to="/newstories" className="nav-link">
                New-Stories
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/bookmarks" className="nav-link">
                Bookmarks
              </NavLink>
            </li>
            <li className="nav-item">
              <p
                style={{
                  color: auth ? "green" : "red",
                  fontSize: "32px",
                }}
              >
                {auth ? "in" : "out"}
              </p>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
