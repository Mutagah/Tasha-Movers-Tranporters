import './App.css';
import About from "./About/About"
import Home from "./Home/Home"
import Navbar from "./Navbar/Navbar"
import {Route,Switch} from "react-router-dom"
import RegisterTask from './RegisterTask/RegisterTask';

function App() {
  return (
    <div>
      <Navbar/>
    <Switch> 
        <Route exact path ="/">
          <Home/>
        </Route>
        <Route exact path ="/about">
          <About/>
        </Route>
        <Route exact path ="/registertask">
          <RegisterTask/>
        </Route>

      </Switch>
      </div>
  );
}

export default App;
