import React from 'react';
import './App.css';
import Body from './BBS/2_body/body';
import Footer from './BBS/3_footer/footer';
import Card from './BBS/4_card_Test/AnimatedFlexCards';
import { Link } from 'react-router-dom';


function App() {
  return (
    <div className='App'>
      <div>
        <h1>메인 페이지</h1>
        <Link to="/account" style={{ textDecoration: 'none' }}>
          <span>로그인</span>
        </Link>
      </div>
      <Card />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
