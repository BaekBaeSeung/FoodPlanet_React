import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './deok/Components/LogIn/LogInForm'
import App from './deok/App'

function Routing() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<App />} />
                <Route path='login' element={<Login />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Routing;