import React, { useState } from "react";
import styles from "./Login_Signup.module.css";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import { PiCalendarBold } from "react-icons/pi";
import { GiSmartphone } from "react-icons/gi";
import { IoHomeOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import kakao from "../../../images/assets/btn_kakao.svg";
import google from "../../../images/assets/btn_google.svg";
import naver from "../../../images/assets/btn_naver.svg";
import axios from "axios";

const SignUpForm = () => {
  const [action, setAction] = useState("");

  const registerLink = () => {
    setAction(" active");
  };

  const loginLink = () => {
    setAction("");
  };

  // 비밀번호 보기 옵션을(로그인 체크박스) 관리하기 위한 상태와 상태를 업데이트하는 함수를 선언합니다.
  const [pwVisible, setPwVisible] = useState(false); // 이게 누르면 반전되어서 true로 바뀜

  // 비밀번호 보기 옵션을 활성화 또는 비활성화하는 함수를 정의합니다.
  const showPw = () => {
    // 현재 pwVisible 상태의 값을 반전시켜서 비밀번호 보기 상태를 토글합니다.
    setPwVisible(!pwVisible);
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [nickname, setNickname] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [birthDate, setBirthDate] = useState("");

  // 백배승 회원가입 핸들러
  const handleSignUpClick = () => {
    console.log(
      "백배승 Login_Signup.jsx + handleSignUpClick호출 : 회원가입 버튼 클릭"
    );
    axios
      .post("http://localhost:8888/member/insert", {
        // Spring 서버의 API 엔드포인트로 변경
        email: email, // 이메일 필드에는 useState로 관리한 상태를 사용
        password: password, // 비밀번호 필드에는 useState로 관리한 상태를 사용
        confirmPassword: confirmPassword, // 비밀번호 확인 필드에는 useState로 관리한 상태를 사용
        nickname: nickname, // 닉네임 필드에는 useState로 관리한 상태를 사용
        phoneNumber: phoneNumber, // 전화번호 필드에는 useState로 관리한 상태를 사용
        birthDate: birthDate, // 생년월일 필드에는 useState로 관리한 상태를 사용
      })
      .then((response) => {
        // Handle success.
        console.log("성공적으로 데이터가 전달됨...");
        console.log("User profile", response.data.user);
        console.log("User token", response.data.jwt);
      })
      .catch((error) => {
        // Handle error.
        console.log("An error occurred:", error.response);
      });
  };

  return (
    <div className={styles.body}>
      <div className={`${styles.wrapper} ${action && styles.active}`}>
        <div className={`${styles["form-box"]} ${styles.login}`}>
          <form action="/member/login">
            <h1>
              로그인
              <Link to="/" className={styles.to_home}>
                <IoHomeOutline />
              </Link>
            </h1>
            <div className={styles["input-box"]}>
              <input type="text" placeholder="이메일" required />
              <FaEnvelope className={styles.icon} />
            </div>
            <div className={styles["input-box"]}>
              <input
                type={pwVisible ? "text" : "password"}
                placeholder="비밀번호"
                required
              />
              <FaLock className={styles.icon} />
            </div>

            <div className={styles["remember-forgot"]}>
              <label>
                <input type="checkbox" className="showPw" onClick={showPw} />
                비밀번호 보기
              </label>
              <p>비밀번호를 잊어버리셨나요?</p>
            </div>

            <button type="submit">로그인</button>

            <div className={styles["register-link"]}>
              <p onClick={registerLink}>계정이 없으신가요?</p>
            </div>
            <div className={styles.btn_sns_login}>
              <Link to="/">
                <img className={styles.naver} src={naver} alt="naver" />
              </Link>
              <Link to="/">
                <img className={styles.kakao} src={kakao} alt="kakao" />
              </Link>
              <Link to="/">
                <img className={styles.google} src={google} alt="google" />
              </Link>
            </div>
          </form>
        </div>

        <div className={`${styles["form-box"]} ${styles.register}`}>
          <form onSubmit={handleSignUpClick}>
            <h1>
              회원가입
              <Link to="/" className={styles.to_home}>
                <IoHomeOutline />
              </Link>
            </h1>
            <div className={styles["input-box"]}>
              <input
                type="email"
                placeholder="이메일"
                required
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
              <FaEnvelope className={styles.icon} />
            </div>
            <div className={styles["input-box"]}>
              <input
                type="password"
                placeholder="비밀번호"
                required
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
              <FaLock className={styles.icon} />
            </div>
            <div className={styles["input-box"]}>
              <input
                type="password"
                placeholder="비밀번호 확인"
                required
                value={confirmPassword}
                onChange={(event) => setConfirmPassword(event.target.value)}
              />
              <FaLock className={styles.icon} />
            </div>
            <div className={styles["input-box"]}>
              <input
                type="text"
                placeholder="닉네임"
                required
                value={nickname}
                onChange={(event) => setNickname(event.target.value)}
              />
              <FaUser className={styles.icon} />
            </div>
            <div className={styles["input-box"]}>
              <input
                type="text"
                placeholder="전화번호 ( - 빼고 번호만 입력해 주세요.)"
                required
                value={phoneNumber}
                onChange={(event) => setPhoneNumber(event.target.value)}
              />
              <GiSmartphone className={`${styles.icon} ${styles.phone}`} />
            </div>
            <div className={styles["input-box"]}>
              <input
                type="text"
                placeholder="생년월일 (예시 : 1995/05/16)"
                required
                value={birthDate}
                onChange={(event) => setBirthDate(event.target.value)}
              />
              <PiCalendarBold className={styles.icon} />
            </div>
            <div className={styles["remember-forgot"]}>
              <label>
                <input type="checkbox" className="showPw" />
                점주님 체크~~
              </label>
            </div>
            <button type="submit">가입</button>

            <div className={styles["register-link"]}>
              <p onClick={loginLink}>로그인폼 ㄱㄱ</p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
