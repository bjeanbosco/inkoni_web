import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { MdOutlineDashboard, MdOutlineManageSearch } from "react-icons/md";
import { PiUsersBold } from "react-icons/pi";
import { LuSettings, LuCalendarDays } from "react-icons/lu";
import { BsBagPlusFill, BsPersonVcard } from "react-icons/bs";
import { FaUserClock} from "react-icons/fa";
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

          <ul className="mt-10 ml-10 mb-20">
            {/*  begining of list  */}

            <li className="mb-4">
              <div className="group flex items-center w-full h-10 transition-colors duration-300 ease-in-out hover:bg-photos hover:text-skyblue">
                <MdOutlineDashboard className="text-white mr-3 text-2xl hover:text-skyblue " />
                <Link
                  href="#"
                  className="flex-1 font-bold text-white text-xl no-underline font-roboto hover:text-skyblue"
                >
                  Overview
                </Link>
              </div>
            </li>

            <li className="mb-4 flex items-center">
              <LuCalendarDays className="text-white mr-3 text-xl " />
              <Link
                href="/screens/Appointments"
                className="font-bold text-white text-xl group-hover:text-white no-underline font-roboto"
              >
                Appointments
              </Link>
            </li>

            <li className="mb-4 flex items-center">
              <BsBagPlusFill className="text-white mr-3 text-xl" />
              <Link
                href="/screens/Doctor"
                className="font-bold text-white text-xl group-hover:text-white no-underline font-roboto"
              >
                Doctors
              </Link>
            </li>
            <li className="mb-4 flex items-center">
              <FaUserClock className="text-white mr-3 text-xl" />
              <Link
                href="/screens/Patients"
                className="font-bold text-white text-xl group-hover:text-white no-underline font-roboto"
              >
                Patients
              </Link>
            </li>

            <li className="mb-4 flex items-center">
              <MdOutlineManageSearch className="text-white mr-1 text-3xl" />
              <Link
                href="#Overview"
                className="font-bold text-white text-xl group-hover:text-white no-underline font-roboto"
              >
                Results
              </Link>
            </li>

            <li className="mb-4 flex items-center">
              <BsPersonVcard className="text-white mr-3 text-xl" />
              <Link
                href="#Overview"
                className="font-bold text-white text-xl group-hover:text-white no-underline font-roboto"
              >
                Drivers
              </Link>
            </li>

            <li className="mb-4 flex items-center">
              <Icon icon="mdi:transfer" className="text-white mr-2 text-2xl" />
              <Link
                href="#Overview"
                className="font-bold text-white text-xl group-hover:text-white no-underline font-roboto"
              >
                Transfer
              </Link>
            </li>

            <li className="mb-4 flex items-center">
              <PiUsersBold className="text-white mr-3 text-xl" />
              <Link
                href="#Overview"
                className="font-bold text-white text-xl group-hover:text-white no-underline font-roboto"
              >
                Users
              </Link>
            </li>

            <li className="mb-4 flex items-center">
              <LuSettings className="text-white mr-3 text-xl" />
              <Link
                href="#Overview"
                className="font-bold text-white text-xl group-hover:text-white no-underline font-roboto"
              >
                Setting
              </Link>
            </li>
          </ul>

          <div className=" font-bold lg:mb-20">
            <div className=" mb-2 font-bold lg:mb-4 ">
              <div className="ml-20 w-14 h-14 bg-gray-300 rounded-2xl overflow-hidden relative">
                <img
                  src="https://randomuser.me/api/portraits/men/1.jpg"
                  alt="User Profile"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="mt-2">
                {" "}
                <p className="text-white font-bold text-lg ml-20">Yvonmu</p>
                <p className="text-white font-thin ml-6">yvonmu2@example.com</p>
              </div>
            </div>
            <div className="ml-10">
              <button
                className="w-40 h-8 bg-skyblue text-white font-bold rounded"
                style={{ top: "1066px", left: "63px" }}
              >
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
