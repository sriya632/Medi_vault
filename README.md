# Medi_vault
520 project repository


Setting up Metamask wallet:
- Add Metamask extension to your chrome , you can add it using this link (https://chromewebstore.google.com/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?pli=1)
- Setup the wallet following the onscreen instructions 
- You need to add polygon amoy network to your wallet , you can add that by following these instructions mentioned in this blog(https://docs.tradetrust.io/docs/topics/advanced/add-polygon-networks-to-metamask-wallet/)
- make sure you are filling details mentioned for polygon amoy test net


Faucet Currency Loading :
- to test our application , we need to pay a little txn fee to blockchain, since we are using test network for our application , we can use faucet currency .
-  to load faucet currency go to https://faucet.polygon.technology/ and connect your discord with the website .
- change network to polygon amoy testnet , and copy account address from metamask wallet , paste it here .
- submit the request , you will receive 0.2MATIC to test the application.



To initalize frontend:
- navigate to Frontend folder
- npm i
- npm run dev

running the application :

- click on login , if you are new user you need to register first(note: You can only create one account using one account address)
- once registration is done you can login using those credentials 
- all the features are shown in the demo video

Running Test Cases :
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
- - metamask extension
- - 3 dots top right
- - account details
- - show private key
- cd Medi_vault/Frontend
- npm i
- npx synress run
- - also add on '-no-video' to the end of the command to get the test runs without recording them



