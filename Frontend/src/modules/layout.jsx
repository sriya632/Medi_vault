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

const Layout = () => {
    return (
        <>
        <header>
            <div className="header-top-bar">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <ul className="top-bar-info list-inline-item pl-0 mb-0">
                                <li className="list-inline-item"><a href="mailto:support@gmail.com"><MdContactSupport className="mr-2" />support@medapp.com</a></li>
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
                    <a className="navbar-brand" href="index.html">
                        <img src="logo.png" alt="" className="img-fluid" />
                    </a>
                    <button className="navbar-toggler collapsed"type="button"data-toggle="collapse" data-target="#navbarmain"
                        aria-controls="navbarmain"aria-expanded="false"aria-label="Toggle navigation">
                        <span className="icofont-navigation-menu" />
                    </button>

                    {/* Main Navigation Here */}
                    <div className="collapse navbar-collapse" id="navbarmain">
                    <ul className="navbar-nav ml-auto">
                            <li className="nav-item active"><a className="nav-link" href="index.html">Home</a></li>
                            <li className="nav-item"><a className="nav-link" href="about.html">About</a></li>
                            <li className="nav-item"><a className="nav-link" href="service.html">Services</a></li>
                            <li className="nav-item dropdown"><a className="nav-link dropdown-toggle"href="department.html"id="dropdown02"data-toggle="dropdown"
                                aria-haspopup="true"aria-expanded="false">Department <i className="icofont-thin-down" /></a>
                                <ul className="dropdown-menu" aria-labelledby="dropdown02">
                                    <li><a className="dropdown-item" href="department.html">Departments</a></li>
                                    <li><a className="dropdown-item" href="department-single.html">Department Single</a></li> 
                                </ul>
                            </li>
                            <li className="nav-item dropdown"><a className="nav-link dropdown-toggle" href="doctor.html" id="dropdown03" data-toggle="dropdown"
                                aria-haspopup="true" aria-expanded="false"> Doctors <i className="icofont-thin-down" /></a>
                                <ul className="dropdown-menu" aria-labelledby="dropdown03">
                                    <li><a className="dropdown-item" href="doctor.html">Doctors</a></li>
                                    <li><a className="dropdown-item" href="doctor-single.html">Doctor Single</a></li>
                                    <li><a className="dropdown-item" href="appoinment.html">Appoinment</a></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown"><a className="nav-link dropdown-toggle"href="blog-sidebar.html"id="dropdown05"data-toggle="dropdown"
                                aria-haspopup="true"aria-expanded="false"> Blog <i className="icofont-thin-down" /></a>
                                <ul className="dropdown-menu" aria-labelledby="dropdown05">
                                    <li><a className="dropdown-item" href="blog-sidebar.html">Blog with Sidebar</a></li>
                                    <li><a className="dropdown-item" href="blog-single.html">Blog Single</a></li>
                                </ul>
                            </li>
                            <li className="nav-item"><Link className="nav-link" to="/login">Login</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>

        {/* Any component passed into Layout will render here in the middle */}
        <Outlet />

        <footer className="footer section gray-bg">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 mr-auto col-sm-6">
                        <div className="widget mb-5 mb-lg-0">
                            <div className="logo mb-4">
                                <img src="logo.png" alt="" className="img-fluid" />
                            </div>
                            <p>We are Medapp and we made this website. Please give us an A for this class, thank you.</p>
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
                                <li><a href="#">Wome's Health</a></li>
                                <li><a href="#">Radiology</a></li>
                                <li><a href="#">Cardioc</a></li>
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
                                <li><a href="#">FAQuestions</a></li>
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
                                    <span className="h6 mb-0">Support Available for 24/7</span>
                                </div>
                                <h4 className="mt-2">
                                    <a href="tel:+23-345-67890">Support@email.com</a>
                                </h4>
                            </div>
                            <div className="footer-contact-block">
                                <div className="icon d-flex align-items-center">
                                    <MdOutlineSupportAgent className="mr-3" />
                                    <span className="h6 mb-0">Mon to Fri : 08:30 - 18:00</span>
                                </div>
                                <h4 className="mt-2">
                                    <a href="tel:+23-345-67890">+23-456-6588</a>
                                </h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-btm py-4 mt-5">
                    <div className="row align-items-center justify-content-between">
                        <div className="col-lg-6">
                            <div className="copyright">
                                © Copyright Reserved to <span className="text-color">MedApp</span>{" "}
                                by{" "}
                                <a target="_blank">
                                    Quach's Copyright Business 
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="subscribe-form text-lg-right mt-5 mt-lg-0">
                                <form action="#" className="subscribe">
                                    <input type="text" className="form-control" placeholder="Your Email address" />
                                    <a href="#" className="subscribe-btn-that-doesnt-work"> Subscribe </a>
                                </form>
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
