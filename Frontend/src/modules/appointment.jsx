import React, { useState } from 'react';

// doctors.js
export const doctors = [
  { name: 'Thomas Henry', department: 'Cardiology' },
  { name: 'Thomas Alexander', department: 'Cardiology' },
  { name: 'Harrison Thomas', department: 'Traumatology' },
  { name: 'Thomas Henry', department: 'Hematology' },
  { name: 'Jonas Thompson', department: 'Cardiology' },
  { name: 'Harrision Samuel', department: 'Radiology' },
  { name: 'Henry Sameul', department: 'Palmology' },
  { name: 'Henry Forth', department: 'Hematology' },
  { name: 'Alexandar James', department: 'Dental' },
  { name: 'Edward john', department: 'Pediatrics' },
  
];

const AppointmentPage = () => {
  const [formData, setFormData] = useState({
    department: '',
    doctor: '',
    date: '',
    time: '',
    name: '',
    phone: '',
    message: ''
  });
  const [filteredDoctors, setFilteredDoctors] = useState([]); // New state for filtered doctors

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });

    // Filter the doctors based on the selected department
    if (e.target.name === 'department') {
      const selectedDepartment = e.target.value;
      const filteredDoctors = selectedDepartment
        ? doctors.filter((doc) => doc.department === selectedDepartment)
        : [];
      setFilteredDoctors(filteredDoctors);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Handle form submission logic here
  };

  return (
    <>
      <section className="page-title bg-1">
        <div className="overlay"></div>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="block text-center">
                <span className="text-white">Book your Seat</span>
                <h1 className="text-capitalize mb-5 text-lg">Appointment</h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="appointment section">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="mt-3">
                <div className="feature-icon mb-3">
                  <i className="icofont-support text-lg"></i>
                </div>
                <span className="h3">Call for an Emergency Service!</span>
                <h2 className="text-color mt-3">+84 789 1256</h2>
              </div>
            </div>

            <div className="col-lg-8">
              <div className="appointment-wrap mt-5 mt-lg-0 pl-lg-5">
                <h2 className="mb-2 title-color">Book an appointment</h2>
                <p className="mb-4">
                  Book an appointment with a Doctor ensuring that you can secure a visit that fits your schedule, ultimately facilitating better access to necessary medical consultations and treatments.
                </p>
                <form id="#" className="appointment-form" onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="form-group">
                        <select
                          className="form-control"
                          id="exampleFormControlSelect1"
                          name="department"
                          onChange={handleChange}
                          value={formData.department}
                        >
                          <option value="">Choose Department</option>
                          <option value="Cardiology">Cardiology</option>
                          <option value="Dental">Dental</option>
                          <option value="Neurology">Neurology</option>
                          <option value="Radiology">Radiology</option>
                          <option value="Pediatrics">Pediatrics</option>
                          <option value="Medicine">Medicine</option>
                          <option value="Traumatology">Traumatology</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group">
                        <select
                          className="form-control"
                          id="exampleFormControlSelect2"
                          name="doctor"
                          onChange={handleChange}
                          value={formData.doctor}
                        >
                          <option value="">Select Doctors</option>
                          {filteredDoctors.map((doc, index) => (
                            <option key={index} value={doc.name}>
                              {doc.name}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="form-group">
                        <input
                          name="date"
                          id="date"
                          type="date"
                          className="form-control"
                          placeholder="dd/mm/yyyy"
                          onChange={handleChange}
                          value={formData.date}
                        />
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="form-group">
                        <input
                          name="time"
                          id="time"
                          type="time"
                          className="form-control"
                          placeholder="Time"
                          onChange={handleChange}
                          value={formData.time}
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group">
                        <input
                          name="name"
                          id="name"
                          type="text"
                          className="form-control"
                          placeholder="Full Name"
                          onChange={handleChange}
                          value={formData.name}
                        />
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="form-group">
                        <input
                          name="phone"
                          id="phone"
                          type="number"
                          className="form-control"
                          placeholder="Phone Number"
                          onChange={handleChange}
                          value={formData.phone}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="form-group-2 mb-4">
                    <textarea
                      name="message"
                      id="message"
                      className="form-control"
                      rows="6"
                      placeholder="Your Message"
                      onChange={handleChange}
                      value={formData.message}
                    ></textarea>
                  </div>

                  <button type="submit" className="btn btn-main btn-round-full">
                    Make Appointment <i className="icofont-simple-right ml-2"></i>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AppointmentPage;