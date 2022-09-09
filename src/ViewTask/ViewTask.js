import React, { useState,useEffect } from "react"
function ViewTask(){
    const [data, setData] = useState([])
    useEffect(()=>
    {
        fetch("http://localhost:9292/vehicalls")
        .then((resp)=> resp.json())
        .then((data)=> setData(data))
    },[])
    function handleClick(taskId)
    {
        fetch(`http://localhost:9292/vehicalls/#{taskId}`,{
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
    {data.map((element,index)=>
    { return(
        
        <tr>    
        <td>{element.id}</td>
        <td>{element.vehicle_type}</td>
        <td>{element.registration_no}</td>
        <td>{element.task["task_description"]}</td> 
        <td>{element.task["task_destination"]}</td> 
    <button style={{color:"red", backgroundColor:"white"}} onClick={()=>handleClick(element.id)}>Delete</button>
    </tr>
   ) })}

    </tbody>
    </table>
    )
}
export default ViewTask;












// import React,{useState,useEffect} from "react"
// function ViewTask(){
//     const [data, setData] = useState([])
//     useEffect(()=>{
//         fetch("http://localhost:9292/vehicles")
//         .then(response => response.json())
//         .then(data => setData(data))
//     },[])

//     function handleClick(taskId)
//     {
//         fetch(`http://localhost:9292/vehicalls/#{taskId}`,{
//           method : "DELETE",
//         }).then(response => response.json())
//         .then((data)=> console.log(data))
//         const updatedTask = data.filter((item)=>
//         {
//             return (item.id !== taskId)
//         })
//         setData(updatedTask)
//     }
//     const tabulatedData = data.map( (element) => {
//         return (
//             <table class="table table-striped table-dark">
//   <thead>
//     <tr>
//       <th scope="col">#</th>
//       <th scope="col">Vehicle_type</th>
//       <th scope="col">registration_no</th>
//       <th scope="col">task_description</th>
//       <th scope="col">task_destination</th>
//     </tr>
//   </thead>
//   <tbody>
//     <tr>
//       <td>{element.id}</td>
//       <td>{element.vehicle_type}</td>
//       <td>{element.registration_no}</td>
//       <td>{element.task.company_name}</td>
//       <td>{element.task.task_destination}</td>
//       <button style={{color:"red", backgroundColor:"white"}} onClick={()=>handleClick(element.id)}>Delete</button>
//     </tr>
//   </tbody>
// </table>
//     )})
//     return (
//         <div>
//             {tabulatedData}
//         </div>
//     )
// }
// export default ViewTask