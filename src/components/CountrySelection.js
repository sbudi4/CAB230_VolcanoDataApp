// This file contains the Dropdown menu for selecting the scope country
// when viewing volcano data.

// importing dependencies
import React, {useState, useEffect} from 'react';

function CountrySelection(){

    // GET Country list from REST API
    const [volcanoData, getVolcanoData] = useState("Select a Country")

    let countries = []
  
    useEffect(() => {
        fetch('http://sefdb02.qut.edu.au:3001/countries')
        .then((res) => res.json())
        .then((volcanoData) => {
          console.log(res)
          getVolcanoData(volcanoData)
        })
    }, [])

    // Parse Country data selection as value

    const [CountrySelection, setCountrySelection] = useState();


    const handleChange = (event) => {
        setCountrySelection(event.target.value)
        console.log(event)

    }   

 //   {countries.map((volcanoData) => <option value={volcanoData.value}>{volcanoData.label}</option>)}
    
    return (
    <div>
        <select value={volcanoData} onChange={handleChange} >
            <option value="Select a Country">Select a Country</option>
            <option value="pooper">Poop</option>

        </select>
    </div>
    )
}