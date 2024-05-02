// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract UserAccount {
    struct User {
        string name;
        string email;
        bytes32 hashedPassword;
    }

    mapping(address => User) public users;
    
    function createAccount(string memory _name, string memory _email, string memory _password, string memory _confirmPassword) public {
        require(users[msg.sender].hashedPassword == 0, "Account already exists");
        require(bytes(_name).length > 0, "Name cannot be empty");
        require(bytes(_email).length > 0, "Email cannot be empty");
        require(bytes(_password).length >= 8, "Password must be at least 8 characters long");
        require(keccak256(abi.encodePacked(_password)) == keccak256(abi.encodePacked(_confirmPassword)), "Passwords do not match");

        bytes32 hashedPassword = keccak256(abi.encodePacked(_password));
        users[msg.sender] = User(_name, _email, hashedPassword);
    }

    function loginAccount(string memory _email, string memory _password) public view returns (bool) {
        require(users[msg.sender].hashedPassword != 0, "Account does not exist");
        require(keccak256(abi.encodePacked(users[msg.sender].email)) == keccak256(abi.encodePacked(_email)), "Invalid email");

        bytes32 hashedPassword = keccak256(abi.encodePacked(_password));
        return users[msg.sender].hashedPassword == hashedPassword;
    }
}