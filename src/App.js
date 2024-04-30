import React from "react";
import "./App.css";
import Body from "./BBS/2_body/body";
import Footer from "./BBS/3_footer/footer";
import Card from "./BBS/4_card_Test/AnimatedFlexCards";
import { Link } from "react-router-dom";
import Login_BBS from "./BBS/Components/Account/Login_Signup";

function App() {
  return (
    <div className="App">
      <Login_BBS />
    </div>
  );
}

export default App;
