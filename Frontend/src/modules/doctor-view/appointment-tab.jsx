import React from 'react';
import { Link } from 'react-router-dom';

const AppointmentTab = () => {
    // Sample data for appointments
    const appointments = [
        { id: 1, patientName: 'John Doe', date: '2024-05-10', time: '10:00 AM' },
        { id: 2, patientName: 'Jane Smith', date: '2024-05-12', time: '02:30 PM' },
        { id: 3, patientName: 'Alice Johnson', date: '2024-05-15', time: '11:15 AM' },
    ];

    return (
        <div>
            <h3>Upcoming Appointments</h3>
            <table className="table">
                <thead>
                    <tr>
                        <th>Patient Name</th>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {appointments.map(appointment => (
                        <tr key={appointment.id}>
                            <td>{appointment.patientName}</td>
                            <td>{appointment.date}</td>
                            <td>{appointment.time}</td>
                            <td>
                                <Link to={`/patient/${appointment.id}`} className="btn btn-primary btn-sm">View Details</Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default AppointmentTab;
