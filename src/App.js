import './App.css';
import Home from "./Home/Home"
import Navbar from "./Navbar/Navbar"
import ViewTask from './ViewTask/ViewTask';
import {Route,Switch} from "react-router-dom"
import RegisterTask from './RegisterTask/RegisterTask';
import RegisterDrivers from './RegisterDrivers/RegisterDrivers';

function App() {
  return (
    <div>
      <Navbar/>
    <Switch> 
        <Route exact path ="/">
          <Home/>
        </Route>
        <Route exact path ="/registertask">
          <RegisterTask/>
        </Route>
        <Route exact path ="/registerdriver">
          <RegisterDrivers/>
        </Route>
        <Route exact path ="/viewtask">
          <ViewTask/>
        </Route>
      </Switch>
      </div>
  );
}

export default App;
