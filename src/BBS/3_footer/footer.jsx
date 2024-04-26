import React from "react";
import './footer.css';
import fb from '../assets/fbimg.png';
import twitter from '../assets/twitter.png';


const Footer = () => {
    return (
        <div className="footer">
            <div className="sb__footer section__padding">
                <div className="sb__footer-links">
                    <div className="sb__footer-links_div">
                        <h4>For Business</h4>
                        <a href="/employer">
                            <p>Employer</p>
                        </a>
                        <a href="/healthplan">
                            <p>Health Plan</p>
                        </a>
                        <a href="/individual">
                            <p>Individual</p>
                        </a>
                    </div>
                    <div className="sb__footer-links_div">
                        <h4>Resources</h4>
                        <a href="/resources">
                            <p>Resources Center</p>
                        </a>
                        <a href="/testimonials">
                            <p>Testimonials</p>
                        </a>
                        <a href="/stv">
                            <p>STV</p>
                        </a>
                    </div>
                    <div className="sb__footer-links_div">
                        <h4>Partners</h4>
                        <a href="/partner">
                            <p>Swing Tech</p>
                        </a>
                    </div>
                    <div className="sb__footer-links_div">
                        <h4>Company</h4>
                        <a href="/about">
                            <p>About</p>
                        </a>
                        <a href="/press">
                            <p>Press</p>
                        </a>
                        <a href="/career">
                            <p>Career</p>
                        </a>
                        <a href="/contact">
                            <p>Contact</p>
                        </a>
                    </div>
                    <div className="sb__footer-links_div">
                        <h4>Coming Soon On</h4>
                        <div className="socialmedia">
                            <p><img src={twitter} alt="twitter.png"></img></p>
                            <p><img src={twitter} alt="twitter.png"></img></p>
                            <p><img src={twitter} alt="twitter.png"></img></p>
                            <p><img src={twitter} alt="twitter.png"></img></p>
                        </div>
                    </div>
                </div>
                <hr /> {/* Replace <hr></hr> with <hr /> */}
                <div className="sb__footer-below">
                    <div className="sb_footer-copyright">
                        <p>
                            @{new Date().getFullYear()} CodeInn. All right reserved.
                        </p>
                    </div>
                    <div className="sb__footer-below-links">
                        <a href="/terms"><div><p>Terms & Conditions</p></div></a>
                        <a href="/privacy"><div><p>Privacy</p></div></a>
                        <a href="/security"><div><p>Security</p></div></a>
                        <a href="/cookie"><div><p>Cookie Declaration</p></div></a>
                        {/* Corrected the href value from "/cooke" to "/cookie" */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;
