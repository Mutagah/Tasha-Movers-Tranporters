import React from "react"
import useFetch from "../customHooks/useFetch"
function ViewTask(){
    const {data} = useFetch("http://localhost:9292/vehicles")
    const tabulatedData = data.map( (element) => {
        return (
            <table class="table table-striped table-dark">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Vehicle_type</th>
      <th scope="col">registration_no</th>
      <th scope="col">task_description</th>
      <th scope="col">task_destination</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{element.id}</td>
      <td>{element.vehicle_type}</td>
      <td>{element.registration_no}</td>
      <td>{element.task.company_name}</td>
      <td>{element.task.task_destination}</td>
      <button style={{color:"red", backgroundColor:"white"}}>Delete</button>
    </tr>
  </tbody>
</table>
    )})
    return (
        <div>
            {tabulatedData}
        </div>
    )
}
export default ViewTask