// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract AppointmentBook {
    struct Appointment {
        uint256 id;
        string department;
        string doctor;
        uint256 date;  
        string patientName;
        string contactDetails;
        string message;
    }

    Appointment[] public appointments;
    address public owner;

    constructor() {
        owner = msg.sender;  
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Unauthorized!");
        _;
    }

    
    event NewAppointment(uint256 id, string department, string doctor, string patientName);

    
    function createAppointment(string memory _department, string memory _doctor, uint256 _date, string memory _patientName, string memory _contactDetails, string memory _message) public onlyOwner {
        uint256 _id = appointments.length;
        appointments.push(Appointment(_id, _department, _doctor, _date, _patientName, _contactDetails, _message));
        emit NewAppointment(_id, _department, _doctor, _patientName);
    }

    
    function getAppointment(uint256 _id) public view returns (Appointment memory) {
        require(_id < appointments.length, "Appointment does not exist!");
        return appointments[_id];
    }

    
    function updateAppointment(uint256 _id, string memory _department, string memory _doctor, uint256 _date, string memory _patientName, string memory _contactDetails, string memory _message) public onlyOwner {
        require(_id < appointments.length, "Appointment does not exist!");
        Appointment storage appointment = appointments[_id];
        appointment.department = _department;
        appointment.doctor = _doctor;
        appointment.date = _date;
        appointment.patientName = _patientName;
        appointment.contactDetails = _contactDetails;
        appointment.message = _message;
    }
}