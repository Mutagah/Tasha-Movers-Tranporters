import React,{useEffect, useState} from "react"
function AssignVehicle({handleTaskSubmission, setVehicleId}){
     const [vehicleData,setVehicleData] = useState([])
    useEffect(()=>{
    fetch("http://localhost:9292/vehicles")
    .then((response)=> response.json())
    .then((data)=> setVehicleData(data))
    }
    ,
    [])
    function handleVehicleAssignment(vehicleId)
    {
        setVehicleId(vehicleId)
    const filteredVehicles = vehicleData.filter((vehicle)=>
    {
        return(vehicle.id !== vehicleId)
    })
    setVehicleData(filteredVehicles)
    }
    
    const displayVehicles = vehicleData.map((element)=>
    {
        return( 
    <div key={element.id} className="col-md-3">
        <div className="card p-2">
            <div className="text-right"></div>
                <hr/> <span>Condition: {element.vehicle_condition}</span>
            <div className="text-center mt-2 p-3"> <img src={element.vehicle_image_url} width="250" height="200"/> <span className="d-block font-weight-bold">Registration Number: {element.registration_no}</span>
                <div className="d-flex flex-row align-items-center justify-content-center"> <i className="fa fa-map-marker"></i>  </div>
                <div className="d-flex justify-content-between mt-3"> <span><button onClick={()=>{handleVehicleAssignment(element.id)}}>ASSIGN VEHICLE</button></span> </div>
            </div>
        </div>
    </div>
)})
    return(
        <div className="mt-3 mb-5">
        <h3 className="mt-4">Please pick a Vehicle and submit task at the bottom</h3>
    <div className="row mt-2 g-1">
        {displayVehicles}
    </div>
    <div className="col-12 col-md-7 col-lg-6 text-end">
                <button type="submit" onClick={handleTaskSubmission} className="btn btn-dark btn-lg mt-4">
                    SUBMIT TASK
                </button>
            </div>
    </div>
    )

}
export default AssignVehicle;