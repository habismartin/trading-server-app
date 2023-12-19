import React from "react";
import '../adminStyles/table.css'

const Pagination = ({ pageNumber, setPage }) => {
  const arr = Array.from(Array(pageNumber).keys());

  return (
    <nav aria-label="Page navigation">
      <ul className="pagination">
        {arr?.map(p => (
          <li key={p} className="page-item">
            <button className="page-link" onClick={e=>setPage(e.target.textContent)}>
             {++p}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
