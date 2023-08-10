import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Sidebar from "./Sidebar";
import { TbSwitchVertical } from "react-icons/tb";
import { FiMoreVertical } from "react-icons/fi";

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
      phoneNumber: "+1234567890",
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
      phoneNumber: "+1234567890",
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
      phoneNumber: "+1234567890",
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
      phoneNumber: "+1234567890",
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
      phoneNumber: "+1234567890",
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
      phoneNumber: "+1234567890",
      status: "Private",
    },

    // Add more user data objects as needed
  ];
  const handleNewDoctorsClick = () => {
    router.push("/screens/NewDoctor");
  };
  return (
    <div className="flex ml-4">
      <Sidebar />

      <div className="flex-1 bg-maincolor h-screen p-3 ml-60 p-3 custom-scroll">
        <h1 className="ml-6 mt-4 text-2xl font-bold">Doctors</h1>
        <button
          onClick={handleNewDoctorsClick}
          className="absolute mt-4 right-4 bg-orange text-white font-bold px-4 py-2 rounded"
        >
          ADD DOCTOR
        </button>

        <div className="flex mt-6 ml-20 mt-10">
          <div>
            <input
              type="text"
              id="search"
              placeholder="Search ...."
              className="border rounded p-2 pr-10 py-3 px-10 w-96 bg-maincolor"
            />
          </div>
        </div>

        {/* Table */}
        <div className="mt-10 ml-20">
          <table className="border-collapse border w-7/10">
            <thead className="ml-2">
              <tr className="w-full border">
                <th className="px-2 py-1 border">Names & Phone</th>
                <th className="px-2 py-1 border">Matriculation</th>
                <th className="px-2 py-1 border">Designation</th>
                <th className="px-2 py-1 ">Schedule</th>
              </tr>
            </thead>
            <tbody>
              {squaresData.map((user) => (
                <React.Fragment key={user.id}>
                  <tr className="border-b">
                    <td className="px-3 py-2">
                      {user.title}
                      <br />
                      <span className="text-sm text-gray-500">
                        {user.phoneNumber}
                      </span>
                    </td>
                    <td className="px-4 py-2">xxxxxxxxxxxx</td>
                    <td className="px-4 py-2">PEDIATRICS</td>
                    <td className="px-4 py-3 schedule-cell">
                      Monday (5pm-8pm)
                      <br />
                      Friday (8am-5pm)
                      <br />
                      Sunday (9am-5pm)
                    </td>
                    <span className="text-gray-500 cursor-pointer hover:underline">
                      <FiMoreVertical className="inline-block h-4 w-4 mr-1" />
                    </span>
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
