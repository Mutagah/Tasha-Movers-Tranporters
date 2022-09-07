import React from "react"
import "./RegisterTask.css"
function RegisterTask(){
    return(
        <div className="mt-3 mb-5">
            <h5>Please fill in your taks details here</h5>
        <form >
            <div className="row g-2">
                <div className="col-12 col-md-6 col-lg-6">
                    <label>Enter Company name:</label>
                    <input type="text" className="form-control form-control-lg" placeholder="Company name"/>
                </div>

                <div className="col-12 col-md-6 col-lg-6">
                    <label>Enter Task description:</label>
                    <input type="text" className="form-control form-control-lg" placeholder="Task Description" />
                </div>

                <div className="col-12 col-md-6 col-lg-6">
                    <label>Enter task Location departure:</label>
                    <input type="text"  className="form-control form-control-lg" placeholder="Location Departure" />
                </div>

                <div className="col-12 col-md-6 col-lg-6">
                    <label>Enter task destination:</label>
                    <input type="text" className="form-control form-control-lg" placeholder="Task destination(include the weight)" />
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
        <h1 className="mt-4"> Please Book your preffered means on vehicle</h1>
    </div>
    )
}
export default RegisterTask