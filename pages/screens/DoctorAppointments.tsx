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
        "https://randomuser.me/api/portraits/men/12.jpg", // Placeholder image
      title: "Mason Mount",
      age: 30,
      gender: "Male",
      email: "masonmount@gmail.com",
      nationalId: "1234567890123456",
      phoneNumber: "1234567890",
      status: "RSSB",
    },
    {
        id: 2,
        imageSrc:
          "https://randomuser.me/api/portraits/men/14.jpg", // Placeholder image
        title: "Mustafa Muhamed",
        age: 30,
        gender: "Male",
        email: "mustafamuhamedi@gmail.com",
        nationalId: "1234567890123456",
        phoneNumber: "1234567890",
        status: "RSSB",
      },
      {
        id: 3,
        imageSrc:
          "https://randomuser.me/api/portraits/men/15.jpg", // Placeholder image
        title: "Eddy Mendi",
        age: 30,
        gender: "Male",
        email: "mendi@gmail.com",
        nationalId: "1234567890123456",
        phoneNumber: "1234567890",
        status: "RSSB",
      },
      {
        id: 4,
        imageSrc:
          "https://randomuser.me/api/portraits/men/16.jpg", // Placeholder image
        title: "John Luwasi",
        age: 30,
        gender: "Male",
        email: "johnluwasi@gmail.com",
        nationalId: "1234567890123456",
        phoneNumber: "1234567890",
        status: "Private",
      },
    
    // Add more user data objects as needed
  ];

  return (
    <div className="flex ml-4">
      <Sidebar />

      <div className="flex-1 bg-maincolor h-screen  lg:ml-60 p-3">
        <h1 className="ml-10 mt-6 text-2xl font-bold text-white">
          Appointments {">"}
          <span className="text-orange font-bold">General Practitioner</span>{" > "}
          <span className="text-blue-300">Dr.Tanto Spiral</span>
        </h1>

        {/* Table */}
        <div className="mt-10 w-6/10 ml-20 ">
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
                      <p className="font-bold text-white">{user.title}</p>
                      <p className="text-sm text-gray-500">{user.email}</p>
                    </td>
                    <td className="px-4 py-2 text-white">{user.nationalId}</td>
                    <td className="px-4 py-2 text-white">{user.phoneNumber}</td>
                    <td className="px-4 py-2 text-white">{user.status}</td>
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
