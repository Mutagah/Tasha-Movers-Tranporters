import React from "react"
import "./RegisterTask.css"
import useFetch from "../customHooks/useFetch"
function RegisterTask(){
    const {data} = useFetch("http://localhost:9292/vehicles")
    console.log(data)
    const displayVehicles = data.map((element)=>
        {
            return( 
        <div class="col-md-3">
            <div class="card p-2">
                <div class="text-right"> <small>{element.vehicle_type}</small> </div>
                <div class="text-center mt-2 p-3"> <img src={element.vehicle_image_url} width="250" height="200"/> <span class="d-block font-weight-bold">{element.vehicle_type}</span>
                    <hr/> <span>{element.registration_no}</span>
                    <div class="d-flex flex-row align-items-center justify-content-center"> <i class="fa fa-map-marker"></i>  </div>
                    <div class="d-flex justify-content-between mt-3"> <span><button classname="btn btn-dark btn-lg mt-4">Book me</button></span> </div>
                </div>
            </div>
           
        </div>
    )})
    return(
        <div className="mt-3 mb-5">
            <h3 className="mt-4">Please fill in your taks details here</h3>
        <form >
            <div className="row g-2">
                <div className="col-12 col-md-6 col-lg-6">
                    <label>Enter Company name:</label>
                    <input type="text" className="form-control form-control-lg" placeholder="Company name"/>
                </div>

                <div className="col-12 col-md-6 col-lg-6">
                    <label>Enter Task description:</label>
                    <input type="text" className="form-control form-control-lg" placeholder="Task Description(include the weight)" />
                </div>

                <div className="col-12 col-md-6 col-lg-6">
                    <label>Enter task Location departure:</label>
                    <input type="text"  className="form-control form-control-lg" placeholder="Location Departure" />
                </div>

                <div className="col-12 col-md-6 col-lg-6">
                    <label>Enter task destination:</label>
                    <input type="text" className="form-control form-control-lg" placeholder="Task destination" />
                </div>

                <div className="col-12 col-md-6 col-lg-6">
                    <label>Enter estimated distance:</label>
                    <input type="text" className="form-control form-control-lg" placeholder="Estimated distance in km" />
                </div>
                <div className="col-12 col-md-6 col-lg-4 text-end">
                    <button type="submit" className="btn btn-dark btn-lg mt-4">
                        SAVE TASK
                    </button>
                </div>
            </div>
        </form>
        <h3 className="mt-4"> Please Book your preffered means on vehicle</h3>
        <input type="text" placeholder="Enter car type:" className="form-control form-control-lg"/>
        <div className="row mt-2 g-1">
        {displayVehicles}
        </div>
    </div>
    )
    return 
}
export default RegisterTask