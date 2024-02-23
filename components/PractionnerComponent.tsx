import PractitionerImage from "./PractitionerImage"
function PractionnerComponent(props) {
  return (
    <div  className="bg-photos p-0 pb-4 rounded-md shadow-md flex flex-col"
    style={{
        width: "206px",
        height: "287px",
        top: "179px",
        left: "332px",
      }}
    >
        <div className="w-full h-10 p-0 flex flex-col justify-start relative">
            <img src='/wavy.svg' alt="" className="w-full h-full p-0 absolute top-0 left-0 right-0 -translate-y-2" />
        </div>
       <div className="w-full p-4">
        <PractitionerImage 
            imageSource={props.imageSrc}
        />
            <p className="text-white text-sm text-center pt-4">{props.title}</p>
            <p className="text-white text-sm text-center pt-2">today :{props.appointment} Appointments</p>
       </div>
    </div>
  )
}

export default PractionnerComponent