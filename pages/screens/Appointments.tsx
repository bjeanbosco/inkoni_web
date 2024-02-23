import React from "react";
import Sidebar from "./Sidebar";
import router from "next/router";
import data from "./AppointmentData";
import Appoints from "@/components/Appoints";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons';
const Appointments: React.FC = () => {
  

  const handleNewAppointmentsClick = () => {
    router.push("/screens/NewAppointment");
  };

  return (
    <div className="flex ml-4">
      <Sidebar />

      <div className="flex-1 bg-maincolor h-screen p-3 lg:ml-60 text-white font-bold">
      <button
          onClick={handleNewAppointmentsClick}
          className="absolute mt-4 right-4 bg-orange text-white font-bold px-4 py-2 rounded text-2xl"
        >
          <FontAwesomeIcon icon={faPlus} className="pr-2"/>
          New Appointments
        </button>

        <h1 className="ml-6 mt-10 text-2xl font-bold">
          Appointments
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 mt-4 ml-6 mr-60">
          

          {
            data.map((data)=>{
              return (
                <Appoints 
                id= {data.id}
                imageUrl = {data.imageUrl}
                title={data.title}
                day ={data.day}
                status = {data.status}
              />
              )
            })
          }
        </div>
      </div>
    </div>
  );
};

export default Appointments;
