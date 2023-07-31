import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

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
    <div className="flex h-screen">
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
          <h1 className="mx-4 mt-4 mb-8 text-white text-lg font-bold font-poppins   lg:mt-4 lg:text-xl text-sm">
            LA CROIX DU SUD
          </h1>
          <ul className="mt-10 ml-10 mb-20">
            <li className="mb-6">
              <Link
                href="#Overview"
                className="ml-4 font-bold text-white group-hover:text-orange"
              >
                Overview
              </Link>
            </li>
            <li className="mb-6">
              <Link
                href="/screens/Appointments"
                className="ml-4 font-bold text-white group-hover:text-orange"
              >
                Appointments
              </Link>
            </li>
            <li className="mb-6">
              <Link
                href="/screens/Doctor"
                className="ml-4 font-bold text-white group-hover:text-orange"
              >
                Doctors
              </Link>
            </li>
            <li className="mb-6">
              <Link
                href="/screens/Patients"
                className="ml-4 font-bold text-white group-hover:text-orange"
              >
                Patients
              </Link>
            </li>
            <li className="mb-6">
              <Link
                href="/overview"
                className="ml-4 font-bold text-white group-hover:text-orange"
              >
                Results
              </Link>
            </li>
            <li className="mb-6">
              <Link
                href="/overview"
                className="ml-4 font-bold text-white group-hover:text-orange"
              >
               Drivers
              </Link>
            </li>
            <li className="mb-6">
              <Link
                href="/overview"
                className="ml-4 font-bold text-white group-hover:text-orange"
              >
               Transfer
              </Link>
            </li>
            <li className="mb-6">
              <Link
                href="/overview"
                className="ml-4 font-bold text-white group-hover:text-orange"
              >
               Users
              </Link>
            </li>
            <li className="mb-6">
              <Link
                href="/overview"
                className="ml-4 font-bold text-white group-hover:text-orange"
              >
                Setting
              </Link>
            </li>
          </ul>

          <div className=" font-bold lg:mb-10">
            <div className=" mb-2 font-bold lg:mb-4 ">
              <div className="ml-20 w-14 h-14 bg-gray-300 rounded-full overflow-hidden relative">
                <img
                  src="https://randomuser.me/api/portraits/men/1.jpg"
                  alt="User Profile"
                  className="w-full h-full object-cover octagon-mask"
                />
              </div>
              <div className="mt-2">
                {" "}
                <p className="text-white font-bold text-lg ml-20">Yvonmu</p>
                <p className="text-white font-thin ml-6">yvonmu2@example.com</p>
              </div>
            </div>
            <div className="ml-10">
              <button className="w-40 bg-skyblue text-white font-bold py-1 px-7 rounded">
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
