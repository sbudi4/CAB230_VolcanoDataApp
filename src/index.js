// Importing Dependencies
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Importing Pages
import App from "./App";
import VolcanoData from "./VolcanoData";
import Register from "./Register";
import Login from "./Login";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="Home" element={<App />} />
        <Route path="VolcanoData" element={<VolcanoData />} />\
        <Route path="Register" element={<Register />} />\
        <Route path="Login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
