// src/constants/contractConstants.js

export const CONTRACT_ADDRESS = "0x22ab786267e3288Dd0cC332d2e5C38dF3C44973d";

export const CONTRACT_ABI =[
    {
        "inputs": [],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "id",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "string",
                "name": "department",
                "type": "string"
            },
            {
                "indexed": false,
                "internalType": "string",
                "name": "doctor",
                "type": "string"
            },
            {
                "indexed": false,
                "internalType": "address",
                "name": "patientAddress",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "string",
                "name": "patientName",
                "type": "string"
            }
        ],
        "name": "NewAppointment",
        "type": "event"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "appointments",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "id",
                "type": "uint256"
            },
            {
                "internalType": "string",
                "name": "department",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "doctor",
                "type": "string"
            },
            {
                "internalType": "uint256",
                "name": "date",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "name": "patientAddress",
                "type": "address"
            },
            {
                "internalType": "string",
                "name": "patientName",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "contactDetails",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "message",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "_department",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_doctor",
                "type": "string"
            },
            {
                "internalType": "uint256",
                "name": "_date",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "name": "_patientAddress",
                "type": "address"
            },
            {
                "internalType": "string",
                "name": "_patientName",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_contactDetails",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_message",
                "type": "string"
            }
        ],
        "name": "createAppointment",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_id",
                "type": "uint256"
            }
        ],
        "name": "getAppointment",
        "outputs": [
            {
                "components": [
                    {
                        "internalType": "uint256",
                        "name": "id",
                        "type": "uint256"
                    },
                    {
                        "internalType": "string",
                        "name": "department",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "doctor",
                        "type": "string"
                    },
                    {
                        "internalType": "uint256",
                        "name": "date",
                        "type": "uint256"
                    },
                    {
                        "internalType": "address",
                        "name": "patientAddress",
                        "type": "address"
                    },
                    {
                        "internalType": "string",
                        "name": "patientName",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "contactDetails",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "message",
                        "type": "string"
                    }
                ],
                "internalType": "struct AppointmentBook.Appointment",
                "name": "",
                "type": "tuple"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "_doctor",
                "type": "string"
            }
        ],
        "name": "getAppointmentsByDoctor",
        "outputs": [
            {
                "components": [
                    {
                        "internalType": "uint256",
                        "name": "id",
                        "type": "uint256"
                    },
                    {
                        "internalType": "string",
                        "name": "department",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "doctor",
                        "type": "string"
                    },
                    {
                        "internalType": "uint256",
                        "name": "date",
                        "type": "uint256"
                    },
                    {
                        "internalType": "address",
                        "name": "patientAddress",
                        "type": "address"
                    },
                    {
                        "internalType": "string",
                        "name": "patientName",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "contactDetails",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "message",
                        "type": "string"
                    }
                ],
                "internalType": "struct AppointmentBook.Appointment[]",
                "name": "",
                "type": "tuple[]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_patientAddress",
                "type": "address"
            }
        ],
        "name": "getAppointmentsByPatient",
        "outputs": [
            {
                "components": [
                    {
                        "internalType": "uint256",
                        "name": "id",
                        "type": "uint256"
                    },
                    {
                        "internalType": "string",
                        "name": "department",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "doctor",
                        "type": "string"
                    },
                    {
                        "internalType": "uint256",
                        "name": "date",
                        "type": "uint256"
                    },
                    {
                        "internalType": "address",
                        "name": "patientAddress",
                        "type": "address"
                    },
                    {
                        "internalType": "string",
                        "name": "patientName",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "contactDetails",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "message",
                        "type": "string"
                    }
                ],
                "internalType": "struct AppointmentBook.Appointment[]",
                "name": "",
                "type": "tuple[]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getAppointmentsCount",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "owner",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_id",
                "type": "uint256"
            },
            {
                "internalType": "string",
                "name": "_department",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_doctor",
                "type": "string"
            },
            {
                "internalType": "uint256",
                "name": "_date",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "name": "_patientAddress",
                "type": "address"
            },
            {
                "internalType": "string",
                "name": "_patientName",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_contactDetails",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_message",
                "type": "string"
            }
        ],
        "name": "updateAppointment",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }
];
