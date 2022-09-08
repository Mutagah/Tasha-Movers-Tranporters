import React,{useState} from "react"
import useFetch from "../customHooks/useFetch"
function RegisterDrivers(){
    const {data} = useFetch("http://localhost:9292/drivers")
    const displayDrivers = data.map((element)=>
    {
        return( 
    <div class="col-md-3">
        <div class="card p-2">
            <div class="text-right">Vehicle Licensed : {element.vehicle_type_licensed}</div>
            <div class="text-center mt-2 p-3"> <img src={element.driver_image_url} width="250" height="200"/> <span class="d-block font-weight-bold">Name: {element.name}</span>
                <hr/> <span>Years of Experience: {element.years_of_experience}</span>
                <div class="d-flex flex-row align-items-center justify-content-center"> <i class="fa fa-map-marker"></i>  </div>
                <div class="d-flex justify-content-between mt-3"> <span></span> </div>
            </div>
        </div>
    </div>
)})
    const [driverData, setdriverData] =useState(
        {
            name:"",
            license_no:"",
            years_of_experience:"",
            task_destination:"",
            estimated_distance_in_km:"",
            vehicle_type_licensed: "Trucks",
            home_location:"",
            driver_image_url: ""
        }
    )
    function handleChange(event){
        setdriverData({...driverData,[event.target.name]:event.target.value})
    }
    function handleSubmit(event){
        event.preventDefault()
        fetch("http://localhost:9292/drivers",{
            method : "POST",
            headers :
            {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify(driverData)
        })
    }
    return(
        <div className="mt-3 mb-5">
        <h3 className="mt-4">Please fill in your details here</h3>
    <form onSubmit={handleSubmit}>
        <div className="row g-2">
            <div className="col-12 col-md-6 col-lg-6">
                <label>Enter your name:</label>
                <input type="text" className="form-control form-control-lg" name="name" value={driverData.name} placeholder="name" onChange={handleChange}/>
            </div>

            <div className="col-12 col-md-6 col-lg-6">
                <label>Enter license number:</label>
                <input type="text" className="form-control form-control-lg" placeholder="License Number" name="license_no" value={driverData.license_no} onChange={handleChange}/>
            </div>

            <div className="col-12 col-md-6 col-lg-6">
                <label>Enter years of experience:</label>
                <input type="text"  className="form-control form-control-lg" placeholder="years of experience" name="years_of_experience" value={driverData.years_of_experience} onChange={handleChange}/>
            </div>

            <div className="col-12 col-md-6 col-lg-6">
                <label>Enter vehicle type licensed:</label>
                <select className="form-select form-select-lg mb-3" name="vehicle_type_licensed" onChange={handleChange}>
                    <option value="Trucks">Trucks</option>
                    <option value="Pick-ups">Pick-ups</option>
                    <option value="Vans">Vans</option>
                </select>
            </div>

            <div className="col-12 col-md-6 col-lg-6">
                <label>Enter home Location:</label>
                <input type="text" className="form-control form-control-lg" placeholder="home location" name="home_location" value={driverData.home_location} onChange={handleChange}/>
            </div>

            <div className="col-12 col-md-6 col-lg-6">
                <label>Enter link to image:</label>
                <input type="text" className="form-control form-control-lg" placeholder="passport image" name="driver_image_url" value={driverData.driver_image_url} onChange={handleChange}/>
            </div>

            
            <div className="col-12 col-md-6 col-lg-4 text-end">
                <button type="submit" className="btn btn-dark btn-lg mt-4">
                    SAVE DETAILS
                </button>
            </div>
        </div>
    </form>
    <h3 className="mt-4">Our drivers</h3>
    <div className="row mt-2 g-1">
        {displayDrivers}
    </div>
    
    </div>
    )

}
export default RegisterDrivers;