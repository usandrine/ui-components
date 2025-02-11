import React, { useState } from "react";

const Table = () => {
  // Sample data
  const tableData = [
    { id: 1, name: "John Doe", age: 28 },
    { id: 2, name: "Jane Smith", age: 34 },
    { id: 3, name: "Sam Wilson", age: 22 },
    { id: 4, name: "Chris Johnson", age: 40 },
    { id: 5, name: "Patricia Brown", age: 26 },
    { id: 6, name: "Linda Davis", age: 31 },
    { id: 7, name: "Michael Garcia", age: 29 },
    { id: 8, name: "Sarah Lee", age: 35 },
    { id: 9, name: "David Martinez", age: 37 },
    { id: 10, name: "James Harris", age: 41 },
  ];

  // State for sorting, filtering, and pagination
  const [sortConfig, setSortConfig] = useState(null);
  const [filter, setFilter] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 5;

  // Sort the table data based on the selected column
  const sortedData = React.useMemo(() => {
    let sortableData = [...tableData];
    if (sortConfig !== null) {
      sortableData.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableData;
  }, [tableData, sortConfig]);

  // Filter the data based on the filter text
  const filteredData = sortedData.filter((row) =>
    row.name.toLowerCase().includes(filter.toLowerCase())
  );

  // Paginate the filtered and sorted data
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = filteredData.slice(indexOfFirstRow, indexOfLastRow);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Sort table by column
  const requestSort = (key) => {
    let direction = "ascending";
    if (sortConfig && sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  return (
    <div>
      <h2>Users Table</h2>
      <input
        type="text"
        placeholder="Filter by name"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th onClick={() => requestSort("id")}>ID</th>
            <th onClick={() => requestSort("name")}>Name</th>
            <th onClick={() => requestSort("age")}>Age</th>
          </tr>
        </thead>
        <tbody>
          {currentRows.map((row) => (
            <tr key={row.id}>
              <td>{row.id}</td>
              <td>{row.name}</td>
              <td>{row.age}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div>
        {Array.from({ length: Math.ceil(filteredData.length / rowsPerPage) }, (_, index) => (
          <button key={index + 1} onClick={() => paginate(index + 1)}>
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Table;
