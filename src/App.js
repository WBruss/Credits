import './App.css';
import NavBar from './components/nav'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

// Importing components
import HomePage from './components/home';
import CreditScore from './components/creditScore';

function App() {
  return (
    <div className="App">
      <Router>  
      <NavBar/>
      <div className="content">
           
          <Switch>
            <Route exact path="/" >
              < HomePage/>
            </Route>
            <Route  path="/creditscores" >
              <CreditScore/>
            </Route>
          </Switch>
      </div>
      </Router>
    </div>
  );
}

export default App;
