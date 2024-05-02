import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Login from "./BBS/Components/Account/Login_Signup";
import Login from './deok/Components/Member/Login_Signup/Login_Signup'
import MpClient from './deok/Components/Member/MyPage/Mypage_Client'
import App from "./App";

function Routing() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="login" element={<Login />} />
        <Route path="mypage" element={<MpClient />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Routing;
