import React, { useState, useEffect } from 'react';

const ProfilePage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    dateOfBirth: '',
    bloodGroup: '',
    gender: '',
    address: '',
    pastMedicalHistory: '',
  });

  
  useEffect(() => {
    const userData = localStorage.getItem('userData');
    console.log('userData:', userData);
    try {
      const parsedUserData = JSON.parse(userData);
      console.log('parsedUserData:', parsedUserData);
      if (parsedUserData) {
        setFormData(prevFormData => ({
          ...prevFormData,
          firstName: parsedUserData.firstName || prevFormData.firstName,
          lastName: parsedUserData.lastName || prevFormData.lastName,
          email: parsedUserData.email || prevFormData.email,
        }));
      }
    } catch (error) {
      console.error('Error parsing user data:', error);
    }
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Save the form data to the backend or localStorage
    console.log('Form Data:', formData);
  };

  return (
    <div className="container">
      <h2>Profile</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            className="form-control"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            readOnly
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            className="form-control"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            readOnly
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            readOnly
          />
        </div>
        <div className="form-group">
          <label htmlFor="dateOfBirth">Date of Birth</label>
          <input
            type="date"
            className="form-control"
            id="dateOfBirth"
            name="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="bloodGroup">Blood Group</label>
          <select
            className="form-control"
            id="gender"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="blood group">Blood Group</label>
          <select
            className="form-control"
            id="bloodGroupr"
            name="bloodGroup"
            value={formData.bloodGroup}
            onChange={handleChange}
          >
            <option value="">Select Blood Group</option>
            <option value="a+ve">A +ve</option>
            <option value="a-ve">A -ve</option>
            <option value="b+ve">B +ve</option>
            <option value="b-ve">B -ve</option>
            <option value="ab+ve">AB +ve</option>
            <option value="ab-ve">AB -ve</option>
            <option value="o+ve">O +ve</option>
            <option value="o-ve">O -ve</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="address">Address</label>
          <textarea
            className="form-control"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="pastMedicalHistory">Past Medical History</label>
          <textarea
            className="form-control"
            id="pastMedicalHistory"
            name="pastMedicalHistory"
            value={formData.pastMedicalHistory}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Save
        </button>
      </form>
    </div>
  );
};

export default ProfilePage;