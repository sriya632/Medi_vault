import React, { useState } from 'react';
import Web3 from 'web3'
import '../css/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';
import { FiEye } from "react-icons/fi";
import { FiEyeOff } from "react-icons/fi";

const RegisterForm = () => {

    const [formData, setFormData] = useState({
        FirstName: '',
        LastName: '',
        PhoneNumber:'',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const [showPassword, setShowPassword] = useState(false);
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const projectId = '6bc42b50d520477f99374ca081d7a0c5';
    const infuraUrl = `https://polygon-amoy.infura.io/v3/6bc42b50d520477f99374ca081d7a0c5`;

    const web3 = new Web3(new Web3.providers.HttpProvider(infuraUrl, {
        headers: [{ name: "Authorization", value: "Basic "}]
      }));

    const address = "0xb02992b422bB7377B0b3ee8dd04Fc3ea6e900823";
    const abi =  [
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "_email",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "_password",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "_confirmPassword",
                    "type": "string"
                }
            ],
            "name": "createAccount",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "_email",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "_password",
                    "type": "string"
                }
            ],
            "name": "loginAccount",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "name": "users",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "email",
                    "type": "string"
                },
                {
                    "internalType": "bytes32",
                    "name": "hashedPassword",
                    "type": "bytes32"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        }
    ];
    const contract = new web3.eth.Contract(abi,address);

    const account = web3.eth.accounts.privateKeyToAccount('0x51a18a3afa87e9833a04d67dc201244f5e92fd17fd98d4221532281d5b21438c');
    web3.eth.accounts.wallet.add(account);
    web3.eth.defaultAccount = account.address;

    const submitRegister = (event) => {
        event.preventDefault(); // Prevent the default form submission
        console.log(account.address);
        if (formData.password !== formData.confirmPassword) {
            alert("Passwords do not match!");
            return;
        }
        try {
            // Example of a contract function call
            contract.methods.createAccount(formData.email, formData.password,formData.confirmPassword)
            .send({from: account.address, gas: 3000000}).then(result => {
                console.log('Transaction successful: ', result);
                alert('Registration successful!');
              })
              .catch(error => {
                console.error('Transaction failed: ', error);
                alert('Registration failed! Already existing user or wrong details entered');
                if (error.receipt) {
                  console.log('Transaction receipt: ', error.receipt); // Provides more details about the transaction failure
                }
              });
              
            console.log("Registration Submitted", formData);
        } catch (error) {
            console.error(error);
            alert('Registration failed. See console for details.');
        }
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
                            value={formData.FirstName}
                            required={true}
                            onChange={handleChange}        
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            id="LastName"
                            name="LastName"
                            placeholder="Enter your Last Name"
                            value={formData.LastName}
                            onChange={handleChange}
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
                            value={formData.PhoneNumber}
                            onChange={handleChange} 
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
                            onChange={handleChange}
                            value={formData.email}
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
                            onChange={handleChange}
                            value={formData.password}
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
                            onChange={handleChange}
                            value={formData.confirmPassword}
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
