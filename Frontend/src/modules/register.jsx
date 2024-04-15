import React, { useState } from 'react';
import '../css/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';
import { FiEye } from "react-icons/fi";
import { FiEyeOff } from "react-icons/fi";

const RegisterForm = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [FirstName, setFirstName] = useState('');
    const [LastName, setLastName] = useState('');
    const [PhoneNumber, setPhoneNumber] = useState('');
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const submitRegister = () => {
        console.log("Submitted");
    };

    return (
        <>
        <section>
            <div className="auth-form-wrap">
                <h2>Create Your Account</h2>
                <div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            id="FirstName"
                            name="FirstName"
                            placeholder="Enter your First Name"
                            value={FirstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            required=""          
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            id="LastName"
                            name="LastName"
                            placeholder="Enter your Last Name"
                            value={LastName}
                            onChange={(e) => setLastName(e.target.value)}
                            required=""          
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="tel"
                            className="form-control"
                            id="PhoneNumber"
                            name="PhoneNumber"
                            placeholder="Enter your Phone Number"
                            value={PhoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            required=""          
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            name="email"
                            placeholder="Enter your email"
                            required=""
                        />
                    </div>
                    <div className="form-group password-group">
                        <input
                            type={showPassword ? 'text' : 'password'}
                            className="form-control"
                            id="password"
                            name="password"
                            placeholder="Enter your password"
                            required=""
                        />
                    </div>
                    <div className="form-group password-group">
                        <input
                            type={showPassword ? 'text' : 'password'}
                            className="form-control"
                            id="confirmPassword"
                            name="confirmPassword"
                            placeholder="Confirm your password"
                            required=""
                        />
                        <div onClick={togglePasswordVisibility} style={{ cursor: 'pointer', display: 'inline-block', paddingTop: "10px" }}>
                            {showPassword ? 
                                <div className='text-sm' style={{ display: 'inline-block', paddingRight: '8px' }}> Hide Password? </div> :
                                <div className='text-sm' style={{ display: 'inline-block', paddingRight: '8px' }}> Show Password? </div>}
                            {showPassword ? <a ><FiEye /></a> : <a ><FiEyeOff /></a>}                         
                        </div>
                    </div>
                    <button className="btn btn-primary btn-block" onClick={submitRegister}> Register </button>
                </div>
            </div>
        </section>
        </>
    );
}

export default RegisterForm;
