import logo from './logo.svg';
import './App.css';
import Hex2rgb from './components/Hex2rgb/Hex2rgb';
import Steps from './components/Steps/Steps';
// import { Router, Route } from "react-router-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <nav>
            <ul>
              {/* <li>
                <Link to="/">Home</Link>
              </li> */}
              <li>
                <Link to="/Hex2rgb">Hex2rgb</Link>
              </li>
              <li>
                <Link to="/Steps">Steps</Link>
              </li>
            </ul>
          </nav>
          {/* <Route exact path="/" component={Home} /> */}
          <Route exact path="/Hex2rgb" component={Hex2rgb} />
          <Route exact path="/Steps" component={Steps} />
        </div>
      </Router>
    </div>
  );
}

export default App;
