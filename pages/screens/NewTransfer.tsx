import Sidebar from "./Sidebar"


const NewTransfer = ()=>{



    return (
        <div className="flex ml-4">
      <Sidebar />

      <div className="flex-1 bg-maincolor h-screen p-3 ml-60">

        <h1 className="ml-10 mt-14 text-3xl font-bold text-white">
          DOCTORS {">"}
          <span className="text-orange font-bold pl-1 underline">Transfer a Patient</span>
        </h1>
    </div>
        </div>
    )
}

export default NewTransfer