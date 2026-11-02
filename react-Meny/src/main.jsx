import { Component, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./app.css";
import App from "./App.jsx";
import { Component } from "react";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

//husk at man for og rendre må legge filen  i en </> i strictmode for og få på siden
