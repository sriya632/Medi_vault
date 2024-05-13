# Medi_vault
**520 project repository**

**Introduction**

In today's rapidly evolving healthcare landscape, the demand for robust,
secure, and user-friendly health record storage systems is more pressing than ever. Our Decentralized Health Record Management System addresses these needs by employing blockchain technology and smart contracts to ensure the integrity, privacy, and accessibility of patient data.

This system is designed to cater to both patients and hospital staff (admin), facilitating secure and transparent interactions with health data. By leveraging the immutable and decentralized nature of blockchain, our system provides a tamper-resistant storage solution with automated data access management, enhancing security and fostering trust among users.

**Project Purpose**

The purpose of this project is to develop a health care management system that

- Stores patient health records in a decentralized ledger, preventing unauthorized alteration and ensuring data integrity.
- Automates and enforces data access and modification rules through the use of smart contracts, improving data security and operational efficiency.
- Provides a user-friendly interface for patients to input their health data and for hospital staff to access and manage this data effectively..

 **Setting up Metamask wallet:** 
- Add Metamask extension to your chrome , you can add it using this link (https://chromewebstore.google.com/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?pli=1)
- Setup the wallet following the onscreen instructions 
- You need to add polygon amoy network to your wallet , you can add that by following these instructions mentioned in this blog(https://docs.tradetrust.io/docs/topics/advanced/add-polygon-networks-to-metamask-wallet/)
- make sure you are filling details mentioned for polygon amoy test net


**Faucet Currency Loading :**

- to test our application , we need to pay a little txn fee to blockchain, since we are using test network for our application , we can use faucet currency .
-  to load faucet currency go to https://faucet.polygon.technology/ and connect your discord with the website .
- change network to polygon amoy testnet , and copy account address from metamask wallet , paste it here .
- submit the request , you will receive 0.2MATIC to test the application.

**Instructions in Deploying the Smart Contracts in Remix:**
- Open Remix IDE in your browser by going to https://remix.ethereum.org
- Upload the smart contracts folder from our project folder.
- Navigate to the Solidity Compiler and Compile the Code before deploying.
  - The ABI can be found under the "Solidity Compiler" tab after compilation. Click on the "ABI" button to copy it for integrating them to frontend. 
- Switch to Deploy Transactions
- Connect to the Metamask Environment and the account to which you want deploy the contracts.
- Click the "Deploy" button. MetaMask or your wallet should prompt you to confirm the transaction.
- After confirming the transaction, wait for the deployment to complete. Once done, you can see your deployed contract under the "Deployed Contracts" section.
  - The contract address is available in the "Deployed Contracts" section of the "Deploy & Run Transactions" tab. We need this to integrate it to front end.
  
**Files to add ABI and address in Frontend:**
- Appointment.sol contract's abi and contract address is in appointment.js
- Authentication.sol contract details are in authentication.js
- DoctorLogin.sol contract is in Doctor.js
  - This page is an access control page - this can be used to give doctor role to a specific account.( Details required metamask account and a doctor name which can be taken from our doctors page). 
  - To give access to a specific account call assignDoctorRole from remix after deploying.
- PostAppointmentsComment.sol is in DoctorComments.js
Note - Contacts shouldn't be deployed multiple times as it becomes a new block and makes it difficult to retrive data from previous smart contract deployed.

**To initalize frontend:**
- navigate to Frontend folder
- npm i
- npm run dev

**running the application :**
Note : Each account can only have one user.
- click on login , if you are new user you need to register first(note: You can only create one account using one account address)
- once registration is done you can login using those credentials 
- all the features are shown in the demo video
- Similarly for doctor ( login with metamask is only available couldn't implement login with google)


**Running Test Cases :**
Backend:
- for running backend testcases you need remix , an online compiler where we can run and test smart contracts .
- https://remix.ethereum.org/#lang=en&optimize=false&runs=200&evmVersion=null&version=soljson-v0.8.25+commit.b61c2a91.js -  this is link to remix 
- here is a small tutorial on how to work on remix -https://youtu.be/vH8T3In6ZkE?si=ilPonJOjWJXPSciG
- for running smart contract testcases you need two files , one is smart contract file and another is smart contrat test file.
- All smart contracts are available in Backend folder in the application directory and all smart contract test cases file are there in test_files_backend folder.
- you need to import all smart contracts and smart contracts test files into remix. Then should start deploying and testing.
- 

Frontend:
- create a .env file in the Medi_vault/Frontend directory
- populate it with:
```
CYPRESS_REMOTE_DEBUGGING_PORT=9222
PASSWORD={INSERT YOUR PASSWORD TO YOUR METAMASK ACCOUNT HERE WITHOUT THE BRACKETS}
PRIVATE_KEY={INSERT YOUR METAMASK PRIVATE KEY HERE WITHOUT THE BRACKETS}

NETWORK_NAME='Polygon Amoy Testnet'
RPC_URL='https://rpc-amoy.polygon.technology/'
CHAIN_ID=80002
SYMBOL='MATIC'
BLOCK_EXPLORER='https://amoy.polygonscan.com/'
```
- Access the private key by going to:
  - metamask extension
  - 3 dots top right
  - account details
  - show private key
- cd Medi_vault/Frontend
- npm i
- npx synress run
  - also add on '-no-video' to the end of the command to get the test runs without recording them



