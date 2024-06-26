import React, { useRef, useState } from "react";
import './UpdateInfo.css';
import { Avatar } from "antd";
import exImg from '../../../../../images/assets/프사 예시.png'
import axios from "axios";

const UpdateInfo = () => {

    const [Image, setImage] = useState(exImg)
    const fileInput = useRef(null)
    const [value, setValue] = useState({
            nickName: 'nickname',
            password: ''
        });

    const onChange = (e) => {
        if (e.target.files[0]) {
            setImage(e.target.files[0])
        } else { //업로드 취소할 시
            setImage(exImg)
            return;
        }
        //화면에 프로필 사진 표시
        const reader = new FileReader();
        reader.onload = () => {
            if (reader.readyState === 2) {
                setImage(reader.result)
            }
        }
        reader.readAsDataURL(e.target.files[0])
    }

    const handleUpdateClick = (event) => {
        event.preventDefault();

        axios.post('http://localhost:8888/member/...')
        //          스프링 먼저 뚫어놔야함           //
    }
    return (
        <>
            <h1>회원 정보 수정</h1>
            <div className="DEOK_MP_CL_updateInfo">
                <form className="DEOK_MP_CL_updateInfo_form-box" onSubmit={handleUpdateClick}>
                    <div className="DEOK_MP_CL_updateInfo_editPic">
                        <Avatar
                            src={Image}
                            style={{ margin: '20px', cursor: "pointer", border: "1.5px solid black" }}
                            size={100}
                            onClick={() => { fileInput.current.click() }} />
                        <div>
                            <input
                                type='file'
                                style={{ display: 'none' }}
                                accept='image/*'
                                name='profile_img'
                                onChange={onChange}
                                ref={fileInput} />
                        </div>
                    </div>
                    <div className="DEOK_MP_CL_updateInfo_input-box">
                        <div>
                            <span>이메일</span>
                            <input
                                className="diabledEmail"
                                type='text'
                                value='asdf@asdf.com'
                                disabled
                            />
                            <input
                                type='text'
                                value='asdf@asdf.com'
                                hidden
                            />

                        </div>
                        <div>
                            <span>닉네임</span>
                            <input
                                type='text'
                                value={value.nickName}
                                onChange={(event) => setValue(prevState => ({
                                    ...prevState,
                                    nickName: event.target.value
                                }))}
                            />
                        </div>
                        <div>
                            <span>비밀번호</span>
                            <input
                                type='password'
                                value={value.password}
                                onChange={(event) => setValue(prevState => ({
                                    ...prevState,
                                    password: event.target.password
                                }))}
                            />
                        </div>
                        <div className="btn-update">
                            <button type="button">취소</button>
                            <button type="submit">변경</button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}
export default UpdateInfo;