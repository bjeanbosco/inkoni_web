import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Sidebar from "./Sidebar";
import squaresData from "@/components/DoctorAppointmentsData";
const DoctorAppointments: React.FC = () => {
  const router = useRouter();
  const { pathname } = router;
  
  return (
    <div className="flex ml-4">
      <Sidebar />

      <div className="flex-1 bg-maincolor h-screen  lg:ml-60 p-3">
        <h1 className="ml-24 mt-6 pb-10 text-4xl font-bold text-white">
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
                      <p className="text-sm text-gray-200">{user.email}</p>
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
