import React, { useState } from "react"
import styles from './Login_Signup.module.css'
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import { PiCalendarBold } from "react-icons/pi";
import { GiSmartphone } from "react-icons/gi";
import { IoHomeOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
import kakao from '../../../images/assets/btn_kakao.svg'
import google from '../../../images/assets/btn_google.svg'
import naver from '../../../images/assets/btn_naver.svg';

const SignUpForm = () => {

    const [action, setAction] = useState('');

    const registerLink = () => {
        setAction(' active');
    };

    const loginLink = () => {
        setAction('');
    };

    const [pwVisible, setPwVisible] = useState(false);


    const showPw = () => {
        setPwVisible(!pwVisible);

    }

    return (
        <div className={styles.body}>
            <div className={`${styles.wrapper} ${action && styles.active}`}>
                <div className={`${styles['form-box']} ${styles.login}`}>
                    <form action='member/login'>
                        <h1>로그인<Link to='/' className={styles.to_home}><IoHomeOutline /></Link></h1>
                        <div className={styles['input-box']}>
                            <input type="text" placeholder='이메일' required />
                            <FaEnvelope className={styles.icon} />
                        </div>
                        <div className={styles['input-box']}>
                            <input type={pwVisible ? "text" : "password"} placeholder='비밀번호' required />
                            <FaLock className={styles.icon} />
                        </div>

                        <div className={styles['remember-forgot']}>
                            <label><input type="checkbox" className="showPw" onClick={showPw} />비밀번호 보기</label>
                            <p>비밀번호를 잊어버리셨나요?</p>
                        </div>

                        <button type="submit">로그인</button>

                        <div className={styles['register-link']}>
                            <p onClick={registerLink}>계정이 없으신가요?</p>
                        </div>
                        <div className={styles.btn_sns_login}>
                            <Link to='/'>
                                <img className={styles.naver} src={naver} alt='naver' />
                            </Link>
                            <Link to='/'>
                                <img className={styles.kakao} src={kakao} alt='kakao' />
                            </Link>
                            <Link to='/'>
                                <img className={styles.google} src={google} alt='google' />
                            </Link>
                        </div>
                    </form>
                </div>

                <div className={`${styles['form-box']} ${styles.register}`}>
                    <form action=''>
                        <h1>회원가입<Link to='/' className={styles.to_home}><IoHomeOutline /></Link></h1>
                        <div className={styles['input-box']}>
                            <input type="eamil" placeholder='이메일' required />
                            <FaEnvelope className={styles.icon} />
                        </div>
                        <div className={styles['input-box']}>
                            <input type="password" placeholder='비밀번호' required />
                            <FaLock className={styles.icon} />
                        </div>
                        <div className={styles['input-box']}>
                            <input type="password" placeholder='비밀번호 확인' required />
                            <FaLock className={styles.icon} />
                        </div>
                        <div className={styles['input-box']}>
                            <input type="text" placeholder='닉네임' required />
                            <FaUser className={styles.icon} />
                        </div>
                        <div className={styles['input-box']}>
                            <input type="text" placeholder='전화번호 ( - 빼고 번호만 입력해 주세요.)' required />
                            <GiSmartphone className={`${styles.icon} ${styles.phone}`} />
                        </div>
                        <div className={styles['input-box']}>
                            <input type="text" placeholder='생년월일 (예시 : 1995/05/16)' required />
                            <PiCalendarBold className={styles.icon} />
                        </div>
                        <div className={styles['remember-forgot']}>
                            <label><input type="checkbox" className="showPw" />점주님 체크~~</label>
                        </div>
                        <button type="submit">가입</button>

                        <div className={styles['register-link']}>
                            <p onClick={loginLink}>로그인폼 ㄱㄱ</p>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    );
}

export default SignUpForm