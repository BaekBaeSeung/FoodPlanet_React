import React from 'react';
import { useState } from "react";
import './Mypage_Client.css';
import 'material-icons';
import imgEx from '../../../../images/assets/프사 예시.png'
import Analytics from './MainComponents/Analytics'
import UpdateInfo from './MainComponents/UpdateInfo';
import DeleteMember from './MainComponents/DeleteMember';
import InsertShop from './MainComponents/InsertShop'

const MpClient = () => {
    const [viewWhat, setViewWhat] = useState('analytics');

    const toggleDarkMode = () => {
        document.body.classList.toggle('dark-mode-variables');
        const darkMode = document.querySelector('.dark-mode');
        darkMode.querySelector('span:nth-child(1)').classList.toggle('active');
        darkMode.querySelector('span:nth-child(2)').classList.toggle('active');
    };

    const clickMenu = (what) => {
        if (viewWhat === what) return;
        setViewWhat(what); return;
    }

    return (
        <div className="DEOK_MP_CL_body">
            <div className="DEOK_MP_CL_container">
                <aside className="DEOK_MP_CL_aside">
                    <div className="DEOK_MP_CL_sidebar">
                        <div className="DEOK_MP_CL_profileBox">
                            <img className="DEOK_MP_CL_profile" src={imgEx} alt='프로필 사진' />
                        </div>
                        <p className='DEOK_MP_CL_Nickname'>
                            Nickname
                        </p>
                        <p className={viewWhat === 'analytics' ? 'active' : ''} onClick={() => clickMenu("analytics")}>
                            <h3>매장 분석</h3>
                        </p>
                        <p className={viewWhat === 'updateInfo' ? 'active' : ''} onClick={() => clickMenu("updateInfo")}>
                            <h3>회원 정보 수정</h3>
                        </p>
                        <p className={viewWhat === 'insertShop' ? 'active' : ''} onClick={() => clickMenu("insertShop")}>
                            <h3>업체 등록</h3>
                        </p>
                        <p className={viewWhat === 'updateShop' ? 'active' : ''} onClick={() => clickMenu("updateShop")}>
                            <h3>나의 업체</h3>
                        </p>
                        <p className={viewWhat === 'deleteMember' ? 'active' : ''} onClick={() => clickMenu("deleteMember")}>
                            <h3>회원 탈퇴</h3>
                        </p>
                    </div>
                </aside>
                {/* <!-- End of Sidebar Section --> */}

                {/* <!-- Main Content --> */}
                <main>
                    <div className='DEOK_MP_CL_main'>
                        {viewWhat === "analytics" && <Analytics />}
                        {viewWhat === "updateInfo" && <UpdateInfo />}
                        {viewWhat === "insertShop" && <InsertShop />}
                        {viewWhat === "updateShop" && null}
                        {viewWhat === "deleteMember" && <DeleteMember />}
                    </div>
                </main>
                {/* <!-- End of Main Content --> */}

                {/* <!-- Right Section --> */}
                <div className="DEOK_MP_CL_right-section">
                    <div className="nav">
                        <div className="dark-mode" onClick={toggleDarkMode}>
                            <span className="material-icons-sharp active">
                                light_mode
                            </span>
                            <span className="material-icons-sharp">
                                dark_mode
                            </span>
                        </div>
                    </div>
                    

                    <div className="reminders">
                        <div className="notificationHeader">
                            <h2>알림</h2>
                            <span className="material-icons-sharp">
                                notifications_none
                            </span>
                        </div>

                        <div className="notification">
                            <div className="icon">
                                <span className="material-icons-sharp">
                                    volume_up
                                </span>
                            </div>
                            <div className="content">
                                <div className="info">
                                    <h3>Workshop</h3>
                                    <small className="text_muted">
                                        08:00 AM - 12:00 PM
                                    </small>
                                </div>
                                <span className="material-icons-sharp">
                                    more_vert
                                </span>
                            </div>
                        </div>

                        <div className="notification deactive">
                            <div className="icon">
                                <span className="material-icons-sharp">
                                    edit
                                </span>
                            </div>
                            <div className="content">
                                <div className="info">
                                    <h3>Workshop</h3>
                                    <small className="text_muted">
                                        08:00 AM - 12:00 PM
                                    </small>
                                </div>
                                <span className="material-icons-sharp">
                                    more_vert
                                </span>
                            </div>
                        </div>

                        <div className="notification add-reminder">
                            <div>
                                <span className="material-icons-sharp">
                                    add
                                </span>
                                <h3>Add Reminder</h3>
                            </div>
                        </div>

                    </div>

                </div>


            </div>
        </div>
    );
};

export default MpClient;