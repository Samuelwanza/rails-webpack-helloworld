import React from "react";
import { Route, Routes } from "react-router-dom";
import Greetings from "./Greetings";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Greetings />} />
    </Routes>
  );
};

export default App;
