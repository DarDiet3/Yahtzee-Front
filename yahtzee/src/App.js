import { Redirect, Route, Switch } from 'react-router';
import { useSelector, useDispatch} from 'react-redux';
import { useHistory } from "react-router-dom";

import LandingPage from "./components/LandingPage";
import SignupForm from "./components/SignUpForm";
import LoginForm from "./components/LoginForm";

import './App.css';

function App() {
  return (
    <div className="App">
        <Route exact path="/" component={LandingPage}/>
        <Route path="/signup" component={SignupForm}/>
        <Route path="/login" component={LoginForm}/>
    </div>
  );
}

export default App;
