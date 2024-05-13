// // SPDX-License-Identifier: MIT
// pragma solidity ^0.8.0;

// import "remix_tests.sol"; 
// import "./access_control.sol"; 

// contract DIDRegistryTest {
//     DIDRegistry didRegistry;
//     address testAdminAddress = address(this); 
//     address testDoctorAddress = address(0x1); 
//     address nonAdminAddress = address(0x2); 

//     function beforeAll() public {
//         didRegistry = new DIDRegistry();
//     }  
//     function testInitialAdminRole() public {
//         bool isAdmin = didRegistry.hasRole(didRegistry.DEFAULT_ADMIN_ROLE(), testAdminAddress);
//         Assert.equal(isAdmin, true, "Deployer should have the admin role");
//     }    
//     function testAssignDoctorRole() public {
//         bool isAdmin = didRegistry.hasRole(didRegistry.DEFAULT_ADMIN_ROLE(), testAdminAddress);
//         Assert.equal(isAdmin, true, "This account should have admin rights");      
//         didRegistry.assignDoctorRole(testDoctorAddress);
//         bool isDoctor = didRegistry.isDoctor(testDoctorAddress);
//         Assert.equal(isDoctor, true, "Assigned address should have a doctor role");
//     }
//     function testFailAssignDoctorRoleByNonAdmin() public {
//         try didRegistry.assignDoctorRole(nonAdminAddress) {
//             Assert.ok(false, "Should not be able to assign roles without admin privilege");
//         } catch Error(string memory reason) {
//             Assert.equal(reason, "Caller is not an admin", "Should fail with 'Caller is not an admin' error");
//         }
//     }
// }
