// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

// Import statement should be at the top of your Solidity file
import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/release-v4.7/contracts/access/AccessControl.sol";

contract DIDRegistry is AccessControl {
    bytes32 public constant DOCTOR_ROLE = keccak256(abi.encodePacked("DOCTOR_ROLE"));

    mapping(address => string) private doctorNames;

    constructor() {
        _setupRole(DEFAULT_ADMIN_ROLE, msg.sender); // Assign admin role to the deployer
    }

    // Assign the doctor role and set the doctor's name
    function assignDoctorRole(address account, string memory name) public {
        require(hasRole(DEFAULT_ADMIN_ROLE, msg.sender), "Caller is not an admin");
        grantRole(DOCTOR_ROLE, account);
        doctorNames[account] = name; // Store the name associated with the address
    }

// Retrieve the name of the doctor
    function getDoctorName(address account) public view returns (string memory) {
        require(hasRole(DOCTOR_ROLE, account), "This address does not have the doctor role");
        return doctorNames[account];
    }

    function isDoctor(address account) public view returns(bool) {
        return hasRole(DOCTOR_ROLE, account);
    }
}