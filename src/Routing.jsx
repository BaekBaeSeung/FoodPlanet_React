import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Login from "./BBS/Components/Account/Login_Signup";
import Login from "./deok/Components/Member/Login_Signup/Login_Signup";
import MpClient from "./deok/Components/Member/MyPage_Client/Mypage_Client";
import App from "./App";
import ShopDetail from "./BBS/Components/ShopDetailPage/ShopDetail";

function Routing() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="login" element={<Login />} />
        <Route path="mypage" element={<MpClient />} />
        <Route path="shopDetail" element={<ShopDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Routing;
