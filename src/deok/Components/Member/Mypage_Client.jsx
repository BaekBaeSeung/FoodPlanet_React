import React from 'react';
import { useState } from "react";
import './Mypage_Client.css';
import 'material-icons';

const MpClient = () => {
    const [orders] = useState([
        {
            productName: 'JavaScript Tutorial',
            productNumber: '85743',
            paymentStatus: 'Due',
            status: 'Pending'
        },
        {
            productName: 'CSS Full Course',
            productNumber: '97245',
            paymentStatus: 'Refunded',
            status: 'Declined'
        },
        {
            productName: 'Flex-Box Tutorial',
            productNumber: '36452',
            paymentStatus: 'Paid',
            status: 'Active'
        },
    ]);

    const showMenu = () => {
        const sideMenu = document.querySelector('aside');
        sideMenu.style.display = 'block';
    };

    const hideMenu = () => {
        const sideMenu = document.querySelector('aside');
        sideMenu.style.display = 'none';
    };

    const toggleDarkMode = () => {
        document.body.classList.toggle('dark-mode-variables');
        const darkMode = document.querySelector('.dark-mode');
        darkMode.querySelector('span:nth-child(1)').classList.toggle('active');
        darkMode.querySelector('span:nth-child(2)').classList.toggle('active');
    };

    

    return (
        <div className="DEOK_MAIN_CL_body">
        <div className="DEOK_MAIN_CL_container">
            <aside className="DEOK_MAIN_CL_aside">
                <div className="DEOK_MAIN_CL_toggle">
                    <div className="DEOK_MAIN_CL_logo">
                        <img src="images/logo.png" alt="logo" />
                        <h2>Asmr<span className="danger">Prog</span></h2>
                    </div>
                    <div className=".DEOK_MAIN_CL_close" onClick={hideMenu}>
                        <span className="material-icons-sharp">close</span>
                    </div>
                </div>

                <div className="DEOK_MAIN_CL_sidebar">
                <a href="#">
                    <span className="material-icons-sharp">
                        dashboard
                    </span>
                    <h3>Dashboard</h3>
                </a>
                <a href="#">
                    <span className="material-icons-sharp">
                        person_outline
                    </span>
                    <h3>Users</h3>
                </a>
                <a href="#">
                    <span className="material-icons-sharp">
                        receipt_long
                    </span>
                    <h3>History</h3>
                </a>
                <a href="#" className="active">
                    <span className="material-icons-sharp">
                        insights
                    </span>
                    <h3>Analytics</h3>
                </a>
                <a href="#">
                    <span className="material-icons-sharp">
                        mail_outline
                    </span>
                    <h3>Tickets</h3>
                    <span className="message-count">27</span>
                </a>
                <a href="#">
                    <span className="material-icons-sharp">
                        inventory
                    </span>
                    <h3>Sale List</h3>
                </a>
                <a href="#">
                    <span className="material-icons-sharp">
                        report_gmailerrorred
                    </span>
                    <h3>Reports</h3>
                </a>
                <a href="#">
                    <span className="material-icons-sharp">
                        settings
                    </span>
                    <h3>Settings</h3>
                </a>
                <a href="#">
                    <span className="material-icons-sharp">
                        add
                    </span>
                    <h3>New Login</h3>
                </a>
                <a href="#">
                    <span className="material-icons-sharp">
                        logout
                    </span>
                    <h3>Logout</h3>
                </a>
            </div>
        </aside>
        {/* <!-- End of Sidebar Section --> */}

        {/* <!-- Main Content --> */}
        <main>
            <div className='DEOK_MAIN_CL_main'>
            <h1>Analytics</h1>
            {/* <!-- Analyses --> */}
            <div className="DEOK_MAIN_CL_analyse">
                <div className="sales">
                    <div className="status">
                        <div className="info">
                            <h3>Total Sales</h3>
                            <h1>$65,024</h1>
                        </div>
                        <div className="progresss">
                            <svg>
                                <circle cx="38" cy="38" r="36"></circle>
                            </svg>
                            <div className="percentage">
                                <p>+81%</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="visits">
                    <div className="status">
                        <div className="info">
                            <h3>Site Visit</h3>
                            <h1>24,981</h1>
                        </div>
                        <div className="progresss">
                            <svg>
                                <circle cx="38" cy="38" r="36"></circle>
                            </svg>
                            <div className="percentage">
                                <p>-48%</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="searches">
                    <div className="status">
                        <div className="info">
                            <h3>Searches</h3>
                            <h1>14,147</h1>
                        </div>
                        <div className="progresss">
                            <svg>
                                <circle cx="38" cy="38" r="36"></circle>
                            </svg>
                            <div className="percentage">
                                <p>+21%</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- End of Analyses --> */}

            {/* <!-- New Users Section --> */}
            <div className="new-users">
                <h2>New Users</h2>
                <div className="user-list">
                    <div className="user">
                        <img src="images/profile-2.jpg" />
                        <h2>Jack</h2>
                        <p>54 Min Ago</p>
                    </div>
                    <div className="user">
                        <img src="images/profile-3.jpg" />
                        <h2>Amir</h2>
                        <p>3 Hours Ago</p>
                    </div>
                    <div className="user">
                        <img src="images/profile-4.jpg" />
                        <h2>Ember</h2>
                        <p>6 Hours Ago</p>
                    </div>
                    <div className="user">
                        <img src="images/plus.png" />
                        <h2>More</h2>
                        <p>New User</p>
                    </div>
                </div>
            </div>
            {/* <!-- End of New Users Section --> */}

            {/* <!-- Recent Orders Table --> */}
            <div className="recent-orders">
                <h2>Recent Orders</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Course Name</th>
                            <th>Course Number</th>
                            <th>Payment</th>
                            <th>Status</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                    {orders.map(order => (
        <tr key={order.productNumber}>
            <td>{order.productName}</td>
            <td>{order.productNumber}</td>
            <td>{order.paymentStatus}</td>
            <td className={order.status === 'Declined' ? 'DEOK_MAIN_CL_danger' : order.status === 'Pending' ? 'DEOK_MAIN_CL_warning' : 'DEOK_MAIN_CL_primary'}>{order.status}</td>
            <td className="primary">Details</td>
        </tr>
    ))}
                    </tbody>
                </table>
                <a href="#">Show All</a>
            </div>
            {/* <!-- End of Recent Orders -->  */}
            </div>
        </main>
        {/* <!-- End of Main Content --> */}

        {/* <!-- Right Section --> */}
        <div className="DEOK_MAIN_CL_right-section">
            <div className="nav">
                <button id="menu-btn">
                    <span className="material-icons-sharp">
                        menu
                    </span>
                </button>
                <div className="dark-mode">
                    <span className="material-icons-sharp active">
                        light_mode
                    </span>
                    <span className="material-icons-sharp">
                        dark_mode
                    </span>
                </div>

                <div className="profile">
                    <div className="info">
                        <p>Hey, <b>Reza</b></p>
                        <small className="DEOK_MAIN_CL_text-muted">Admin</small>
                    </div>
                    <div className="profile-photo">
                        <img src="images/profile-1.jpg" />
                    </div>
                </div>

            </div>
            {/* <!-- End of Nav --> */}

            <div className="user-profile">
                <div className="logo">
                    <img src="images/logo.png" />
                    <h2>AsmrProg</h2>
                    <p>Fullstack Web Developer</p>
                </div>
            </div>

            <div className="reminders">
                <div className="header">
                    <h2>Reminders</h2>
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