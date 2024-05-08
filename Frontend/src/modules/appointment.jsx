import { useState } from 'react';
import Web3 from 'web3';

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
    const { name, value } = event.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
    // Filter the doctors based on the selected department
    if (e.target.name === 'department') {
      const selectedDepartment = e.target.value;
      const filteredDoctors = selectedDepartment
        ? doctors.filter((doc) => doc.department === selectedDepartment)
        : [];
      setFilteredDoctors(filteredDoctors);
    }
  };

  const date = new Date(formData.date + 'T00:00:00Z'); // Appends 'T00:00:00Z' to set time to midnight UTC
  const timestamp = Math.floor(date.getTime() / 1000);

  const projectId = '6bc42b50d520477f99374ca081d7a0c5';
  const infuraUrl = `https://polygon-amoy.infura.io/v3/6bc42b50d520477f99374ca081d7a0c5`;

  const web3 = new Web3(new Web3.providers.HttpProvider(infuraUrl, {
    headers: [{ name: "Authorization", value: "Basic "}]
  }));


  const address = "0xFDd2c0ffAcaf9ec53DBd3F49739De36fbe5Ad067";
  const abi=[
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_department",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_doctor",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "_date",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "_patientName",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_contactDetails",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_message",
          "type": "string"
        }
      ],
      "name": "createAppointment",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "department",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "doctor",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "patientName",
          "type": "string"
        }
      ],
      "name": "NewAppointment",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_id",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "_department",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_doctor",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "_date",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "_patientName",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_contactDetails",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_message",
          "type": "string"
        }
      ],
      "name": "updateAppointment",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "appointments",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "department",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "doctor",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "date",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "patientName",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "contactDetails",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "message",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_id",
          "type": "uint256"
        }
      ],
      "name": "getAppointment",
      "outputs": [
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "id",
              "type": "uint256"
            },
            {
              "internalType": "string",
              "name": "department",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "doctor",
              "type": "string"
            },
            {
              "internalType": "uint256",
              "name": "date",
              "type": "uint256"
            },
            {
              "internalType": "string",
              "name": "patientName",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "contactDetails",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "message",
              "type": "string"
            }
          ],
          "internalType": "struct AppointmentBook.Appointment",
          "name": "",
          "type": "tuple"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ]
  const contract = new web3.eth.Contract(abi,address);

  const account = web3.eth.accounts.privateKeyToAccount('0x51a18a3afa87e9833a04d67dc201244f5e92fd17fd98d4221532281d5b21438c');
  web3.eth.accounts.wallet.add(account);
  web3.eth.defaultAccount = account.address;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Handle form submission logic here
    try {
      // Example of a contract function call
      contract.methods.createAppointment(formData.department, formData.doctor,timestamp,
          formData.name, formData.phone, formData.message)
          .send({from: account.address, gas: 3000000}).then(result => {
        console.log('Transaction successful: ', result);
        alert('Appointment Created!');
      })
          .catch(error => {
            console.error('Transaction failed: ', error);
            
            if (error.receipt) {
              console.log('Transaction receipt: ', error.receipt); // Provides more details about the transaction failure
            }
          });

      console.log("Can't book and appointment!", formData);
    } catch (error) {
      console.error(error);
      alert('Registration failed. See console for details.');
    }
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