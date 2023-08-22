import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Sidebar from "./Sidebar";
import { TbSwitchVertical } from "react-icons/tb";
import { BiFilterAlt } from "react-icons/bi";

const Patients: React.FC = () => {
  const router = useRouter();
  const { pathname } = router;
  const squaresData = [
    {
      id: 1,
      imageSrc: "https://randomuser.me/api/portraits/men/10.jpg", // Placeholder image
      title: "Nicolas Cage",
      age: 30,
      gender: "Male",
      email: "nicolascage@gmail.com",
      nationalId: "1234567890123456",
      phoneNumber: "1234567890",
      status: "RSSB",
    },
    {
      id: 2,
      imageSrc: "https://randomuser.me/api/portraits/men/9.jpg", // Placeholder image
      title: "Noah Martinez",
      age: 30,
      gender: "Male",
      email: "nicolegold@gmail.com",
      nationalId: "1234567890123456",
      phoneNumber: "1234567890",
      status: "RSSB",
    },
    {
      id: 3,
      imageSrc: "https://randomuser.me/api/portraits/men/7.jpg", // Placeholder image
      title: "Cyusa cybertron",
      age: 30,
      gender: "Male",
      email: "johndoe@example.com",
      nationalId: "1234567890123456",
      phoneNumber: "1234567890",
      status: "RSSB",
    },
    {
      id: 4,
      imageSrc: "https://randomuser.me/api/portraits/men/7.jpg", // Placeholder image
      title: "David Freeman",
      age: 30,
      gender: "Male",
      email: "johndoe@example.com",
      nationalId: "1234567890123456",
      phoneNumber: "1234567890",
      status: "Private",
    },
    {
      id: 4,
      imageSrc: "https://randomuser.me/api/portraits/men/6.jpg", // Placeholder image
      title: "Lucas Anderson",
      age: 30,
      gender: "Male",
      email: "johndoe@example.com",
      nationalId: "1234567890123456",
      phoneNumber: "1234567890",
      status: "Private",
    },
    {
      id: 4,
      imageSrc: "https://randomuser.me/api/portraits/men/5.jpg", // Placeholder image
      title: "Sophia MitchellJohn",
      age: 30,
      gender: "Male",
      email: "johndoe@example.com",
      nationalId: "1234567890123456",
      phoneNumber: "1234567890",
      status: "Private",
    },
    {
      id: 4,
      imageSrc: "https://randomuser.me/api/portraits/men/4.jpg", // Placeholder image
      title: "Ethan Thompson",
      age: 30,
      gender: "Male",
      email: "johndoe@example.com",
      nationalId: "1234567890123456",
      phoneNumber: "1234567890",
      status: "Private",
    },
    {
      id: 4,
      imageSrc: "https://randomuser.me/api/portraits/men/3.jpg", // Placeholder image
      title: "Olivia Williams",
      age: 30,
      gender: "Male",
      email: "johndoe@example.com",
      nationalId: "1234567890123456",
      phoneNumber: "1234567890",
      status: "Private",
    },
    {
      id: 4,
      imageSrc: "https://randomuser.me/api/portraits/men/2.jpg", // Placeholder image
      title: "Liam Carter",
      age: 30,
      gender: "Male",
      email: "johndoe@example.com",
      nationalId: "1234567890123456",
      phoneNumber: "1234567890",
      status: "Private",
    },

    // Add more user data objects as needed
  ];
  const handleNewPatientClick = () => {
    router.push("/screens/NewPatient");
  };

  return (
    <div className="flex ml-4">
      <Sidebar />

      <div className="flex-1 bg-maincolor h-screen p-3 ml-60 p-3">
      <button
          onClick={handleNewPatientClick}
          className="absolute mt-4 right-4 bg-orange text-white font-bold px-4 py-2 rounded"
        >
          Add Patient
        </button>

        <div className="flex items-center  mt-6 ml-20 space-x-10 mt-20">
          <div>
            <button className="bg-photos text-white px-4 py-1 rounded">
              <TbSwitchVertical className="inline-block h-4 w-4 mr-1" />{" "}
              Sort
            </button>
          </div>
          <div>
          <button className="bg-photos text-white px-4 py-1 rounded ">
              <BiFilterAlt className="inline-block h-4 w-4 mr-1" />{" "}
              Sort
            </button>
          </div>
          <div>
            <input
              type="text"
              id="search"
              placeholder="Names, ID No, Insurance...."
              className="border rounded p-2 pr-10 py-1 px-8 bg-maincolor"
            />
          </div>
        </div>

        {/* Table */}
        <div className="mt-10  ml-20 ">
          <table className="border-collapse w-7/10">
            <thead className="ml-2 ">
              <tr className="w-full border">
                <th className="px-8 py-2 w-12"></th>
                <th className="px-4 py-2">Patients</th>
                <th className="px-4 py-2 border">ID number</th>
                <th className="px-4 py-2 border">Phone</th>
                <th className="px-4 py-2 border">Insurance</th>
              </tr>
            </thead>
            <tbody>
              {squaresData.map((user) => (
                <React.Fragment key={user.id}>
                  <tr className="border-b">
                    <td className="px-4 py-2 w-30">
                      <div className="w-10 h-10 rounded-full overflow-hidden">
                        <img
                          src={user.imageSrc}
                          alt={user.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </td>
                    <td className="px-4 py-2">
                      {user.title}
                      <br />
                      <span className="text-sm text-gray-500">
                        {user.email}
                      </span>
                    </td>
                    <td className="px-4 py-2">{user.nationalId}</td>
                    <td className="px-4 py-2">{user.phoneNumber}</td>
                    <td className="px-4 py-2">{user.status}</td>
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
