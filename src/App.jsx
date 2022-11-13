import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Header from "./components/Header";
import List from "./components/List";

function App() {
  return (
    <div className="App">
      <Header />
      <List />
    </div>
  );
}

export default App;
