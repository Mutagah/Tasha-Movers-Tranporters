import logo from './logo.svg';
import Home from "./Home/Home"
import Navbar from "./Navbar/Navbar"
import {Route,Switch} from "react-router-dom"
import './App.css';

function App() {
  return (
    <div>
      <Navbar/>
    <Switch> 
        <Route exact path ="/">
          <Home/>
        </Route>
      </Switch>
      </div>
  );
}

export default App;
