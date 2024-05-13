
import React, { useState, useEffect } from 'react';
import Web3 from 'web3'
import GoogleLogin from 'react-google-login';
import detectEthereumProvider from '@metamask/detect-provider';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import { D_CONTRACT_ABI, D_CONTRACT_ADDRESS } from "../contract_constants/Doctor.js";

const DoctorLoginPage = () => {
  const navigate = useNavigate(); // Initialize navigate function using the useNavigate hook
  const [web3, setWeb3] = useState(null);
  const [account, setAccount] = useState(null);

  const handleGoogleLogin = (response) => {
    // Handle Google login response
    console.log(response);
  };

  useEffect(() => {
    if (window.ethereum) {
      const web3Instance = new Web3(window.ethereum);
      setWeb3(web3Instance);
      connectWallet()
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

  const handleMetamaskLogin = async () => {
    if (!web3) {
      alert('Web3 is not initialized. Make sure MetaMask is installed.');
      return;
    }
    else{
      const contract = new web3.eth.Contract(D_CONTRACT_ABI,D_CONTRACT_ADDRESS);
      console.log(account);
      contract.methods.isDoctor(account).call({from :account}).then(result => {
        if(result){
          console.log('loged in:', result)
          navigate('/doctorView');
        }
        else{
          alert('Login failed! Check if your account is authorized');
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
    <div className="auth-form-wrap">
      <h2>Doctor Login</h2>
      <div className="mb-4">
        <GoogleLogin
          clientId="YOUR_GOOGLE_CLIENT_ID"
          render={(renderProps) => (
            <button
              id="google-login"
              className="btn btn-primary btn-block"
              onClick={renderProps.onClick}
              disabled={renderProps.disabled}
            >
              Login with Google
            </button>
          )}
          onSuccess={handleGoogleLogin}
          onFailure={(error) => console.error('Google login failed', error)}
        />
      </div>
      <div>
        <button
          id="metamask-login"
          className="btn btn-secondary btn-block"
          onClick={handleMetamaskLogin}
        >
          Login with Metamask
        </button>
      </div>
    </div>
  );
};

export default DoctorLoginPage;
