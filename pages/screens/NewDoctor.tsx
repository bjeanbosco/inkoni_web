import React, { useState } from "react";
import Sidebar from "./Sidebar";

const NewAppointments: React.FC = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [identificationNumber, setIdentificationNumber] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [insuranceType, setInsuranceType] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [appointmentDate, setAppointmentDate] = useState("");
  const [selectedService, setSelectedService] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    // You can use the form data stored in state variables
  };

  return (
    <div className="flex ml-4">
      <Sidebar />

      <div className="flex-1 bg-maincolor h-screen p-3 ml-60 p-3">

        <h1 className="ml-10 mt-6 text-2xl font-bold">
          Appointments {">"}
          <span className="text-orange font-bold">Register Doctors</span>
        </h1>

        {/* Square-like form container */}
        <div className="bg-primary border border-gray-400 rounded ml-40 mr-40 p-6 mt-6 1xl">
          <h2 className="text-xl font-bold mb-4">Doctor Infromation</h2>

          {/* Form */}
          <form onSubmit={handleSubmit}>
           

            {/* Identification Number */}
            <div className="mb-4">
              <label htmlFor="identificationNumber">Marticulation Number</label>
              <input
                type="text"
                id="identificationNumber"
                value={identificationNumber}
                onChange={(e) => setIdentificationNumber(e.target.value)}
                className="border rounded p-2 w-full bg-maincolor"
              />
            </div>
             {/* First Name and Last Name */}
             <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  id="firstName"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="border rounded p-2 w-full bg-maincolor"
                />
              </div>
              <div>
                <label htmlFor="lastName">Last Name</label>
                <input
                  type="text"
                  id="lastName"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="border rounded p-2 w-full bg-maincolor"
                />
              </div>
            </div>

              {/* phone Number */}
              <div className="mb-4">
              <label htmlFor="phoneNumber">phone Number</label>
              <input
                 type="text"
                 id="phoneNumber"
                 value={phoneNumber}
                 onChange={(e) => setPhoneNumber(e.target.value)}
                className="border rounded p-2 w-full bg-maincolor"
              />
            </div>
            {/* specialized in */}
            <div className="mb-4">
              <label htmlFor="selectedService">Specialized In</label>
              <select
                id="selectedService"
                value={selectedService}
                onChange={(e) => setSelectedService(e.target.value)}
                className="border rounded p-2 w-full bg-maincolor"
              >
                <option value="">Select a Service</option>
                {/* Add options for different services */}
              </select>
            </div>
             {/* Date of Birth and Appointment Date */}
             <div className="mb-4">
              <div>
                <label htmlFor="dateOfBirth">Date of Birth</label>
                <input
                  type="date"
                  id="dateOfBirth"
                  value={dateOfBirth}
                  onChange={(e) => setDateOfBirth(e.target.value)}
                  className="border rounded p-2 w-full bg-maincolor"
                />
              </div>
            </div>

            {/* Register Button */}
            <div className="flex justify-center">
              <button type="submit" className="bg-orange text-white font-bold px-4 py-2 rounded">
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewAppointments;