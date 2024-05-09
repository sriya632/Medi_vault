// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;


import "@openzeppelin/contracts/access/AccessControl.sol";

contract DIDRegistry is AccessControl {
    bytes32 public constant DOCTOR_ROLE = keccak256(abi.encodePacked("DOCTOR_ROLE"));

    constructor() {
        _setupRole(DEFAULT_ADMIN_ROLE, msg.sender); 
    }

    function assignDoctorRole(address account) public {
        require(hasRole(DEFAULT_ADMIN_ROLE, msg.sender), "Caller is not an admin");
        grantRole(DOCTOR_ROLE, account);
    }

    function isDoctor(address account) public view returns(bool) {
        return hasRole(DOCTOR_ROLE, account);
    }
}
