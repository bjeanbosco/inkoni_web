import React, { useState } from "react";
import Sidebar from "./Sidebar";
import router from "next/router";

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

  const handleNewAppointmentsClick = () => {
    router.push("/screens/NewAppointment");
  };


  return (
    <div className="flex ml-4">
      <Sidebar />

      <div className="flex-1 bg-maincolor h-screen p-3 ml-60">
      <h1 className="ml-6 mt-10 text-2xl font-bold text-white">
          Appointments {">"}{" "}
          <span className="text-orange">New Appointments</span>
        </h1>

        {/* Square-like form container */}
        <div className="bg-primary border border-gray-400 rounded ml-10 p-2 mt-10 1xl w-6/10">
          <h2 className="text-xl font-bold mt-10 mb-6  ml-10 text-white">Deriver Information</h2>

          {/* Form */}
          <form className="ml-10 mr-10">

            <div className="grid grid-cols-2 gap-4 mb-4 ">
              <div>
                <label htmlFor="firstName" className="text-white">First Name</label>
                <input
                  type="text"
                  id="firstName"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="border rounded p-2 w-full bg-maincolor text-white"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="text-white">Last Name</label>
                <input
                  type="text"
                  id="lastName"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="border rounded p-2 w-full bg-maincolor text-white"
                />
              </div>
            </div>

            {/* Identification Number */}
            <div className="mb-4">
              <label htmlFor="identificationNumber" className="text-white">Identification Number</label>
              <input
                type="text"
                id="identificationNumber"
                value={identificationNumber}
                onChange={(e) => setIdentificationNumber(e.target.value)}
                className="border rounded p-2 w-full bg-maincolor text-white"
              />
            </div>

            {/* Email */}
            <div className="mb-4">
              <label htmlFor="email" className="text-white">Email Address</label>
              <input
                type="text"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border rounded p-2 w-full bg-maincolor text-white"
              />
            </div>

            {/* Phone Number and Insurance Type */}
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label htmlFor="phoneNumber" className="text-white">Phone Number</label>
                <input
                  type="text"
                  id="phoneNumber"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="border rounded p-2 w-full bg-maincolor text-white"
                />
              </div>
              <div>
                <label htmlFor="insuranceType" className="text-white">Insurance Type</label>
                <select
                  id="insuranceType"
                  value={insuranceType}
                  onChange={(e) => setInsuranceType(e.target.value)}
                  className="border rounded p-2 w-full bg-maincolor text-white"
                >
                  <option value="" className="text-white">Select Insurance Type</option>
                  <option value="RSSB" className="text-white">RSSB</option>
                  <option value="Private" className="text-white">Private</option>
                </select>
              </div>
            </div>

            {/* Date of Birth and Appointment Date */}
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label htmlFor="dateOfBirth" className="text-white">Date of Birth</label>
                <input
                  type="date"
                  id="dateOfBirth"
                  value={dateOfBirth}
                  onChange={(e) => setDateOfBirth(e.target.value)}
                  className="border rounded p-2 w-full bg-maincolor text-white"
                />
              </div>
              <div>
                <label htmlFor="appointmentDate" className="text-white">Appointment Date</label>
                <input
                  type="date"
                  id="appointmentDate"
                  value={appointmentDate}
                  onChange={(e) => setAppointmentDate(e.target.value)}
                  className="border rounded p-2 w-full bg-maincolor text-white"
                />
              </div>
            </div>

            {/* Service */}
            <div className="mb-4">
              <label htmlFor="selectedService" className="text-white">Service</label>
              <select
                id="selectedService"
                value={selectedService}
                onChange={(e) => setSelectedService(e.target.value)}
                className="border rounded p-2 w-full bg-maincolor text-white"
              >
                <option value="" className="text-white">Select a Service</option>
              
              </select>
            </div>

            {/* Register Button */}
            <div className="flex justify-center">
              <button type="submit" className="bg-orange text-white font-bold px-10 py-2 rounded">
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