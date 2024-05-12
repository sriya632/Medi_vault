// src/constants/contractConstants.js

export const D_P_CONTRACT_ADDRESS = "0x29FA94026A648aF640139d4BC58BE303CC241Fbe";

export const D_P_CONTRACT_ABI = [
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_didRegistryAddress",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "_appointmentBookAddress",
                "type": "address"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "appointmentId",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "string",
                "name": "comment",
                "type": "string"
            }
        ],
        "name": "CommentPosted",
        "type": "event"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_appointmentId",
                "type": "uint256"
            },
            {
                "internalType": "string",
                "name": "_comment",
                "type": "string"
            }
        ],
        "name": "addComment",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_appointmentId",
                "type": "uint256"
            }
        ],
        "name": "viewComment",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    }
];
