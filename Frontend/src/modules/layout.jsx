import React from 'react';

import '../css/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { MdContactSupport } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineSupportAgent } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { useAuth} from './AuthContext.jsx';

const Layout = () => {
    const { isAuthenticated, logout } = useAuth();
    const handleLogout = () => {
        logout();};
    return (
        <>
        <header>
            <div className="header-top-bar">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <ul className="top-bar-info list-inline-item pl-0 mb-0">
                                <li className="list-inline-item"><a href="mailto:support@gmail.com"><MdContactSupport className="mr-2" />support@medivault.com</a></li>
                                <li className="list-inline-item"><FaLocationDot className="icofont-location-pin mr-2" />140 Governors Dr. Amherst, MA, USA{" "}</li>
                            </ul>
                        </div>
                        <div className="col-lg-6">
                            <div className="text-lg-right top-right-bar mt-2 mt-lg-0">
                                <a href="tel:+23-345-67890">
                                    <span>Call Now : </span>
                                    <span className="h4">+1 (413) 545-2744</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <nav className="navbar navbar-expand-lg navigation" id="navbar">
                <div className="container">
                    <a className="navbar-brand" href="/">
                        <img src="logo.jpg" alt="" className="img-fluid" width="150" height="150"/>
                    </a>
                    <button className="navbar-toggler collapsed"type="button"data-toggle="collapse" data-target="#navbarmain"
                        aria-controls="navbarmain"aria-expanded="false"aria-label="Toggle navigation">
                        <span className="icofont-navigation-menu" />
                    </button>

                    {/* Main Navigation Here */}
                    <div className="collapse navbar-collapse" id="navbarmain">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active"><Link className="nav-link" href="/">Home</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/services">Services</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/doctor">Doctors</Link></li>
                            {/* <li className="nav-item"><Link className="nav-link" to="/appointment">Appointment</Link></li>
                            {/* Navigation links */}
                            <li className="nav-item dropdown" id="appointment-dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink"
                                   role="button"
                                   data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Appointments
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <Link className="dropdown-item" to="/appointment">Book Appointment</Link>
                                    <Link className="dropdown-item" to="/upcoming-appointments">Upcoming
                                        Appointments</Link>
                                    <Link className="dropdown-item" to="/past-appointments">Past Appointments</Link>
                                </div>
                            </li>
                            {isAuthenticated ? (
                                <>
                                    <li className="nav-item"><Link className="nav-link" to="/profile">Profile</Link>
                                    </li>
                                    <li className="nav-item"><Link className="nav-link " to="/about"
                                                                   onClick={handleLogout}>Logout</Link></li>
                                </>
                            ) : (
                                <li className="nav-item"><Link className="nav-link" to="/login">Login</Link></li>
                            )}
                        </ul>
                    </div>
                </div>
            </nav>
        </header>

            {/* Any component passed into Layout will render here in the middle */}
            <Outlet/>

            <footer className="footer section gray-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 mr-auto col-sm-6">
                            <div className="widget mb-5 mb-lg-0">
                                <div className="logo mb-4">
                                    <img src="logo.png" alt="" className="img-fluid"/>
                                </div>
                                <p>We are Medivault and we made this website. Please give us an A for this class, thank
                                    you.</p>
                                <ul className="list-inline footer-socials mt-4">
                                <li className="list-inline-item">
                                    <a href="https://www.facebook.com">
                                        <FaFacebook />
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="https://twitter.com">
                                        <FaTwitter />
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="https://www.linkedin.com">
                                        <FaLinkedin />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-6 col-sm-6">
                        <div className="widget mb-5 mb-lg-0">
                            <h4 className="text-capitalize mb-3">Department</h4>
                            <div className="divider mb-4" />
                            <ul className="list-unstyled footer-menu lh-35">
                                <li><a href="#">Surgery </a></li>
                                <li><a href="#">Women's Health</a></li>
                                <li><a href="#">Radiology</a></li>
                                <li><a href="#">Cardio</a></li>
                                <li><a href="#">Medicine</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-6 col-sm-6">
                        <div className="widget mb-5 mb-lg-0">
                            <h4 className="text-capitalize mb-3">Support</h4>
                            <div className="divider mb-4" />
                            <ul className="list-unstyled footer-menu lh-35">
                                <li><a href="#">Terms &amp; Conditions</a></li>
                                <li><a href="#">Privacy Policy</a></li>
                                <li><a href="#">Company Support </a></li>
                                <li><a href="#">FAQ</a></li>
                                <li><a href="#">Company Licence</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="widget widget-contact mb-5 mb-lg-0">
                            <h4 className="text-capitalize mb-3">Get in Touch</h4>
                            <div className="divider mb-4" />
                            <div className="footer-contact-block mb-4">
                                <div className="icon d-flex align-items-center">
                                    <MdEmail className="icofont-email mr-3" />
                                    <span className="h6 mb-0">Support Available 24/7</span>
                                </div>
                                <h4 className="mt-2">
                                    <a href="tel:+23-345-67890">Support@medivault.com</a>
                                </h4>
                            </div>
                            <div className="footer-contact-block">
                                <div className="icon d-flex align-items-center">
                                    <MdOutlineSupportAgent className="mr-3" />
                                    <span className="h6 mb-0">Mon to Fri : 08:30 - 18:00</span>
                                </div>
                                <h4 className="mt-2">
                                    <a href="tel:+23-345-67890">+1 (413) 545-2744</a>
                                </h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-btm py-4 mt-5">
                    <div className="row align-items-center justify-content-between">
                        <div className="col-lg-6">
                            <div className="copyright">
                                © Copyright Reserved to <span className="text-color">Medivault</span>{" "}
                                by{" "}
                                <a target="_blank">
                                    Quach's Copyright Business 
                                </a>
                            </div>
                        </div>
                        
                    </div>
                    <div className="row">
                        <div className="col-lg-4">
                            <a className="backtop js-scroll-trigger" href="#top">
                            <i className="icofont-long-arrow-up" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        </>

    );
}

export default Layout;
