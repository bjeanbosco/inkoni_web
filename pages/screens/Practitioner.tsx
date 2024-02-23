import React from "react";
import Sidebar from "./Sidebar";
import router from "next/router";
import Data from "./PractitionerData";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import PractionnerComponent from "@/components/PractionnerComponent";
const Appointments: React.FC = () => {


  const handleNewAppointmentsClick = () => {
    router.push("/screens/NewAppointment");
  };

  return (
    <div className="flex ml-4">
      <Sidebar />

      <div className="flex-1 bg-maincolor h-screen p-3 ml-64">
        <div className="pl-12">
      <button
          onClick={handleNewAppointmentsClick}
          className="absolute mt-4 right-4 bg-orange text-white text-2xl font-bold px-4 py-2 rounded"
        >
           <FontAwesomeIcon icon={faPlus} className="pr-2 text-2xl"/>
          New Appointment
        </button>

        <h1 className="ml-6 mt-10 pt-12 text-3xl font-bold text-white">
          Appointments {">"}{" "}
          <span className="text-orange">General Practitioner</span>
        </h1>
        
        <div className="grid grid-cols-5 gap-4 mt-4 pt-10">
          {Data.map((user)=>{
            return (
              <PractionnerComponent imageSrc={user.imageSrc} title={user.title} appointment ={user.Appointments}/>
            )
          })}
        </div>
        </div>
      </div>
    </div>
  );
};


export default Appointments;
