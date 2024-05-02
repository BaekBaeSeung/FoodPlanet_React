import React from "react";
import './UpdateInfo.css';

const UpdateInfo = () => {
    return (
        <>
            <h1>회원 정보 수정</h1>
            <div className="DEOK_MAIN_CL_updateInfo">
                <div className="DEOK_MAIN_CL_input-box">
                <input type="email" value={"asdaf@asdf.com"} hidden />

                <div>
                    <b>이메일</b>
                    <input type="text" value={'asdf@asdf.com'} disabled />
                </div>

                <div>
                    <b>닉네임</b>
                    <input type="text" placeholder="당근방구" />
                </div>

                <div>
                    <b>전화번호</b>
                    <input type="text" placeholder="-빼고 숫자만 입력" />
                </div>
                </div>
            </div>
        </>
    )
}
export default UpdateInfo;