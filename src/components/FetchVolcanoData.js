// This file contains the functions to communicate with the REST API Volcano Data.

// Importing dependencies
import React, {useState, useEffect} from 'react';

// Function for Country Selection dropdown menu
export default function CountrySelect() {
    const [volcanoData, getVolcanoData] = useState([])
  
    // GET Volcano Data
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
  
    return (
      // Test that volcano data is an array
      console.log(volcanoData),

      // Create dropdown menu component
      <div className='country-select'>
        <select onChange={(e) => setCountrySelection(e.target.value)}>
            <option value="default">--Select a Country--</option>
            {volcanoData.map((volcanoData) => <option value={volcanoData}>{volcanoData}</option>)}
          </select>
         {console.log("http://sefdb02.qut.edu.au:3001/volcanoes?country="+JSON.stringify(CountrySelection))}
      </div>
    )
  }