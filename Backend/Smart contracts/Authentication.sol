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
        require(users[msg.sender].hashedPassword == 0, "Account already exists");
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

contract PatientProfile is UserAccount {
    struct PatientDetails {
        string gender;
        uint age;
        string bloodGroup;
        string Address;
        string pastMedicalHistory;
    }

    mapping(address => PatientDetails) private patientDetails;

    function addPatientDetails(string memory _gender,uint _age, string memory _bloodGroup, string memory _address, string memory _pastMedicalHistory) public {
        require(isUser(msg.sender), "Only existing users can add patient details.");

        patientDetails[msg.sender] = PatientDetails({
            gender: _gender,
            age: _age,
            bloodGroup: _bloodGroup,
            Address: _address,
            pastMedicalHistory: _pastMedicalHistory
        });
    }

    function getPatientDetails(address patientAddress) public view returns (string memory,uint, string memory, string memory, string memory) {
        require(isUser(patientAddress), "No patient details found.");

        PatientDetails memory details = patientDetails[patientAddress];
        return (details.gender,details.age, details.bloodGroup, details.Address, details.pastMedicalHistory);
    }
}