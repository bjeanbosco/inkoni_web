import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Sidebar from "./Sidebar";

const DoctorAppointments: React.FC = () => {
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
    
    // Add more user data objects as needed
  ];

  return (
    <div className="flex ml-4">
      <Sidebar />

      <div className="flex-1 bg-maincolor h-screen p-3 ml-60 p-3">
        <h1 className="ml-10 mt-6 text-2xl font-bold">
          Appointments {">"}
          <span className="text-orange font-bold">General Practitioner</span>{" > "}
          <span className="text-blue-300">Dr.Tanto Spiral</span>
        </h1>

        {/* Table */}
        <div className="mt-10 ml-10 mr-40">
          <table className="table-auto w-full">
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

export default DoctorAppointments;
