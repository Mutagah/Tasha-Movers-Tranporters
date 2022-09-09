import React, { useState,useEffect } from "react"

function ViewTask(){
    const [data, setData] = useState([])

    useEffect(()=>
    {
        fetch("https://tasha-movers-backend.herokuapp.com/vehicalls")
        .then((resp)=> resp.json())
        .then((data)=> setData(data))
    },[])

    function handleClick(taskId)
    {
        fetch(`https://tasha-movers-backend.herokuapp.com/vehicalls/${taskId}`,{
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
<th scope="col">Vehicle_type</th>
<th scope="col">registration_no</th>
<th scope="col">task_description</th>
<th scope="col">task_destination</th>
</tr>
</thead>
<tbody>
    {data.map((element)=>
    { return(
        
        <tr key={element.id}>    
        <td>{element.id}</td>
        <td>{element.vehicle_type}</td>
        <td>{element.registration_no}</td>
        <td>{element.task["task_description"]}</td> 
        <td>{element.task["task_destination"]}</td> 
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
