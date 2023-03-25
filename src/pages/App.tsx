import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import "./App.css";
import Pet from "../components/Pet";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Pet />
    </QueryClientProvider>
  );
}

export default App;
