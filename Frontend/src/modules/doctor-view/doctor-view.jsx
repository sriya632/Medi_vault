import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AppointmentTab from './appointment-tab';

const DoctorViewPage = () => {
    // State to manage active tab
    const [activeTab, setActiveTab] = useState('appointment');

    // Function to handle tab change
    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    return (
        <section className="container">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <h2>Doctor's Dashboard</h2>
                        <ul className="nav nav-tabs">
                            <li className="nav-item">
                                <button
                                    className={`nav-link ${activeTab === 'appointment' ? 'active' : ''}`}
                                    onClick={() => handleTabChange('appointment')}
                                >
                                    Appointment Details
                                </button>
                            </li>
                            <li className="nav-item">
                                <button
                                    className={`nav-link ${activeTab === 'reports' ? 'active' : ''}`}
                                    onClick={() => handleTabChange('reports')}
                                >
                                    Medical Reports
                                </button>
                            </li>
                            <li className="nav-item">
                                <button
                                    className={`nav-link ${activeTab === 'prescription' ? 'active' : ''}`}
                                    onClick={() => handleTabChange('prescription')}
                                >
                                    Prescription
                                </button>
                            </li>
                        </ul>
                        <div className="tab-content mt-3">
                            {activeTab === 'appointment' && (
                                <div className="tab-pane fade show active">
                                    {/* Appointment Details content goes here */}
                                    <AppointmentTab />
                                </div>
                            )}
                            {activeTab === 'reports' && (
                                <div className="tab-pane fade show active">
                                    {/* Medical Reports content goes here */}
                                    <p>Medical Reports content goes here.</p>
                                </div>
                            )}
                            {activeTab === 'prescription' && (
                                <div className="tab-pane fade show active">
                                    {/* Prescription content goes here */}
                                    <p>Prescription content goes here.</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default DoctorViewPage;
