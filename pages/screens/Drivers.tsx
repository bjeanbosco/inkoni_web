import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Sidebar from "./Sidebar";
import { GrAdd } from "react-icons/gr";
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
      drivingLicense: "1234567890123456",
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
      drivingLicense: "1234567890123456",
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
      drivingLicense: "1234567890123456",
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
      drivingLicense: "1234567890123456",
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
      drivingLicense: "1234567890123456",
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
      drivingLicense: "1234567890123456",
      status: "Private",
    },

    // Add more user data objects as needed
  ];
  const handleNewDoctorsClick = () => {
    router.push("/screens/NewDriver");
  };
  return (
    <div className="flex ml-4 w-full">
      <Sidebar />

      <div className="flex-1 bg-maincolor h-screen p-3 ml-60  custom-scroll">
      <button
          onClick={handleNewDoctorsClick}
          className="absolute mt-4 right-4 bg-orange text-white font-bold px-4 py-2 rounded"
        >
           {/* <GrAdd className="text-white mr-3 text-sm" /> */}
           <FontAwesomeIcon icon={faPlus} className="pr-2"/>
           REGISTER DRIVER
        </button>

        {/* Table */}
        <div className="mt-10 ml-20 pt-40 w-full">
          <table className="border-collapse border w-7/10">
            <thead className="ml-2">
              <tr className="w-full border text-white font-bold-600 text-2xl">
                <th className="px-2 py-1 border">Drivers</th>
                <th className="px-2 py-1 border">ID number</th>
                <th className="px-2 py-1 border">Driving License</th>
                <th className="px-2 py-1 ">Phone</th>
                <th className="px-2 py-1 ">Plate no</th>
              </tr>
            </thead>
            <tbody>
              {squaresData.map((user) => (
                <React.Fragment key={user.id}>
                  <tr className="border-b text-white">
                  <td className="px-4 py-2 w-30 flex">
                      <div className="w-10 h-10 rounded-full overflow-hidden">
                        <img
                          src={user.imageSrc}
                          alt={user.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <span>
                      {user.title}
                      <br />
                      <span className="text-sm text-white">
                        {user.email}
                      </span>
                      </span>
                    </td>
                    <td className="px-4 py-2">{user.nationalId}</td>
                    <td className="px-4 py-2">{user.drivingLicense}</td>
                    <td className="px-4 py-2"> {user.phoneNumber}</td>
                    <td> {user.id}</td>
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
