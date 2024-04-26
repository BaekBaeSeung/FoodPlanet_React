import { Route, Routes, useNavigate } from 'react-router-dom';
import SignIn from './Components/SignIn/SignInForm';

function App() {
    const navigate = useNavigate();

    const goToSignIn = () => {
        navigate("/signIn");
    }

    return (
            <div>
                <button onClick={() => navigate(-1)}>go back</button>
                <button type="button" onClick={goToSignIn}>Login</button>
                <Routes>
                    <Route path="/signIn" element={<SignIn />}></Route>
                </Routes>
            </div>
    );
}

export default App;
