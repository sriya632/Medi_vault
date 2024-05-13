// SPDX-License-Identifier: MIT
// pragma solidity ^0.8.0;

// import "remix_tests.sol"; 
// import "./profile_creation.sol"; 
// contract UserAccountTest {

//     UserAccount userAccount;
//     address testUserAddress = address(0x123);

    
//     function beforeEach() public {
//         userAccount = new UserAccount();
//     }

    
//     function testUserCreation() public {
//         userAccount.createAccount("John", "Doe", "john.doe@example.com", "1234567890", "password123", "password123");
//         Assert.equal(userAccount.isUser(address(this)), true, "User should exist after creation");
//     }

    
//     function testFailUserCreation() public {
//         userAccount.createAccount("John", "Doe", "john.doe@example.com", "1234567890", "password123", "password123");
//         userAccount.createAccount("Jane", "Doe", "jane.doe@example.com", "0987654321", "password123", "password123");
//     }

    
//     function testLogin() public {
//         userAccount.createAccount("John", "Doe", "john.doe@example.com", "1234567890", "password123", "password123");
//         Assert.equal(userAccount.loginAccount("john.doe@example.com", "password123"), true, "Login should succeed with correct credentials");
//     }

    
//     function testFailLoginWrongPassword() public {
//         userAccount.createAccount("John", "Doe", "john.doe@example.com", "1234567890", "password123", "password123");
//         Assert.equal(userAccount.loginAccount("john.doe@example.com", "wrongPassword"), false, "Login should fail with incorrect password");
//     }
// }

// contract PatientProfileTest {
//     PatientProfile patientProfile;

//     function beforeEach() public {
//         patientProfile = new PatientProfile();
//         patientProfile.createAccount("John", "Doe", "john.doe@example.com", "1234567890", "password123", "password123");
//     }
//     function testAddPatientDetails() public {
//         patientProfile.addPatientDetails(30, "A+", "123 Elm St", "None");
//         (uint age, string memory bloodGroup, string memory Address, string memory pastMedicalHistory) = patientProfile.getPatientDetails(address(this));
//         Assert.equal(age, 30, "Age should match the input");
//         Assert.equal(bloodGroup, "A+", "Blood group should match the input");
//     }
// }
