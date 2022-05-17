// Importing Dependencies
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Importing Pages
import App from "./App";
import VolcanoList from "./VolcanoList";
import Register from "./Register";
import Login from "./Login";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="Home" element={<App />} />
      <Route path="VolcanoList" element={<VolcanoList />} />\
      <Route path="Register" element={<Register />} />\
      <Route path="Login" element={<Login />} />
    </Routes>
  </BrowserRouter>
);
