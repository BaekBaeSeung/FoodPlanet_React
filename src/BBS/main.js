import React from "react";
import "./main.css";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import Popular from "./Components/Popular/Popular";
import Offers from "./Components/Offers/Offers";
import About from "./Components/About/About";
import Blog from "./Components/Blog/Blog";
import Footer from "./Components/Footer/Footer";
import BBSFooter from "./3_footer/footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <Popular />
      <Offers />
      <About />
      <Blog />
      <Footer />
      {/* <BBSFooter /> */}
    </>
  );
};

export default App;
