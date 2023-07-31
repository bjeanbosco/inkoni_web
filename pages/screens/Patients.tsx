import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Sidebar from "./Sidebar";

const Patients: React.FC = () => {
  const router = useRouter();
  const { pathname } = router;
  const squaresData = [
    {
      id: 1,
      imageSrc:
        "https://randomuser.me/api/portraits/men/1.jpg", // Placeholder image
      title: "John Doe",
      age: 30,
      gender: "Male",
      email: "johndoe@example.com",
      nationalId: "1234567890123456",
      phoneNumber: "1234567890",
      status: "RSSB",
    },
    {
        id: 2,
        imageSrc:
          "https://randomuser.me/api/portraits/men/1.jpg", // Placeholder image
        title: "John Doe",
        age: 30,
        gender: "Male",
        email: "johndoe@example.com",
        nationalId: "1234567890123456",
        phoneNumber: "1234567890",
        status: "RSSB",
      },
      {
        id: 3,
        imageSrc:
          "https://randomuser.me/api/portraits/men/1.jpg", // Placeholder image
        title: "John Doe",
        age: 30,
        gender: "Male",
        email: "johndoe@example.com",
        nationalId: "1234567890123456",
        phoneNumber: "1234567890",
        status: "RSSB",
      },
      {
        id: 4,
        imageSrc:
          "https://randomuser.me/api/portraits/men/1.jpg", // Placeholder image
        title: "John Doe",
        age: 30,
        gender: "Male",
        email: "johndoe@example.com",
        nationalId: "1234567890123456",
        phoneNumber: "1234567890",
        status: "Private",
      },
      {
        id: 4,
        imageSrc:
          "https://randomuser.me/api/portraits/men/1.jpg", // Placeholder image
        title: "John Doe",
        age: 30,
        gender: "Male",
        email: "johndoe@example.com",
        nationalId: "1234567890123456",
        phoneNumber: "1234567890",
        status: "Private",
      },
      {
        id: 4,
        imageSrc:
          "https://randomuser.me/api/portraits/men/1.jpg", // Placeholder image
        title: "John Doe",
        age: 30,
        gender: "Male",
        email: "johndoe@example.com",
        nationalId: "1234567890123456",
        phoneNumber: "1234567890",
        status: "Private",
      },
      {
        id: 4,
        imageSrc:
          "https://randomuser.me/api/portraits/men/1.jpg", // Placeholder image
        title: "John Doe",
        age: 30,
        gender: "Male",
        email: "johndoe@example.com",
        nationalId: "1234567890123456",
        phoneNumber: "1234567890",
        status: "Private",
      },
      {
        id: 4,
        imageSrc:
          "https://randomuser.me/api/portraits/men/1.jpg", // Placeholder image
        title: "John Doe",
        age: 30,
        gender: "Male",
        email: "johndoe@example.com",
        nationalId: "1234567890123456",
        phoneNumber: "1234567890",
        status: "Private",
      },
      {
        id: 4,
        imageSrc:
          "https://randomuser.me/api/portraits/men/1.jpg", // Placeholder image
        title: "John Doe",
        age: 30,
        gender: "Male",
        email: "johndoe@example.com",
        nationalId: "1234567890123456",
        phoneNumber: "1234567890",
        status: "Private",
      },
    
    // Add more user data objects as needed
  ];

  return (
    <div className="flex ml-4">
      <Sidebar />

      <div className="flex-1 bg-maincolor ml-60 p-10">
        <button className="absolute mt-4 right-4 bg-orange text-white font-bold px-4 py-2 rounded">
          Add Patient
        </button>
             
        <div className="flex items-center justify-center mt-6 ml-10 space-x-10">
          <div>
            <input
              type="text"
              id="search"
              placeholder="Search patients"
              className="border rounded p-2"
            />
          </div>
        </div>



        {/* Table */}
        <div className="mt-10  mr-10 ml-4">
          <table>
          <thead className="ml-2">
              <tr className="w-full">
                <th className="px-4 py-2 w-12"></th>
                <th className="px-4 py-2">Patients</th>
                <th className="px-4 py-2">ID number</th>
                <th className="px-4 py-2">Phone</th>
                <th className="px-4 py-2">Insurance</th>
              </tr>
            </thead>
            <tbody>
              {squaresData.map((user) => (
                <React.Fragment key={user.id}>
                  <tr>
                    <td className="px-4 py-2 w-12">
                      <div className="w-10 h-10 rounded-full overflow-hidden">
                        <img
                          src={user.imageSrc}
                          alt={user.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </td>
                    <td className="px-4 py-2">
                      <p className="font-bold">{user.title}</p>
                      <p className="text-sm text-gray-500">{user.email}</p>
                    </td>
                    <td className="px-4 py-2">{user.nationalId}</td>
                    <td className="px-4 py-2">{user.phoneNumber}</td>
                    <td className="px-4 py-2">{user.status}</td>
                  </tr>
                  <tr>
                    <td colSpan={5} className="border-t"></td>
                  </tr>
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Patients;
