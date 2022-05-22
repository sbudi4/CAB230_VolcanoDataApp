// This file contains the functions to communicate with the REST API Volcano Data.

// Importing dependencies
import React, {useState, useEffect} from 'react';
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";
import { useNavigate } from "react-router-dom";

// Function for Country Select & Data Table
export default function CountrySelect() {

    // GET country data from /countries endpoint
  const [volcanoData, getVolcanoData] = useState([])
  
    useEffect(() => {
        fetch('http://sefdb02.qut.edu.au:3001/countries')
        .then((res) => res.json())
        .then((res) => {
          console.log(res)
          getVolcanoData(res)
        })
    }, [])

    // Parse Country data selection as value
    const [CountrySelection, setCountrySelection] = useState();

    const handleChange = (event) => {
      setCountrySelection(event.target.value)
    }

    // Parse "Within Range" data selection as value
    const [withinRange, setWithinRange] = useState();




    // Creating Data Table
    const [rowData, setRowData] = useState([]);
    const navigate = useNavigate();
  
    const columns = [
      { headerName: "Name", field: "name", sortable: true, filter: true },
      { headerName: "Region", field: "region", sortable: true },
      { headerName: "Subregion", field: "subregion", sortable: true }
    ];
  
    // Fetching Data from /volcanoes endpoint
    useEffect(() => {
      fetch("http://openlibrary.org/subjects/drama.json?published_in=2000")
        .then((res) => res.json())
        .then((data) => data.works)
        .then((works) =>
          works.map((book) => {
            return {
              name: book.title,
              region: book.authors[0].name,
              subregion: book.edition_count,
            };
          })
        )
        .then((books) => setRowData(books));
    }, []);


    // Presenting Components
    return (
      // Test that volcano data is an array
      console.log(volcanoData),

      // Create dropdown menu components & Data Table
      <div className='country-select'>
        <select onChange={(e) => setCountrySelection(e.target.value)}>
            <option value="default">--Select a Country--</option>
            {volcanoData.map((volcanoData) => <option value={volcanoData}>{volcanoData}</option>)}
        </select>

        <span>Within Range:</span>
        <select onChange={(e) => setWithinRange(e.target.value)}>
          <option value = "">--Select a Range--</option>
          <option value = "&populatedWithin=5km">5 km</option>
          <option value = "&populatedWithin=30km">30 km</option>
          <option value = "&populatedWithin=100km">100 km</option>
        </select>
        
         {console.log(JSON.stringify("http://sefdb02.qut.edu.au:3001/volcanoes?country="+CountrySelection + withinRange))}

        <div
          className="ag-theme-balham"
          style={{
            height: "300px",
            width: "800px"
          }}>
          <AgGridReact
            columnDefs={columns}
            rowData={rowData}
            pagination={true}
            paginationPageSize={7}
            onRowClicked={(row) => navigate(`/book?title=${row.data.title}`)}/>
        </div>
      </div>

      
    )
  }