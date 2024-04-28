import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './Components/LogIn/LogInForm'
import SignUp from './Components/SignUp/SignUpForm'
import App from './../App'

function Routing() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<App />} />
                <Route path='login' element={<Login />} />
                <Route path='signup' element={<SignUp />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Routing;