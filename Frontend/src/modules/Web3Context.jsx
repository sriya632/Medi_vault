// Web3Context.jsx
import React, { createContext, useContext, useState, useEffect } from 'react';
import Web3 from 'web3';

const Web3Context = createContext();

export const useWeb3 = () => useContext(Web3Context);

export const Web3Provider = ({ children }) => {
    const [web3, setWeb3] = useState(null);
    const [account, setAccount] = useState(null);

    useEffect(() => {
        const loadWeb3 = async () => {
            if (window.ethereum) {
                const web3Instance = new Web3(window.ethereum);
                setWeb3(web3Instance);

                const accounts = await web3Instance.eth.getAccounts();
                if (accounts.length > 0) {
                    setAccount(accounts[0]);
                }

                window.ethereum.on('accountsChanged', (accounts) => {
                    if (accounts.length > 0) {
                        setAccount(accounts[0]);
                    } else {
                        setAccount(null);
                    }
                });
            } else {
                console.log("Please install MetaMask to use this feature!");
            }
        };

        loadWeb3();
        return () => {
            if (window.ethereum) {
                window.ethereum.removeListener('accountsChanged', () => {});
            }
        };
    }, []);

    return (
        <Web3Context.Provider value={{ web3, account, setAccount }}>
            {children}
        </Web3Context.Provider>
    );
};
