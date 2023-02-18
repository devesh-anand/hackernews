import React from "react";

function Pagination({ currPage, pageIncrement, pageDecrement }) {
  // const pages = [...Array(totalPages).keys()].map((num) => num + 1);

  return (
    <nav aria-label="Page navigation">
      <ul className="pagination justify-content-center my-4 text-muted">
        <li className="page-item">
          <button
            className="page-link"
            onClick={() => pageDecrement(currPage)}
            aria-label="Previous"
          >
            <span aria-hidden="true">&laquo;</span>
          </button>
        </li>
        <li className="page-item active">
          <button className="page-link">{currPage}</button>
        </li>
        {/* <li className="page-item">
          <a className="page-link" href="#">
            2
          </a>
        </li> */}
        {/* <li className="page-item">
          <a className="page-link" href="#">
            3
          </a>
        </li> */}
        <li className="page-item">
          <button
            className="page-link"
            onClick={() => pageIncrement(currPage)}
            aria-label="Next"
          >
            <span aria-hidden="true">&raquo;</span>
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Pagination;
