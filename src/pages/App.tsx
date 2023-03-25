import React from "react";
import "./App.css";
import Pet from "../components/Pet";
import { ApiProvider } from "../context/ApiContext";
import { QueryProvider } from "../context/QueryContext";

function App() {
  return (
    <QueryProvider>
      <ApiProvider>
        <Pet />
      </ApiProvider>
    </QueryProvider>
  );
}

export default App;
