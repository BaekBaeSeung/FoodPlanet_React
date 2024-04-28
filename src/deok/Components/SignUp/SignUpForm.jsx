import React, { useState } from "react"
import styles from './SignUpForm.module.css'
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import { PiCalendarBold } from "react-icons/pi";
import { GiSmartphone } from "react-icons/gi";
import { IoHomeOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';

const SignUpForm = () => {

    const [action, setAction] = useState('');

    const registerLink = () => {
        setAction(' active');
    };

    const loginLink = () => {
        setAction('');
    };

    return (
        <div className={styles.body}>
            <div className={`${styles.wrapper} ${action && styles.active}`}>
                <div className={`${styles['form-box']} ${styles.user}`}>
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

                        <button type="submit">가입</button>

                        <div className={styles['register-link']}>
                            <p onClick={registerLink}>점주폼 ㄱㄱ</p>
                        </div>
                    </form>
                </div>

                <div className={`${styles['form-box']} ${styles.client}`}>
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
                        <button type="submit">가입</button>

                        <div className={styles['register-link']}>
                            <p onClick={loginLink}>유저폼 ㄱㄱ</p>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    );
}

export default SignUpForm