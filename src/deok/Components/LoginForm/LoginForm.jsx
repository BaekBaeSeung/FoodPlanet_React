import './LoginForm.css';
import { FaUser,FaLock } from "react-icons/fa";

const LoginForm = () => {
    return(
        <div className='wrapper'>
            <form action=''>
                <h1>로그인</h1>
                <div className='input-box'>
                    <input type="text" placeholder='아이디를 입력해 주세요.' required />
                    <FaUser className='icon' />
                </div>
                <div className='input-box'>
                    <input type="password" placeholder='비밀번호를 입력해 주세요.' required />
                    <FaLock className='icon' />
                </div>

                <div className='remember-forgot'>
                    <label><input type="checkbox" name="" id="" />아이디 기억하기</label>
                    <a href='#'>비밀번호를 잊어버리셨나요?</a>
                </div>

                <button type="submit">로그인</button>

                <div className='register-link'>
                    <p>계정이 없으신가요? <a href='#'>회원가입</a></p>
                </div>
            </form>
        </div>
    );
}

export default LoginForm;