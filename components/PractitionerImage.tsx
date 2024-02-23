export default function PractitionerImage({imageSource}){
    return(
        <a href="/screens/DoctorAppointments">
        <img
            src={imageSource}
            alt='Testing photo'
            className="w-188 h-118 object-cover rounded-md"
            style={{
            top: "215px",
            left: "341px",
            }}
        />
    </a>
    )
}