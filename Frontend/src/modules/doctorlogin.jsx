import React from 'react';
import GoogleLogin from 'react-google-login';
import detectEthereumProvider from '@metamask/detect-provider';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom

const DoctorLoginPage = () => {
  const navigate = useNavigate(); // Initialize navigate function using the useNavigate hook

  const handleGoogleLogin = (response) => {
    // Handle Google login response
    console.log(response);
  };

  const handleMetamaskLogin = async () => {
    try {
      const provider = await detectEthereumProvider();
      if (provider) {
        // Request access to the user's accounts
        await provider.request({ method: 'eth_requestAccounts' });
        // Handle Metamask login
        console.log('Metamask connected');
        navigate('/doctorView'); // Use navigate to redirect to the doctor view page
      } else {
        console.error('Metamask not detected');
        alert('Please install Metamask to use this feature');
      }
    } catch (error) {
      console.error('Metamask login error:', error);
      alert('An error occurred while connecting to Metamask');
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
