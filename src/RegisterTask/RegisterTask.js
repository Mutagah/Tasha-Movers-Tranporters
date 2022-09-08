import React,{useState} from "react"
import "./RegisterTask.css"
import useFetch from "../customHooks/useFetch"
function RegisterTask(){
    const {data} = useFetch("http://localhost:9292/vehicles")
    const [formdata, setformdata] = useState({
        company_name:"",
        task_description:"",
        task_location_departure:"",
        task_destination:"",
        estimated_distance_in_km:""
    })
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
    function handleChange(event)
    {
        setformdata({...formdata,[event.target.name]:event.target.value})
    }
    // console.log(formdata)
    function handleSubmit(event){
        event.preventDefault()
        fetch("http://localhost:9292/tasks",{
            method : "POST",
            headers :
            {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify(formdata)
        })

    }
    return(
        <div className="mt-3 mb-5">
            <h3 className="mt-4">Please fill in your taks details here</h3>
        <form onSubmit={handleSubmit}>
            <div className="row g-2">
                <div className="col-12 col-md-6 col-lg-6">
                    <label>Enter Company name:</label>
                    <input type="text" className="form-control form-control-lg" placeholder="Company name" onChange={handleChange} name="company_name" value={formdata.company_name}/>
                </div>

                <div className="col-12 col-md-6 col-lg-6">
                    <label>Enter Task description:</label>
                    <input type="text" className="form-control form-control-lg" placeholder="Task Description(include the weight)" onChange={handleChange} name="task_description" value={formdata.task_description}/>
                </div>

                <div className="col-12 col-md-6 col-lg-6">
                    <label>Enter task Location departure:</label>
                    <input type="text"  className="form-control form-control-lg" placeholder="Location Departure" onChange={handleChange} name="task_location_departure" value={formdata.task_location_departure} />
                </div>

                <div className="col-12 col-md-6 col-lg-6">
                    <label>Enter estimated distance:</label>
                    <input type="text" className="form-control form-control-lg" placeholder="Estimated distance in km" onChange={handleChange} value={formdata.estimated_distance_in_km} name="estimated_distance_in_km"/>
                </div>

                <div className="col-12 col-md-6 col-lg-6">
                    <label>Enter task destination:</label>
                    <input type="text" className="form-control form-control-lg" placeholder="Task destination" onChange={handleChange} value={formdata.task_destination} name="task_destination"/>
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
}
export default RegisterTask