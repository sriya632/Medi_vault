import React, {useState} from 'react';


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
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
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
                  Mollitia dicta commodi est recusandae iste, natus eum asperiores corrupti qui velit . Iste dolorum atque
                  similique praesentium soluta.
                </p>
                <form id="#" className="appointment-form" onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="form-group">
                        <select className="form-control" id="exampleFormControlSelect1">
                          <option>Choose Department</option>
                          <option>Software Design</option>
                          <option>Development cycle</option>
                          <option>Software Development</option>
                          <option>Maintenance</option>
                          <option>Process Query</option>
                          <option>Cost and Duration</option>
                          <option>Modal Delivery</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group">
                        <select className="form-control" id="exampleFormControlSelect2">
                          <option>Select Doctors</option>
                          <option>Software Design</option>
                          <option>Development cycle</option>
                          <option>Software Development</option>
                          <option>Maintenance</option>
                          <option>Process Query</option>
                          <option>Cost and Duration</option>
                          <option>Modal Delivery</option>
                        </select>
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="form-group">
                        <input name="date"
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
                        <input name="time" id="time" type="time" className="form-control" placeholder="Time" />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group">
                        <input name="name" id="name" type="text" className="form-control" placeholder="Full Name" />
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="form-group">
                        <input name="phone" id="phone" type="number" className="form-control" placeholder="Phone Number" />
                      </div>
                    </div>
                  </div>
                  <div className="form-group-2 mb-4">
                    <textarea name="message" id="message" className="form-control" rows="6" placeholder="Your Message"></textarea>
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