import React from "react";
import "./App.css";
import Pet from "../components/Pet";
import { QueryProvider } from "../context/QueryContext";

function App() {
  return (
    <QueryProvider>
      <Pet />
    </QueryProvider>
  );
}

export default App;
