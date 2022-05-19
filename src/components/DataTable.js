import React, { useState, useEffect } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";
import { useNavigate } from "react-router-dom";

// const table = {
//   columns: [
//     { headerName: "Make", field: "make" },
//     { headerName: "Model", field: "model" },
//     {
//       headerName: "Price",
//       field: "price",
//       sortable: true,
//       filter: "agNumberColumnFilter"
//     }
//   ],
//   rowData: [
//     { make: "Toyota", model: "Camry", price: 28000 },
//     { make: "Ford", model: "Focus", price: 16700 },
//     { make: "Hyundai", model: "Kona", price: 23500 }
//   ]
// };

export default function DataTable() {
  const [rowData, setRowData] = useState([]);
  const navigate = useNavigate();

  const columns = [
    { headerName: "Title", field: "title", sortable: true, filter: true },
    { headerName: "Author", field: "author", sortable: true },
    { headerName: "Edition Count", field: "editionCount", sortable: true },
    { headerName: "Book ID", field: "id", sortable: true }
  ];

  useEffect(() => {
    fetch("https://openlibrary.org/subjects/drama.json?published_in=2000")
      .then((res) => res.json())
      .then((data) => data.works)
      .then((works) =>
        works.map((book) => {
          return {
            title: book.title,
            author: book.authors[0].name,
            editionCount: book.edition_count,
            id: book.cover_id
          };
        })
      )
      .then((books) => setRowData(books));
  }, []);

  return (

      <div
        className="ag-theme-balham"
        style={{
          height: "300px",
          width: "800px"
        }}
      >
        <AgGridReact
          columnDefs={columns}
          rowData={rowData}
          pagination={true}
          paginationPageSize={7}
          onRowClicked={(row) => navigate(`/book?title=${row.data.title}`)}
        />
      </div>
  );
}
