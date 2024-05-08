import React, { useState } from 'react';
import Web3 from 'web3';
import '../css/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';
import { FiEye, FiEyeOff } from "react-icons/fi";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext.jsx';

const LoginForm = () => {
    const {login } = useAuth();
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const navigate = useNavigate();
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

    const submitLogin = (event) => {
        event.preventDefault(); // Prevent the default form submission
        const projectId = '6bc42b50d520477f99374ca081d7a0c5';
        const infuraUrl = `https://polygon-amoy.infura.io/v3/6bc42b50d520477f99374ca081d7a0c5`;

        const web3 = new Web3(new Web3.providers.HttpProvider(infuraUrl, {
            headers: [{ name: "Authorization", value: "Basic "}]
        }));

        const address = "0x4C9c5b14D15C030c723c7352ddd818246d2223a1";
        const abi =  [
            {
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "_age",
                        "type": "uint256"
                    },
                    {
                        "internalType": "string",
                        "name": "_bloodGroup",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "_address",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "_pastMedicalHistory",
                        "type": "string"
                    }
                ],
                "name": "addPatientDetails",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "string",
                        "name": "_firstName",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "_lastName",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "_email",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "_phoneNumber",
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
                        "internalType": "address",
                        "name": "patientAddress",
                        "type": "address"
                    }
                ],
                "name": "getPatientDetails",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    },
                    {
                        "internalType": "string",
                        "name": "",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "",
                        "type": "string"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "userAddress",
                        "type": "address"
                    }
                ],
                "name": "getUserDetails",
                "outputs": [
                    {
                        "internalType": "string",
                        "name": "",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "",
                        "type": "string"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "userAddress",
                        "type": "address"
                    }
                ],
                "name": "isUser",
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
            }
        ];

        const contract = new web3.eth.Contract(abi, address);

        const account = web3.eth.accounts.privateKeyToAccount('0x51a18a3afa87e9833a04d67dc201244f5e92fd17fd98d4221532281d5b21438c');
        web3.eth.accounts.wallet.add(account);
        web3.eth.defaultAccount = account.address;

        // Example of a contract function call
        contract.methods.loginAccount(formData.email, formData.password)
        .call({from: account.address})
        .then(result => {
            if(result){
                console.log('Login successful: ', result);
                alert('Login successful!');
                login(formData); // Passing formData instead of userData
                navigate('/profile');
            }
            else{
                alert('Login failed! Check username or password');
                console.log("no transaction errors");
            }
        }).catch(error => {
            console.error('Login failed: ', error);
            if (error.receipt) {
                console.log('Transaction receipt: ', error.receipt); // Provides more details about the transaction failure
            }
        });
    };

    return (
        <section>
            <div className="auth-form-wrap">
                <h2>Login to Your Account</h2>
                <div>
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
                        <div onClick={togglePasswordVisibility} style={{ cursor: 'pointer', display: 'inline-block', marginTop: "10px"}}>
                            {showPassword ? 
                                <div className='text-sm' style={{ display: 'inline-block', paddingRight: '8px' }}> Hide Password? </div> :
                                <div className='text-sm' style={{ display: 'inline-block', paddingRight: '8px' }}> Show Password? </div>}
                            {showPassword ? <a ><FiEye /></a> : <a ><FiEyeOff /></a>} 
                        </div>
                        <div>
                            <Link to={"/register"} className="text-sm">Register</Link><br />
                            <Link to={"/doctorlogin"} className="text-sm">Are you an admin?</Link>
                        </div>
                    </div>
                    <button className="btn btn-primary btn-block" onClick={submitLogin}> Login </button>
                </div>
            </div>
        </section>
    );
}

export default LoginForm;

