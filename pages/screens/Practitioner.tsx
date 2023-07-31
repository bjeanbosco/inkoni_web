import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Sidebar from "./Sidebar";

const Practitioner: React.FC = () => {
  const router = useRouter();
  const { pathname } = router;
  const squaresData = [
    {
      id: 1,
      imageSrc: "image-url-1.jpg",
      title: "John Doe",
      age: 30,
      gender: "Male",
    },
  ];

  return (
    <div className="flex ml-4">
      <Sidebar />

      <div className="flex-1 bg-maincolor ml-60 p-3">
        <button className="absolute mt-4 right-4 bg-orange text-white font-bold px-4 py-2 rounded">
          New Appointments
        </button>

        <h1 className="ml-6 mt-10 text-2xl font-bold">
          Appointments {">"}{" "}
          <span className="text-orange font-bold">General Practitioner</span>
        </h1>
        <div className="grid grid-cols-5 gap-5">
          <div className="relative mr-2 ">
            <div className="bg-photos w-60 h-40 flex flex-col rounded-lg mt-4">
              <div className="w-40 h-20 ml-2 mr-2">
                {/* Wrap the image with an anchor tag */}
                <a href="/screens/DoctorAppointments">
                  <img
                    src="https://randomuser.me/api/portraits/men/10.jpg"
                    alt="User Profile"
                    className="w-full h-full object-cover m-4"
                  />
                </a>
                <p className="text-center">Dr. Danto Sprial</p>
              </div>
            </div>
          </div>
          <div className="relative mr-2">
            <div className="bg-photos w-60 h-40 flex flex-col rounded-lg  mt-4">
              <div className="w-40 h-20 ml-2 mr-2">
                <img
                  src="https://randomuser.me/api/portraits/men/10.jpg"
                  alt="User Profile"
                  className="w-full h-full object-cover m-4"
                />
                <p className="text-center">Sir Eduard Makizee</p>
              </div>
            </div>
          </div>
          <div className="relative mr-2">
            <div className="bg-photos w-60 h-40 flex flex-col rounded-lg  mt-4">
              <div className="w-40 h-20 ml-2 mr-2">
                <img
                  src="https://randomuser.me/api/portraits/men/10.jpg"
                  alt="User Profile"
                  className="w-full h-full object-cover m-4"
                />
                <p className="text-center">Sir Eduard Makizee</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Practitioner;
