import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const MutablePatientDetails = () => {

    // use this ID to query for a specific patient 
    const { id } = useParams();

    // Sample patient data
    const [patient, setPatient] = useState({
        id: '1',
        firstName: 'John',
        lastName: 'Doe',
        age: 35,
        sex: 'Male',
        bloodGroup: 'AB+',
        height: '180 cm',
        weight: '75 kg',
        email: 'john.doe@example.com',
        phoneNumber: '+1 (123) 456 7890',
        previousHealthIssues: ['Hypertension', 'Diabetes', 'Asthma'],
        doctorsComments: 'No major issues observed. Patient is advised to monitor blood pressure regularly.',
    });

    const handleCommentChange = (event) => {
        setPatient(prevPatient => ({
            ...prevPatient,
            doctorsComments: event.target.value,
        }));
    };

    const handleSubmitComments = () => {
        // implement the logic to submit and update the comments
        console.log('Comments submitted:', patient.doctorsComments);
    };

    return (
        <div className="container">
            <div className="mb-4">
                <h2>{patient.lastName}, {patient.firstName}</h2>
                <div>
                    <div><strong>Age:</strong> {patient.age}</div>
                    <div><strong>Sex:</strong> {patient.sex}</div>
                    <div><strong>Blood Group:</strong> {patient.bloodGroup}</div>
                    <div><strong>Height:</strong> {patient.height}</div>
                    <div><strong>Weight:</strong> {patient.weight}</div>
                    <div><strong>Email:</strong> {patient.email}</div>
                    <div><strong>Phone Number:</strong> {patient.phoneNumber}</div>
                </div>
                <div className="mt-3">
                    {/* This section is kinda ugly, need some better understanding of the vision behind the design */}
                    <strong>Previous Health Issues:</strong>
                    <ul>
                        {patient.previousHealthIssues.map((issue, index) => (
                            <li key={index}>{issue}</li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="mb-4">
                <h4>Doctor's Comments</h4>
                <textarea
                    className="form-control"
                    rows="5"
                    value={patient.doctorsComments}
                    onChange={handleCommentChange}
                ></textarea>
                <button className="btn btn-primary mt-2" onClick={handleSubmitComments}>Submit</button>
            </div>
            <div className="mb-4">
                <h4>Reports</h4>
                {/* Add content for reports section */}
            </div>
        </div>
    );
}

export default MutablePatientDetails;
