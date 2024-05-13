// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./DcotorLogin.sol";
import "./Appointment.sol";

contract PostAppointmentComments {
    DIDRegistry private didRegistry;
    AppointmentBook private appointmentBook;

    mapping(uint256 => string) private appointmentComments;

    event CommentPosted(uint256 appointmentId, string comment);
    constructor(address _didRegistryAddress, address _appointmentBookAddress) {
        didRegistry = DIDRegistry(_didRegistryAddress);
        appointmentBook = AppointmentBook(_appointmentBookAddress);
    }
    modifier onlyDoctor() {
        require(didRegistry.isDoctor(msg.sender), "Caller is not a doctor");
        _;
    }
    function addComment(uint256 _appointmentId, string memory _comment) public onlyDoctor {
        require(appointmentExists(_appointmentId), "Invalid appointment ID");
        
        appointmentComments[_appointmentId] = _comment;
        emit CommentPosted(_appointmentId, _comment);
    }
    function viewComment(uint256 _appointmentId) public view returns (string memory) {
        require(appointmentExists(_appointmentId), "Invalid appointment ID");
        return appointmentComments[_appointmentId];
    }
    function appointmentExists(uint256 _appointmentId) internal view returns (bool) {
        return (_appointmentId < appointmentBook.getAppointmentsCount());
    }
}