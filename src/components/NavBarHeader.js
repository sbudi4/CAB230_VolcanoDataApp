// This file contains the navigation bar header component

// Importing dependencies
import { Link } from "react-router-dom";

// Navigation Bar function
export default function NavBarHeader() {
  return (
    <div style={{ backgroundColor: "Orange" }}>
      <nav>
        <p1 class="VolcanoioHeader">
          <img
            className="NavBarIcon"
            src={"https://cdn-icons-png.flaticon.com/512/1453/1453012.png"}
            alt="A royalty-free volcano icon."
          />
          volcano.io
        </p1>
        <p2 class="NavBarLinks">
          <Link to="/">Home</Link> | {"  "}
          <Link to="/VolcanoData">Volcano Data</Link> | {"  "}
          <Link to="/Register">Register</Link> | {"  "}
          <Link to="/Login">Login</Link>
        </p2>
      </nav>
    </div>
  );
}
