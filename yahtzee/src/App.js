import { Redirect, Route, Switch } from 'react-router';
import { useSelector, useDispatch} from 'react-redux';
import { useHistory } from "react-router-dom";

import LandingPage from "./components/LandingPage";
import SignupForm from "./components/SignUpForm";
import LoginForm from "./components/LoginForm";
import Lobby from "./components/Lobby";

import { currentUser } from "./features/gameMetaDataSlice";


function App() {
  const activeUser = useSelector(currentUser);
  return (
    <div className="App">
      {activeUser ? 
        <Route exact path="/" component={Lobby}/>
    :
    <>
        <Route exact path="/" component={LandingPage}/>
        <Route path="/signup" component={SignupForm}/>
        <Route path="/login" component={LoginForm}/>
    </>
    }
    </div>
  );
}

export default App;
