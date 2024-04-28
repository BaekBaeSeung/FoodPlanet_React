import React, { useState } from 'react';
import styles from './LogInForm.module.css';
import { FaEnvelope, FaLock } from "react-icons/fa";
import { IoHomeOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
import google from '../Assets/btn_google.svg';
import kakao from '../Assets/btn_kakao.svg';
import naver from '../Assets/btn_naver.svg';

const LogInForm = () => {

    const [pwVisible, setPwVisible] = useState(false);


    const showPw = () => {
        setPwVisible(!pwVisible);

    }

    return (
        <div className={styles.body}>
            <div className={styles.wrapper}>
                <form action=''>
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
                        <Link to='/signup' className={styles.linkTo}>계정이 없으신가요?</Link>
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
        </div>
    );
}

export default LogInForm;
