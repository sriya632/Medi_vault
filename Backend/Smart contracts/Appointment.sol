// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract AppointmentBook {
    struct Appointment {
        uint256 id;
        string department;
        string doctor;
        uint256 date;  // Unix timestamp for simplicity
        string patientName;
        string contactDetails;
        string message;
    }

    Appointment[] public appointments;
    address public owner;

    constructor() {
        owner = msg.sender;  // Set the owner as the contract deployer
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Unauthorized!");
        _;
    }

    // Event to emit when a new appointment is created
    event NewAppointment(uint256 id, string department, string doctor, string patientName);

    // Function to create a new appointment
    function createAppointment(string memory _department, string memory _doctor, uint256 _date, string memory _patientName, string memory _contactDetails, string memory _message) public onlyOwner {
        uint256 _id = appointments.length;
        appointments.push(Appointment(_id, _department, _doctor, _date, _patientName, _contactDetails, _message));
        emit NewAppointment(_id, _department, _doctor, _patientName);
    }

    // Function to get appointment details
    function getAppointment(uint256 _id) public view returns (Appointment memory) {
        require(_id < appointments.length, "Appointment does not exist!");
        return appointments[_id];
    }

    // Function to update an existing appointment
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