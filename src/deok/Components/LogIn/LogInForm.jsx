import React from 'react';
import styles from './LogInForm.module.css';
import { FaUser, FaLock } from "react-icons/fa";

const LogInForm = () => {
    return (
        <div className={styles.body}>
            <div className={styles.wrapper}>
                <form action=''>
                    <h1>로그인</h1>
                    <div className={styles['input-box']}>
                        <input type="text" placeholder='Eamil' required />
                        <FaUser className={styles.icon} />
                    </div>
                    <div className={styles['input-box']}>
                        <input type="password" placeholder='Password' required />
                        <FaLock className={styles.icon} />
                    </div>

                    <div className={styles['remember-forgot']}>
                        <label><input type="checkbox" name="" id="" />이메일 기억하기</label>
                        <a href='#'>비밀번호를 잊어버리셨나요?</a>
                    </div>

                    <button type="submit">로그인</button>

                    <div className={styles['register-link']}>
                        <p>계정이 없으신가요? <a href='#'>회원가입</a></p>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default LogInForm;
