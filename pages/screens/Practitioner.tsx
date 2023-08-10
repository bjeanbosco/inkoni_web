import React from "react";
import Sidebar from "./Sidebar";
import router from "next/router";

const Appointments: React.FC = () => {
  const squaresData = [
    {
      id: 1,
      imageSrc: "https://s3-eu-west-1.amazonaws.com/intercare-web-public/wysiwyg-uploads%2F1558083610864-general_practitioner.jpg",
      title: "Dr. Danto Sprial",
      Appointments: 5,
    },
    {
      id: 2,
      imageSrc: "https://img.freepik.com/free-photo/pleased-young-female-doctor-wearing-medical-robe-stethoscope-around-neck-standing-with-closed-posture_409827-254.jpg",
      title: "Dr. Emily Carter",
      Appointments: 3,
    },
    {
      id: 3,
      imageSrc: "https://media.istockphoto.com/id/1200980392/photo/medical-concept-of-asian-beautiful-female-doctor-in-white-coat-with-stethoscope-waist-up.jpg?s=612x612&w=0&k=20&c=nD_1Tn11kWcMZwZfnyA-lYAvNKcBeoEK_KLObBnN6Jg=",
      title: "Dr. Emily Carter",
      Appointments: 5,
    },
  
    // Add more appointment data with different images
  ];
  const handleNewAppointmentsClick = () => {
    router.push("/screens/NewAppointment");
  };

  return (
    <div className="flex ml-4">
      <Sidebar />

      <div className="flex-1 bg-maincolor h-screen p-3 ml-60 p-3">
      <button
          onClick={handleNewAppointmentsClick}
          className="absolute mt-4 right-4 bg-orange text-white font-bold px-4 py-2 rounded"
        >
          New Appointments
        </button>

        <h1 className="ml-6 mt-10 text-2xl font-bold">
          Appointments {">"}{" "}
          <span className="text-orange">General Practitioner</span>
        </h1>
        
        <div className="grid grid-cols-5 gap-4 mt-4">
          {/* Repeat this block for each card */}
          {squaresData.map((appointment) => (
            <div
              key={appointment.id}
              className="bg-photos p-4 rounded-md shadow-md"
              style={{
                width: "206px",
                height: "247px",
                top: "179px",
                left: "332px",
              }}
            >
              <div className="flex flex-col items-center">
                <ImageComponent imageSrc={appointment.imageSrc} />
                <p className="text-center font-bold text-xl mt-3">{appointment.title}</p>
                <p className="text-center text-sm"> Appointments :{appointment.Appointments}</p>
              </div>
            </div>
          ))}
          {/* End of repeated block */}
        </div>
      </div>
    </div>
  );
};

const ImageComponent: React.FC<{ imageSrc: string }> = ({ imageSrc }) => {
  return (
    <a href="/screens/DoctorAppointments">
      <img
        src={imageSrc}
        alt="User Profile"
        className="w-188 h-118 object-cover rounded-md"
        style={{
          top: "215px",
          left: "341px",
        }}
      />
    </a>
  );
};

export default Appointments;
