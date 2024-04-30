import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Account from './Components/Account/Login_Signup'
import App from './App'

function Routing() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<App />} />
                <Route path='account' element={<Account />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Routing;