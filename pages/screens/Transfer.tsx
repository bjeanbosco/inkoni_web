import router from "next/router"
import Sidebar from "./Sidebar"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const Transfer = ()=>{


    const handleTransferClick = () => {
        router.push("/screens/NewTransfer");
      };
    

    return(
        <div>
             <Sidebar/>
             <div className="flex-1 bg-maincolor h-screen p-3 ml-60  custom-scroll">
      <button
          onClick={handleTransferClick}
          className="absolute mt-5 right-4 bg-orange text-white text-2xl font-bold px-5 py-3 rounded"
        >
           {/* <GrAdd className="text-white mr-3 text-sm" /> */}
           <FontAwesomeIcon icon={faPlus} className="pr-2 text-2xl"/>
           TRANSFER PATIENT 
         
        </button>
        </div>
        </div>
    )
}
export default Transfer