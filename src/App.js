import './App.css';
import Home from "./Home/Home"
import useFetch from "./useFetch"
import Navbar from "./Navbar/Navbar"
import React,{useState} from "react"
import ViewTask from './ViewTask/ViewTask';
import {Route,Switch} from "react-router-dom"
import { useHistory } from 'react-router-dom'
import RegisterTask from './RegisterTask/RegisterTask';
import AssignVehicle from './AssignVehicle/AssignVehicle';
function App() {
  const history = useHistory()
  const [driverId, setDriverId] = useState(0)
  const [vehicleId, setVehicleId] = useState(0)
  const {data, setdata} = useFetch("https://tasks-movers-backend.herokuapp.com/drivers")
  const [searchCriteria, setSearchCriteria] = useState("")
    function handleSearchCriteria(event)
    {
        setSearchCriteria(event.target.value)
    }

    function handleDriverAssigment(driverIdNumber){
      setDriverId(driverIdNumber)   
    const filteredDrivers = data.filter((driver)=>
    {
      return(driver.id !== driverIdNumber)
    })  
    setdata(filteredDrivers)
    }

    const [formdata, setformdata] = useState({
      task_description:"",
      departure_location:"",
      destination_location:"",
      estimated_distance_in_km:""
  })
  console.log(driverId)
    const filteredDisplay = data.filter((driver)=>
         driver.vehicle_type_licensed.toLowerCase().includes(searchCriteria.toLowerCase())
    )  
    function handleChange(event)
    {
        setformdata({...formdata,[event.target.name]:event.target.value})
    }
    console.log(formdata)
    function handleTaskSubmission(event){
        event.preventDefault()
        fetch("https://tasks-movers-backend.herokuapp.com/tasks",{
            method : "POST",
            headers :
            {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify({...formdata,driver_id: driverId,vehicle_id: vehicleId})
        })
        setformdata({
            task_description:"",
            departure_location:"",
            destination_location:"",
            estimated_distance_in_km:"",
        })
        setDriverId(0)
        setVehicleId(0)
        history.push("/viewtask")
    }
  return (
    <div>
      <Navbar/>
    <Switch> 
        <Route exact path ="/">
          <Home/>
        </Route>
        <Route exact path ="/registertask">
          <RegisterTask filteredDisplay={filteredDisplay} formdata={formdata} handleChange={handleChange} handleDriverAssigment={handleDriverAssigment} handleSearchCriteria={handleSearchCriteria}/>
        </Route>
        <Route exact path ="/assignvehicle">
          <AssignVehicle setVehicleId={setVehicleId} handleTaskSubmission={handleTaskSubmission}/>
        </Route>
        <Route exact path ="/viewtask">
          <ViewTask/>
        </Route>
      </Switch>
      </div>
  );
}

export default App;
