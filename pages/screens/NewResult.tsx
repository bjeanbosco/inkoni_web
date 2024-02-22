import Sidebar from "./Sidebar"


const NewResult = ()=>{



    return (
        <div className="flex ml-4">
      <Sidebar />

      <div className="flex-1 bg-maincolor h-screen p-3 ml-60">

        <h1 className="ml-10 mt-6 text-2xl font-bold text-white">
          ALL DRIVERS{">"}
          <span className="text-orange font-bold">Register New Driver</span>
        </h1>
    </div>
        </div>
    )
}

export default NewResult