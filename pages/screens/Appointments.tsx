import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Sidebar from "./Sidebar";

const Appointments: React.FC = () => {
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
  const handleNewAppointmentsClick = () => {
    router.push("/screens/NewAppointment");
  };

  return (
    <div className="flex ml-4">
      <Sidebar />

      <div className="flex-1 bg-maincolor ml-60 p-3">
        <button
          onClick={handleNewAppointmentsClick}
          className="absolute mt-4 right-4 bg-orange text-white font-bold px-4 py-2 rounded"
        >
          New Appointments
        </button>

        <h1 className="ml-6 mt-10 text-2xl font-bold">Appointments</h1>
        <div className="grid grid-cols-3 gap-2 ml-3 mt-4">
          <div className="relative mr-2">
            <div className="bg-photos w-8/10 h-60">
              <h1 className="p-4 text-xl font-bold ml-6">
                General Practitioner
              </h1>
              <div className="ml-10 w-40 h-40">
                {/* Wrap the image with an anchor tag */}
                <a href="/screens/Practitioner">
                  <img
                    src="https://randomuser.me/api/portraits/men/1.jpg"
                    alt="User Profile"
                    className="w-full h-full object-cover octagon-mask"
                  />
                </a>
              </div>
            </div>
            <div className="absolute top-20 right-20 pr-10 pt-6">
              <p>Today: 11</p>
              <p>This Week: 11</p>
              <p>Emergency: 1</p>
            </div>
          </div>

          <div className="relative ml-2">
            <div className="bg-photos w-8/10 h-60">
              <h1 className="p-4 text-xl font-bold ml-6">
                General Practitioner
              </h1>
              <div className="ml-10 w-40 h-40">
                <img
                  src="https://randomuser.me/api/portraits/men/1.jpg"
                  alt="User Profile"
                  className="w-full h-full object-cover octagon-mask"
                />
              </div>
            </div>
            <div className="absolute top-20 right-20 pr-10 pt-6">
              <p>Today: 11</p>
              <p>This Week: 11</p>
              <p>Emergency: 1</p>
            </div>
          </div>
          <div className="relative">
            <div className="bg-photos w-8/10 h-60">
              <h1 className="p-4 text-xl font-bold ml-6">
                General Practitioner
              </h1>
              <div className="ml-10 w-40 h-40">
                <img
                  src="https://randomuser.me/api/portraits/men/1.jpg"
                  alt="User Profile"
                  className="w-full h-full object-cover octagon-mask"
                />
              </div>
            </div>
            <div className="absolute top-20 right-20 pr-10 pt-6">
              <p>Today: 11</p>
              <p>This Week: 11</p>
              <p>Emergency: 1</p>
            </div>
          </div>
          <div className="relative">
            <div className="bg-photos w-8/10 h-60">
              <h1 className="p-4 text-xl font-bold ml-6">
                General Practitioner
              </h1>
              <div className="ml-10 w-40 h-40">
                <img
                  src="https://randomuser.me/api/portraits/men/1.jpg"
                  alt="User Profile"
                  className="w-full h-full object-cover octagon-mask"
                />
              </div>
            </div>
            <div className="absolute top-20 right-20 pr-10 pt-6">
              <p>Today: 11</p>
              <p>This Week: 11</p>
              <p>Emergency: 1</p>
            </div>
          </div>
          <div className="relative">
            <div className="bg-photos w-8/10 h-60">
              <h1 className="p-4 text-xl font-bold ml-6">
                General Practitioner
              </h1>
              <div className="ml-10 w-40 h-40">
                <img
                  src="https://randomuser.me/api/portraits/men/1.jpg"
                  alt="User Profile"
                  className="w-full h-full object-cover octagon-mask"
                />
              </div>
            </div>
            <div className="absolute top-20 right-20 pr-10 pt-6">
              <p>Today: 11</p>
              <p>This Week: 11</p>
              <p>Emergency: 1</p>
            </div>
          </div>
          <div className="relative">
            <div className="bg-photos w-8/10 h-60">
              <h1 className="p-4 text-xl font-bold ml-6">
                General Practitioner
              </h1>
              <div className="ml-10 w-40 h-40">
                <img
                  src="https://randomuser.me/api/portraits/men/1.jpg"
                  alt="User Profile"
                  className="w-full h-full object-cover octagon-mask"
                />
              </div>
            </div>
            <div className="absolute top-20 right-20 pr-10 pt-6">
              <p>Today: 11</p>
              <p>This Week: 11</p>
              <p>Emergency: 1</p>
            </div>
          </div>
          <div className="relative">
            <div className="bg-photos w-8/10 h-60">
              <h1 className="p-4 text-xl font-bold ml-6">
                General Practitioner
              </h1>
              <div className="ml-10 w-40 h-40">
                <img
                  src="https://randomuser.me/api/portraits/men/1.jpg"
                  alt="User Profile"
                  className="w-full h-full object-cover octagon-mask"
                />
              </div>
            </div>
            <div className="absolute top-20 right-20 pr-10 pt-6">
              <p>Today: 11</p>
              <p>This Week: 11</p>
              <p>Emergency: 1</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appointments;
