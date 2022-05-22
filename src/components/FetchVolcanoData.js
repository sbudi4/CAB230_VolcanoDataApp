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
  const [countryData, getCountryData] = useState([])
  
    useEffect(() => {
        fetch('http://sefdb02.qut.edu.au:3001/countries')
        .then((res) => res.json())
        .then((res) => {
          console.log(res)
          getCountryData(res)
        })
    }, [])

    // Parse Country data selection as value
    const [CountrySelection, setCountrySelection] = useState("");

    const handleChange = (event) => {
      setCountrySelection(event.target.value)
    }

    // Parse "Within Range" data selection as value
    const [withinRange, setWithinRange] = useState("");




    // Creating Data Table
    const [rowData, setRowData] = useState([]);
    const navigate = useNavigate();
  
    const columns = [
      { headerName: "Name", field: "name", sortable: true, filter: true },
      { headerName: "Region", field: "region", sortable: true },
      { headerName: "Subregion", field: "subregion", sortable: true }
    ];

    const [volcanoData, setVolcanoData] = useState([]);

    const volcanoURL = JSON.stringify("http://sefdb02.qut.edu.au:3001/volcanoes?country="+CountrySelection + withinRange);
  
    // Fetching Data from /volcanoes endpoint
    useEffect(() => {
      fetch(volcanoURL)
        .then((res) => res.json())
        .then((res) => setVolcanoData(res))
        // .then((volcanoData => {
        //   console.log(volcanoData)
        //   volcanoData.map((volcano) => {
        //     return{
        //       name: volcano.name,
        //       region: volcano.region,
        //       subregion: volcano.subregion
        //     };
        //   })
        // })
        // )
        // .then((volcanoData) => setRowData(volcanoData));
        // .then((works) =>
        //   works.map((book) => {
        //     return {
        //       name: book.title,
        //       region: book.authors[0].name,
        //       subregion: book.edition_count,
        //     };
        //   })
        // )
    }, []);

    console.log(volcanoURL);


    // Presenting Components
    return (
      // Test that volcano data is an array
      console.log(countryData),

      // Create dropdown menu components & Data Table
      <div className='country-select'>
        <select onChange={(e) => setCountrySelection(e.target.value)}>
            <option value="default">--Select a Country--</option>
            {countryData.map((countryData) => <option value={countryData}>{countryData}</option>)}
        </select>

        <span>Within Range:</span>
        <select onChange={(e) => setWithinRange(e.target.value)}>
          <option value = "">--Select a Range--</option>
          <option value = "&populatedWithin=5km">5 km</option>
          <option value = "&populatedWithin=30km">30 km</option>
          <option value = "&populatedWithin=100km">100 km</option>
        </select>

        <button>Search</button>
        
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