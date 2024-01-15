import React from "react";
import MyRoutes from "./routes/Route";
import Navbar from "./Components.jsx/Navbar";
import MyFooter from "./Components.jsx/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <MyRoutes />
      <MyFooter />
    </div>
  );
}

export default App;
