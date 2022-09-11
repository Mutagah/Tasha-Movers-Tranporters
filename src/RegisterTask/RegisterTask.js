import "./RegisterTask.css"
function RegisterTask({filteredDisplay,handleDriverAssigment,handleChange,formdata, handleSearchCriteria}){
   
    const displayDrivers = filteredDisplay.map((element)=>
         {
            return( 
        <div key={element.id}className="col-md-3">
            <div className="card p-2">
                <div className="text-right"> <small>{element.vehicle_type_licensed}</small> </div>
                <div className="text-center mt-2 p-3"> <img src={element.driver_image} width="250" height="200"/> <span className="d-block font-weight-bold">{element.name}</span>
                    <hr/> <span>{element.gender}</span>
                    <div className="d-flex flex-row align-items-center justify-content-center"> <i className="fa fa-map-marker"></i>  </div>
                    <div className="d-flex justify-content-between mt-3"> <span><button onClick={()=> handleDriverAssigment(element.id)} className="btn btn-dark btn-lg mt-4">ASSIGN TASK</button></span> </div>
                </div>
            </div>
           
        </div>
    )})
    
 
    return(
        <div className="mt-3 mb-5">
            <h3 className="mt-4">Please fill in your task details here</h3>
        <form>
            <div className="row g-2">
                <div className="col-12 col-md-6 col-lg-6">
                    <label>Enter task description:</label>
                    <input type="text" className="form-control form-control-lg" placeholder="Task Description(include the weight)" onChange={handleChange} name="task_description" value={formdata.task_description}/>
                </div>

                <div className="col-12 col-md-6 col-lg-6">
                    <label>Enter task departure location:</label>
                    <input type="text"  className="form-control form-control-lg" placeholder="Location Departure" onChange={handleChange} name="departure_location" value={formdata.departure_location} />
                </div>

                <div className="col-12 col-md-6 col-lg-6">
                    <label>Enter task destination location:</label>
                    <input type="text" className="form-control form-control-lg" placeholder="Task destination" onChange={handleChange} value={formdata.destination_location} name="destination_location"/>
                </div>

                <div className="col-12 col-md-6 col-lg-6">
                    <label>Enter estimated distance:</label>
                    <input type="text" className="form-control form-control-lg" placeholder="Estimated distance in km" onChange={handleChange} value={formdata.estimated_distance_in_km} name="estimated_distance_in_km"/>
                </div>

                

                
                {/* <div className="col-12 col-md-6 col-lg-4 text-end">
                    <button type="submit" className="btn btn-dark btn-lg mt-4">
                        SAVE TASK
                    </button>
                </div> */}
            </div>
        </form>
        <h3 className="mt-4"> Please choose a driver</h3>
        <input type="text" placeholder="Enter car type:" className="form-control form-control-lg" onChange={handleSearchCriteria}/>
        <div className="row mt-2 g-1">
        {displayDrivers}
        </div>
        <h3 className="mt-4">Submit task after assigning vehicle on next page</h3>
    </div>
    )
}
export default RegisterTask