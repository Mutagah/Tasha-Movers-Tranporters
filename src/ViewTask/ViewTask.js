import React, { useState,useEffect } from "react"

function ViewTask(){
    const [data, setData] = useState([])

    useEffect(()=>
    {
        fetch("https://movers-backend-2.herokuapp.com/tasks")
        .then((resp)=> resp.json())
        .then((data)=> setData(data))
    },[])

    function handleClick(taskId)
    {
        fetch(`https://movers-backend-2.herokuapp.com/tasks/1/${taskId}`,{
          method : "DELETE",
        }).then(response => response.json())
        .then((data)=> console.log(data))
        const updatedTask = data.filter((item)=>
        {
            return (item.id !== taskId)
        })
        setData(updatedTask)
    }
    
    return( 

        <table className="table table-striped table-dark">
<thead>
<tr>
<th scope="col">#</th>
<th scope="col">Task Description</th>
<th scope="col">Departure Location</th>
<th scope="col">Destination Location</th>
<th scope="col">Assigned Driver</th>
<th scope="col">Assigned Vehicle</th>
<th scope="col">Vehicle Type</th>
<th scope="col">Delete Task</th>
</tr>
</thead>
<tbody>
    {data.map((element)=>
    { return(
        <tr key={element.id}>    
        <td>{element.id}</td>
        <td>{element.task_description}</td>
        <td>{element.departure_location}</td>
        <td>{element.destination_location}</td>
        <td>{element.driver?.name}</td>
        <td>{element.vehicle?.registration_no}</td>
        <td>{element.vehicle?.vehicle_type}</td>
        <td>
        <button style={{color:"red", backgroundColor:"white"}} onClick={()=>handleClick(element.id)}>Delete</button>
        </td>
    </tr>
   ) })}

    </tbody>
    </table>
    )
}
export default ViewTask;
