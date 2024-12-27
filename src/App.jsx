import React from "react";
import Routing from "./Routing/Routing";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routing />
      <Footer/>
      </div>
  );
};

export default App;
