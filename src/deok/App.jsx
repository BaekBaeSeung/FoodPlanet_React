import React from "react";
import { Link } from "react-router-dom";

function App() {

    return (
            <div >
                <h1>메인 페이지</h1>
                <div>
                    <Link to="/login" style={{textDecoration: 'none'}}>
                    <span>로그인</span>
                    </Link>
                </div>

            </div>
    );
}

export default App;
