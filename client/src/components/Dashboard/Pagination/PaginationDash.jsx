import React, { useState, useEffect } from "react";

const Pagination = ({ itemsPerPage, data }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [paginatedData, setPaginatedData] = useState([]);

  useEffect(() => {
    setPaginatedData(data.slice(0, itemsPerPage));
  }, [data, itemsPerPage]);

  const handleClick = (pageNumber) => {
    const startIndex = (pageNumber - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    setPaginatedData(data.slice(startIndex, endIndex));
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      {paginatedData.map((item, index) => (
        <div key={index}>{            item.name        }</div>
      ))}
      <div>
        {data.map((_, index) => (
          <button
            key={index}
            onClick={() => handleClick(index + 1)}
            disabled={currentPage === index + 1}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Pagination;
