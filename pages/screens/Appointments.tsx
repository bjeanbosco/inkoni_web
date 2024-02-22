import React from "react";
import Sidebar from "./Sidebar";
import router from "next/router";

const Appointments: React.FC = () => {
  const squaresData = [
    {
      id: 1,
      // bring image from styles images folder


      imageSrc: "https://s3-eu-west-1.amazonaws.com/intercare-web-public/wysiwyg-uploads%2F1558083610864-general_practitioner.jpg",
      title: "General Practitioner",
      age: 30,
      gender: "Male",
    },
   

    // ... other appointments
  ];

  const handleNewAppointmentsClick = () => {
    router.push("/screens/NewAppointment");
  };

  return (
    <div className="flex ml-4">
      <Sidebar />

      <div className="flex-1 bg-maincolor h-screen p-3 lg:ml-60 text-white font-bold">
      <button
          onClick={handleNewAppointmentsClick}
          className="absolute mt-4 right-4 bg-orange text-white font-bold px-4 py-2 rounded"
        >
          New Appointments
        </button>

        <h1 className="ml-6 mt-10 text-2xl font-bold">
          Appointments
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 mt-4 ml-6 mr-60">
          {/* Repeat this block for each card */}
          {squaresData.map((appointment) => (
            <div
              key={appointment.id}
              className="bg-photos p-2 rounded-md shadow-md"
            >
              <div className="flex items-center">
                <div className="relative ml-4 mb-4">
                  <h1 className="text-xl font-bold mb-3 ml-4  text-center">
                    {appointment.title}
                  </h1>
                  <a href="/screens/Practitioner">
                    <img
                      src="https://s3-eu-west-1.amazonaws.com/intercare-web-public/wysiwyg-uploads%2F1558083610864-general_practitioner.jpg"
                      alt="User Profile"
                      className="w-full h-36 object-cover "
                    />
                  </a>
                </div>
                <div className="ml-4">
                  <p>Today: 11</p>
                  <p>This Week: 32</p>
                  <p>Emergency: 1</p>
                </div>
              </div>
            </div>
          ))}
          {/* End of repeated block */}
          {squaresData.map((appointment) => (
            <div
              key={appointment.id}
              className="bg-photos p-2 rounded-md shadow-md"
            >
              <div className="flex items-center">
                <div className="relative ml-4 mb-4">
                  <h1 className="text-xl font-bold mb-3 ml-4  text-center">
                  Pediatrics
                  </h1>
                  <a href="/screens/Practitioner">
                    <img
                      src="https://sspediatrics.com/wp-content/uploads/2022/09/What-is-a-Pediatrician.jpeg"
                      alt="User Profile"
                      className="w-full h-36 object-cover "
                    />
                  </a>
                </div>
                <div className="ml-4">
                  <p>Today: 11</p>
                  <p>This Week: 30</p>
                  <p>Emergency: 0</p>
                </div>
              </div>
            </div>
          ))}
          {/* End of repeated block */}
          {squaresData.map((appointment) => (
            <div
              key={appointment.id}
              className="bg-photos p-2 rounded-md shadow-md"
            >
              <div className="flex items-center">
                <div className="relative ml-4 mb-4">
                  <h1 className="text-xl font-bold mb-3 ml-4  text-center">
                  Gastroenterology
                  </h1>
                  <a href="/screens/Practitioner">
                    <img
                      src="https://polarishospitals.com/wp-content/uploads/elementor/thumbs/Polaris-Gastroenterology-p4z7dmkisf07rf49hnd04begy3bzdavsv7aihrdv1s.jpg"
                      alt="User Profile"
                      className="w-full h-36 object-cover "
                    />
                  </a>
                </div>
                <div className="ml-4">
                  <p>Today: 11</p>
                  <p>This Week: 16</p>
                  <p>Emergency: 1</p>
                </div>
              </div>
            </div>
          ))}
         {squaresData.map((appointment) => (
            <div
              key={appointment.id}
              className="bg-photos p-2 rounded-md shadow-md"
            >
              <div className="flex items-center">
                <div className="relative ml-4 mb-4">
                  <h1 className="text-xl font-bold mb-3 ml-4  text-center">
                  Ophthalmology
                  </h1>
                  <a href="/screens/Practitioner">
                    <img
                      src="https://alhammadi.med.sa/ImagesProjects/26.jpg"
                      alt="User Profile"
                      className="w-full h-36 object-cover "
                    />
                  </a>
                </div>
                <div className="ml-4">
                  <p>Today: 11</p>
                  <p>This Week: 19</p>
                  <p>Emergency: 4</p>
                </div>
              </div>
            </div>
          ))}
         
          {/* End of repeated block */}
          {squaresData.map((appointment) => (
            <div
              key={appointment.id}
              className="bg-photos p-2 rounded-md shadow-md"
            >
              <div className="flex items-center">
                <div className="relative ml-4 mb-4">
                  <h1 className="text-xl font-bold mb-3 ml-4  text-center">
                    Dentists
                  </h1>
                  <a href="/screens/Practitioner">
                    <img
                      src="https://doctorlaurenbecker.com/tpn/gen/GettyImages-1016764012.jpg"
                      alt="User Profile"
                      className="w-full h-36 object-cover "
                    />
                  </a>
                </div>
                <div className="ml-4">
                  <p>Today: 11</p>
                  <p>This Week: 07</p>
                  <p>Emergency: 0</p>
                </div>
              </div>
            </div>
          ))}
           {/* End of repeated block */}
           {squaresData.map((appointment) => (
            <div
              key={appointment.id}
              className="bg-photos p-2 rounded-md shadow-md"
            >
              <div className="flex items-center">
                <div className="relative ml-4 mb-4">
                  <h1 className="text-xl font-bold mb-3 ml-4  text-center">
                   Neology
                  </h1>
                  <a href="/screens/Practitioner">
                    <img
                      src="https://www.topdoctors.co.uk/files/Image/large/58b0424e-411c-4243-9228-4a0725bbab96.jpg"
                      alt="User Profile"
                      className="w-full h-36 object-cover "
                    />
                  </a>
                </div>
                <div className="ml-4">
                  <p>Today: 11</p>
                  <p>This Week: 15</p>
                  <p>Emergency: 0</p>
                </div>
              </div>
            </div>
          ))}
           {/* End of repeated block */}
           {squaresData.map((appointment) => (
            <div
              key={appointment.id}
              className="bg-photos p-2 rounded-md shadow-md"
            >
              <div className="flex items-center">
                <div className="relative ml-4 mb-4">
                  <h1 className="text-xl font-bold mb-3 ml-4  text-center">
                    Cardiology
                  </h1>
                  <a href="/screens/Practitioner">
                    <img
                      src="https://www.camc.org/sites/default/files/styles/800x600/public/2020-09/Cardiology_hero_0.jpg?itok=olV0f2r9"
                      alt="User Profile"
                      className="w-full h-36 object-cover "
                    />
                  </a>
                </div>
                <div className="ml-4">
                  <p>Today: 09</p>
                  <p>This Week: 12</p>
                  <p>Emergency: 3</p>
                </div>
              </div>
            </div>
          ))}
           {/* End of repeated block */}
           {squaresData.map((appointment) => (
            <div
              key={appointment.id}
              className="bg-photos p-2 rounded-md shadow-md"
            >
              <div className="flex items-center">
                <div className="relative ml-4 mb-4">
                  <h1 className="text-xl font-bold mb-3 ml-4  text-center">
                    Determinology
                  </h1>
                  <a href="/screens/Practitioner">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN4BcZQU5OfLOYJqF6m861UkEGNrivGFPhkw"
                      alt="User Profile"
                      className="w-full h-36 object-cover "
                    />
                  </a>
                </div>
                <div className="ml-4">
                  <p>Today: 11</p>
                  <p>This Week: 11</p>
                  <p>Emergency: 1</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Appointments;
