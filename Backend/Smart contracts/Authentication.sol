// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract UserAccount {
    struct User {
        string firstName;
        string lastName;
        string email;
        string phoneNumber;
        bytes32 hashedPassword;  // Kept private for security reasons
    }

    mapping(address => User) private users;

    function createAccount(
    string memory _firstName,
    string memory _lastName,
    string memory _email,
    string memory _phoneNumber,
    string memory _password,
    string memory _confirmPassword
) public {
    require(users[msg.sender].hashedPassword == bytes32(0), "Account already exists");
    require(bytes(_password).length >= 8, "Password must be at least 8 characters long");
    require(keccak256(abi.encodePacked(_password)) == keccak256(abi.encodePacked(_confirmPassword)), "Passwords do not match");

    bytes32 hashedPassword = keccak256(abi.encodePacked(_password));
    users[msg.sender] = User(_firstName, _lastName, _email, _phoneNumber, hashedPassword);
}


    function getUserDetails(address userAddress) public view returns (string memory, string memory, string memory, string memory) {
        User memory user = users[userAddress];
        return (user.firstName, user.lastName, user.email, user.phoneNumber);
    }

    function isUser(address userAddress) public view returns (bool) {
        return users[userAddress].hashedPassword != 0;
    }

    function loginAccount(string memory _email, string memory _password) public view returns (bool) {
        require(users[msg.sender].hashedPassword != 0, "Account does not exist");
        require(keccak256(abi.encodePacked(users[msg.sender].email)) == keccak256(abi.encodePacked(_email)), "Invalid email");

        bytes32 hashedPassword = keccak256(abi.encodePacked(_password));
        return users[msg.sender].hashedPassword == hashedPassword;
    }
}
