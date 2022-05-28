export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid d-flex justify-content-center">
        <h2 href="/">Hackernews</h2>
        {/* <h1 className="navbar-brand" href="/">
          Hackernews
        </h1> */}
        {/* <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button> */}
        <div
          className="collapse navbar-collapse flex-row-reverse"
          id="navbarNavDropdown"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                New
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Past
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Comments
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Ask
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Show
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Jobs
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Submit
              </a>
            </li>
            {/* <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown link
              </a>
              <ul
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
}
