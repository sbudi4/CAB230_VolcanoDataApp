// This file contains the functions to communicate with the REST API Volcano Data.

// Importing dependencies
import React, {useState, useEffect} from 'react';

// GET Volcano Data using fetch hook
export default function FetchVolcanoData() {
    const [volcanoData, getVolcanoData] = useState([])
  
    useEffect(() => {
        fetch('http://sefdb02.qut.edu.au:3001/countries')
        .then((res) => res.json())
        .then((res) => {
          console.log(res)
          getVolcanoData(res)
        })
    }, [])
  
    return (
      <div>
        {volcanoData};
      </div>
    )
  }