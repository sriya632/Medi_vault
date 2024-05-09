
import { useState, useEffect } from 'react';
import Web3 from 'web3'
import '../css/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';
import { FiEye, FiEyeOff } from "react-icons/fi";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext.jsx';
import {CONTRACT_ADDRESS,CONTRACT_ABI} from '../contract_constants/authentication.js';

const LoginForm = () => {
    const {login } = useAuth();
    const [formData, setFormData] = useState({
        email: '',
        password: ''
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

    const submitLogin = (event) => {
        event.preventDefault(); // Prevent the default form submission
        if (!web3) {
            alert('Web3 is not initialized. Make sure MetaMask is installed.');
            return;
        }
        if (!account) {
            alert('Please connect to MetaMask.');
            return;
        }
        else {
            const contract = new web3.eth.Contract(CONTRACT_ABI,CONTRACT_ADDRESS);
            console.log(account);
            // Example of a contract function call
            contract.methods.loginAccount(formData.email, formData.password)
                .call({from: account})
                .then(result => {
                    if (result) {
                        console.log('Login successful: ', result);
                        alert('Login successful!');
                        login();
                        navigate('/profile');
                    } else {
                        alert('Login failed! Check username or password');
                        console.log("no transaction errors");
                    }
                }).catch(error => {
                console.error('Login failed: ', error);
                if (error.code === 4001) {
                    // MetaMask error code for user rejected transaction
                    alert('Login failed: Transaction rejected by user.');
                } else if (error.message.includes('insufficient funds')) {
                    alert('Login failed: Insufficient funds to complete the transaction.');
                } else {
                    alert('Login failed: Unexpected error occurred.');
                }
            });

        }
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

