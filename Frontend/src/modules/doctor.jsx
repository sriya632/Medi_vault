import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const DoctorPage = () => {
  const [filter, setFilter] = useState('all');

  const doctors = [
    { name: 'Thomas Henry', department: 'Cardiology', imageUrl: '/team/1.jpg', groups: ['cat1', 'cat2'] },
    { name: 'Harrision Samuel', department: 'Radiology', imageUrl: '/team/2.jpg', groups: ['cat2'] },
    { name: 'Alexandar James', department: 'Dental', imageUrl: '/team/3.jpg', groups: ['cat3'] },
    { name: 'Edward john', department: 'Pediatry', imageUrl: '/team/4.jpg', groups: ['cat3', 'cat4'] },
    { name: 'Thomas Henry', department: 'Neurology', imageUrl: '/team/1.jpg', groups: ['cat5'] },
    { name: 'Henry samuel', department: 'Palmology', imageUrl: '/team/3.jpg', groups: ['cat6'] },
    { name: 'Thomas alexandar', department: 'Cardiology', imageUrl: '/team/1.jpg', groups: ['cat4'] },
    { name: 'HarissonThomas', department: 'Traumatology', imageUrl: '/team/3.jpg', groups: ['cat5', 'cat6', 'cat1'] },
    { name: 'Jonas Thomson', department: 'Cardiology', imageUrl: '/team/4.jpg', groups: ['cat2'] },
    { name: 'Henry Forth', department: 'hematology', imageUrl: '/team/3.jpg', groups: ['cat5', 'cat6', 'cat1'] },
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
        <h4 className="mb-0">
          <a href="doctor-single.html">{doctor.name}</a>
        </h4>
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
                <p>We provide a wide range of creative services adipisicing elit. Autem maxime rem modi eaque, voluptate. Beatae officiis neque </p>
              </div>
            </div>
          </div>

          <div className="col-12 text-center mb-5">
            <div className="btn-group btn-group-toggle" data-toggle="buttons">
              <label className={`btn ${filter === 'all' ? 'active' : ''}`}>
                <input type="radio" name="shuffle-filter" value="all" checked={filter === 'all'} onChange={handleFilterChange} />
                All Department
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
                  We are pleased to offer you the <span className="title-color">chance to have the healthy</span>
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