import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const DoctorPage = () => {
  const [filter, setFilter] = useState('all');

  const doctors = [
    { name: 'Thomas Henry', department: 'Cardiology', imageUrl: '/team/1.jpg', groups: ['cat1'] },
    { name: 'Harrision Samuel', department: 'Radiology', imageUrl: '/team/2.jpg', groups: ['cat4'] },
    { name: 'Alexandar James', department: 'Dental', imageUrl: '/team/3.jpg', groups: ['cat2'] },
    { name: 'Edward john', department: 'Pediatry', imageUrl: '/team/4.jpg', groups: ['cat5'] },
    { name: 'Thomas Henry', department: 'Neurology', imageUrl: '/team/1.jpg', groups: ['cat3'] },
    { name: 'Henry samuel', department: 'Palmology', imageUrl: '/team/3.jpg', groups: ['cat6'] },
    { name: 'Thomas alexandar', department: 'Cardiology', imageUrl: '/team/1.jpg', groups: ['cat1','cat6'] },
    { name: 'HarissonThomas', department: 'Traumatology', imageUrl: '/team/3.jpg', groups: ['cat3','cat4', 'cat7', 'cat1'] },
    { name: 'Jonas Thomson', department: 'Cardiology', imageUrl: '/team/4.jpg', groups: ['cat2'] },
    { name: 'Henry Forth', department: 'Hematology', imageUrl: '/team/3.jpg', groups: [ 'cat6', 'cat1'] },
    { name: 'Thomas Henry', department: 'Dental', imageUrl: '/team/4.jpg', groups: ['cat2'] }
    // Add the rest of the doctors data here
  ];

  const filteredDoctors = filter === 'all' ? doctors : doctors.filter((doctor) => doctor.groups.includes(filter));

  const handleFilterChange = (e) => setFilter(e.target.value);

  const DoctorCard = ({ doctor }) => (
    <div className="position-relative doctor-inner-box">
      <div className="doctor-profile">
        <div className="doctor-img">
          <img src={doctor.imageUrl} alt="doctor-image" className="img-fluid w-100" />
        </div>
      </div>
      <div className="content mt-3">
        <h4 className="mb-0">{doctor.name}</h4>
        <p>{doctor.department}</p>
      </div>
    </div>
  );

  return (
    <>
      {/* Page Title */}
      <section>
        <div className="page-title">
          <div className="overlay"></div>
          <div className="row">
            <div className="col-md-12">
              <div className="block text-center">
                <span className="text-white">All Doctors</span>
                <h1 className="text-capitalize mb-5 text-lg">Specialized doctors</h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Doctors Section */}
      <section className="section doctors">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 text-center">
              <div className="section-title">
                <h2>Doctors</h2>
                <div className="divider mx-auto my-4"></div>
                <p>A Comprehensive Directory of Visionary Doctors, Crafting Personalized Solutions for Your Well-being.</p>
              </div>
            </div>
          </div>

          <div className="col-12 text-center mb-5">
            <div className="btn-group btn-group-toggle" data-toggle="buttons">
              <label className={`btn ${filter === 'all' ? 'active' : ''}`}>
                <input type="radio" name="shuffle-filter" value="all" checked={filter === 'all'} onChange={handleFilterChange} />
                All Departments
              </label>
              <label className={`btn ${filter === 'cat1' ? 'active' : ''}`}>
                <input type="radio" name="shuffle-filter" value="cat1" checked={filter === 'cat1'} onChange={handleFilterChange} />
                Cardiology
              </label>
              <label className={`btn ${filter === 'cat2' ? 'active' : ''}`}>
                <input type="radio" name="shuffle-filter" value="cat2" checked={filter === 'cat2'} onChange={handleFilterChange} />
                Dental
              </label>
              <label className={`btn ${filter === 'cat3' ? 'active' : ''}`}>
                <input type="radio" name="shuffle-filter" value="cat3" checked={filter === 'cat3'} onChange={handleFilterChange} />
                Neurology
              </label>
              <label className={`btn ${filter === 'cat4' ? 'active' : ''}`}>
                <input type="radio" name="shuffle-filter" value="cat4" checked={filter === 'cat4'} onChange={handleFilterChange} />
                Radiology
              </label>
              <label className={`btn ${filter === 'cat5' ? 'active' : ''}`}>
                <input type="radio" name="shuffle-filter" value="cat5" checked={filter === 'cat5'} onChange={handleFilterChange} />
                Pediatrics
              </label>
              <label className={`btn ${filter === 'cat6' ? 'active' : ''}`}>
                <input type="radio" name="shuffle-filter" value="cat6" checked={filter === 'cat6'} onChange={handleFilterChange} />
                Medicine
              </label>
              <label className={`btn ${filter === 'cat7' ? 'active' : ''}`}>
                <input type="radio" name="shuffle-filter" value="cat7" checked={filter === 'cat7'} onChange={handleFilterChange} />
                Traumatology
              </label>
              {/* Add the rest of the filter buttons here */}
            </div>
          </div>

          <div className="row shuffle-wrapper portfolio-gallery">
            {filteredDoctors.map((doctor, index) => (
              <div key={index} className="col-lg-3 col-sm-6 col-md-6 mb-4 shuffle-item" data-groups={doctor.groups.join(',')}>
                <DoctorCard doctor={doctor} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta-page">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <div className="cta-content">
                <div className="divider mb-4"></div>
                <h2 className="mb-5 text-lg">
                  We are pleased to offer you the <span className="title-color">chance to have a great health</span>
                </h2>
                <Link to ="/appointment" className="btn btn-main-2 btn-round-full">
                  Get appointment
                  <i className="icofont-simple-right ml-2"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DoctorPage;