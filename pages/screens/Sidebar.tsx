import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { MdOutlineDashboard, MdOutlineManageSearch } from "react-icons/md";
import { PiUsersBold } from "react-icons/pi";
import { LuSettings, LuCalendarDays } from "react-icons/lu";
import { BsBagPlusFill, BsPersonVcard } from "react-icons/bs";
import { FaUserClock } from "react-icons/fa";
import { Icon } from "@iconify/react";

const Sidebar: React.FC = () => {
  const router = useRouter();
  const { pathname } = router;

  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("/overview");
  useEffect(() => {
    document.body.classList.add("overflow-hidden");
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, []);
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed h-screen">
      <button
        className="lg:hidden fixed z-50 right-0 top-0 p-4"
        onClick={toggleSidebar}
      >
        <svg
          className="w-6 h-6 text-gray-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          {isOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } fixed top-0 left-0 h-full w-full bg-black opacity-50 z-40 lg:hidden`}
        onClick={toggleSidebar}
      ></div>
      <div
        className={`${
          isOpen ? "w-6/10" : "w-0"
        } lg:w-1.5/10 bg-primary fixed top-0 bottom-0 left-0 flex flex-col justify-between z-50 overflow-y-auto transition-all duration-300 ease-in-out`}
      >
        <div className="mt-4">
          <h1 className="mx-4 mt-4 mb-8 text-white text-xl font-normal leading-8 tracking-wider text-left font-abel ml-10 underline">
            LA CROIX DU SUD
          </h1>

          <ul className="mt-10">
            {/*  begining li  */}

            <li className="mb-4">
              <div className="group flex items-center transition-colors duration-300 ease-in-out hover:bg-photos">
                <div className="flex items-center w-full ml-10">
                  <MdOutlineDashboard className="text-white mr-3 text-2xl group-hover:text-skyblue" />
                  <Link
                    href="#"
                    className="flex-1 font-bold text-white text-xl no-underline font-roboto group-hover:text-skyblue"
                  >
                    Overview
                  </Link>
                </div>
              </div>
            </li>

            {/* appointments */}
            <li className="mb-4">
              <div className="group flex items-center transition-colors duration-300 ease-in-out hover:bg-photos">
                <div className="flex items-center w-full ml-10">
                  <LuCalendarDays className="text-white mr-3 text-2xl group-hover:text-skyblue" />
                  <Link
                    href="/screens/Appointments"
                    className="flex-1 font-bold text-white text-xl no-underline font-roboto group-hover:text-skyblue"
                  >
                    Appointments
                  </Link>
                </div>
              </div>
            </li>

            {/* Doctors */}

            <li className="mb-4">
              <div className="group flex items-center transition-colors duration-300 ease-in-out hover:bg-photos">
                <div className="flex items-center w-full ml-10">
                  <BsBagPlusFill className="text-white mr-3 text-2xl group-hover:text-skyblue" />
                  <Link
                    href="/screens/Doctor"
                    className="flex-1 font-bold text-white text-xl no-underline font-roboto group-hover:text-skyblue"
                  >
                    Doctors
                  </Link>
                </div>
              </div>
            </li>
            {/* Patients */}
            <li className="mb-4">
              <div className="group flex items-center transition-colors duration-300 ease-in-out hover:bg-photos">
                <div className="flex items-center w-full ml-10">
                  <FaUserClock className="text-white mr-3 text-2xl group-hover:text-skyblue" />
                  <Link
                    href="/screens/Patients"
                    className="flex-1 font-bold text-white text-xl no-underline font-roboto group-hover:text-skyblue"
                  >
                    Patients
                  </Link>
                </div>
              </div>
            </li>
            {/* Results */}
            <li className="mb-4">
              <div className="group flex items-center transition-colors duration-300 ease-in-out hover:bg-photos">
                <div className="flex items-center w-full ml-10">
                  <MdOutlineManageSearch className="text-white mr-3 text-2xl group-hover:text-skyblue" />
                  <Link
                    href="#Results"
                    className="flex-1 font-bold text-white text-xl no-underline font-roboto group-hover:text-skyblue"
                  >
                    Results
                  </Link>
                </div>
              </div>
            </li>
            {/* Results */}
            <li className="mb-4">
              <div className="group flex items-center transition-colors duration-300 ease-in-out hover:bg-photos">
                <div className="flex items-center w-full ml-10">
                  <BsPersonVcard className="text-white mr-3 text-2xl group-hover:text-skyblue" />
                  <Link
                    href="#Drivers"
                    className="flex-1 font-bold text-white text-xl no-underline font-roboto group-hover:text-skyblue"
                  >
                    Drivers
                  </Link>
                </div>
              </div>
            </li>
            {/* transfer */}
            <li className="mb-4">
              <div className="group flex items-center transition-colors duration-300 ease-in-out hover:bg-photos">
                <div className="flex items-center w-full ml-10">
                  <Icon
                    icon="mdi:transfer"
                    className="text-white mr-3 text-2xl group-hover:text-skyblue"
                  />
                  <Link
                    href="#Transfer"
                    className="flex-1 font-bold text-white text-xl no-underline font-roboto group-hover:text-skyblue"
                  >
                    Transfer
                  </Link>
                </div>
              </div>
            </li>
            {/* transfer */}
            <li className="mb-4">
              <div className="group flex items-center transition-colors duration-300 ease-in-out hover:bg-photos">
                <div className="flex items-center w-full ml-10">
                  <PiUsersBold className="text-white mr-3 text-2xl group-hover:text-skyblue" />
                  <Link
                    href="#users"
                    className="flex-1 font-bold text-white text-xl no-underline font-roboto group-hover:text-skyblue"
                  >
                    Users
                  </Link>
                </div>
              </div>
            </li>

            {/* Setting */}
            <li className="mb-4">
              <div className="group flex items-center transition-colors duration-300 ease-in-out hover:bg-photos">
                <div className="flex items-center w-full ml-10">
                  <LuSettings className="text-white mr-3 text-2xl group-hover:text-skyblue" />
                  <Link
                    href="#Setting"
                    className="flex-1 font-bold text-white text-xl no-underline font-roboto group-hover:text-skyblue"
                  >
                    Setting
                  </Link>
                </div>
              </div>
            </li>
          </ul>

          <div className="font-bold lg:mb-2 mt-30">
            <div className="mb-10 font-bold lg:mb-4 ">
              <div className="ml-20 w-14 h-14 bg-gray-300 rounded-2xl overflow-hidden relative">
                <img
                  src="https://randomuser.me/api/portraits/men/1.jpg"
                  alt="User Profile"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="mt-2">
                <p className="text-white font-bold text-lg ml-20">Yvonmu</p>
                <p className="text-white font-thin ml-6">yvonmu2@example.com</p>
              </div>
            </div>
            <div className="ml-10 mb-10">
              <button className="w-40 h-8 bg-skyblue text-white font-bold rounded">
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
