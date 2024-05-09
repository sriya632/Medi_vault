import { useState, useEffect } from 'react';
import Web3 from 'web3'
import '../css/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';
import { FiEye } from "react-icons/fi";
import { FiEyeOff } from "react-icons/fi";
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext.jsx';


const RegisterForm = () => {
    const { register } = useAuth();
    const [formData, setFormData] = useState({
        FirstName: '',
        LastName: '',
        PhoneNumber:'',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const navigate = useNavigate();
    const [web3, setWeb3] = useState(null);
    const [account, setAccount] = useState(null);
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

    useEffect(() => {
        if (window.ethereum) {
            const web3Instance = new Web3(window.ethereum);
            setWeb3(web3Instance);
            connectWallet();
        } else {
            alert('Please install MetaMask to use this feature!');
        }
    }, []);

    const connectWallet = async () => {
        if (window.ethereum) {
            try {
                const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
                setAccount(accounts[0]); // Assuming you only need the first account
                console.log('Connected with account:', accounts[0]);
            } catch (error) {
                console.error('Error connecting to MetaMask', error);
                alert('Failed to connect MetaMask. If you refused the connection, please allow it to interact with this dApp.');
            }
        } else {
            alert('Please install MetaMask to use this feature!');
        }
    };

    const submitRegister = (event) => {
        event.preventDefault(); // Prevent the default form submission
        console.log(account);
        if (formData.password !== formData.confirmPassword) {
            alert("Passwords do not match!");
            return;
        }
        if (!web3) {
            alert('Web3 is not initialized. Make sure MetaMask is installed.');
            return;
        }
        if (!account) {
            alert('Please connect to MetaMask.');
            return;
        }
        else {
            try {
                const address = "0xe78F5756BBa7A33C6ed4FF35e4941f71Ef6d249D";
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
                const contract = new web3.eth.Contract(abi,address);
                // Example of a contract function call
                contract.methods.createAccount(formData.FirstName, formData.LastName, formData.email, formData.PhoneNumber, formData.password, formData.confirmPassword)
                    .send({from: account, gas: 3000000}).then(result => {
                    console.log('Transaction successful: ', result);
                    alert('Registration successful!');
                    navigate('/appointment');
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
                if (error.code === 4001) {
                    // MetaMask error code for user rejected transaction
                    alert('Registration failed: Transaction rejected by user.');
                } else if (error.message.includes('insufficient funds')) {
                    // Insufficient funds error
                    alert('Registration failed: Insufficient funds to complete the transaction.');
                } else {
                    // Other unexpected errors
                    alert('Registration failed: Unexpected error occurred.');
                }
            }
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
    register(userData);
}

export default RegisterForm;
