const Appoints = (props)=>{


    return(
            <div
              key={props.id}
              className="bg-photos p-2 rounded-2xl shadow-inner m-2 drop-shadow-[15px_15px_10px_rgba(0,0,0,0.8)]"
            >
              <div className="flex items-center">
                <div className="relative ml-4 mb-4">
                  <h1 className="text-2xl font-bold mb-3 ml-4  text-center">
                    {props.title}
                  </h1>
                  <a href="/screens/Practitioner">
                    <img
                      src={props.imageUrl}
                      alt={props.title}
                      className="w-full h-36 object-cover "
                    />
                  </a>
                </div>
                <div className="ml-4">
                  <p className="pb-2">{props.day}</p>
                  <p className="pb-2">{props.status}</p>
                  <p>{props.status}</p>
                </div>
              </div>
            </div>
          
    )
}



export default Appoints