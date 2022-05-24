// This file contains the template for each individual volcano page.

// Importing dependencies...
import React, { useState, useEffect } from "react";
import { Button } from "reactstrap";
import { useNavigate, useSearchParams } from "react-router-dom";
import NavBarHeader from "./NavBarHeader";

export default function VolcanoPage() {
  const navigate = useNavigate();

  // Get Volcano Information via volcano ID endpoint
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");

  const [volcanoInfo, setVolcanoInfo] = useState([]);

  useEffect(() => {
    fetch("http://sefdb02.qut.edu.au:3001/volcano/"+id)
      .then((res) => res.json())
      .then((data) => setVolcanoInfo(data))
  }, []);

    console.log(volcanoInfo);
    
    // Turning Endpoint information to usable data (and not an object)
    const pleaseworkplease = Object.values(volcanoInfo);
    console.log(pleaseworkplease);

// Display component
  return (
    <div className="container">
    <NavBarHeader />
      <h1>Welcome to {pleaseworkplease[0]}! </h1>
        <p>
      Country: {pleaseworkplease[1]}<br></br>
      Region: {pleaseworkplease[2]}<br></br>
      Subregion: {pleaseworkplease[3]}<br></br>
      Last eruption: {pleaseworkplease[4]}<br></br>
      Summit: {pleaseworkplease[5]} metres<br></br>
      Elevation: {pleaseworkplease[6]}<br></br>
      Latitude: {pleaseworkplease[7]}<br></br>
      Longitude: {pleaseworkplease[8]}<br></br>
      </p>
      <Button
        color="info"
        size="sm"
        className="mt-3"
        onClick={() => navigate("/VolcanoData")}
      >
        Back
      </Button>
    </div>
  );
}