import { Redirect, Route, Switch } from 'react-router';
import { useSelector, useDispatch} from 'react-redux';
import { useHistory } from "react-router-dom";

import LandingPage from "./components/LandingPage";
import SignupForm from "./components/SignUpForm";
import LoginForm from "./components/LoginForm";
import Lobby from "./components/Lobby";
import Profile from "./components/Profile";
import GameDisplay from "./components/GameDispaly";
import Chat from "./components/Chat";
import EditProfile from "./components/EditProfile";

import { currentUser } from "./features/gameMetaDataSlice";


function App() {
  const activeUser = useSelector(currentUser);
  return (
    <div className="App">
      {activeUser ? 
        <Switch>
          <Route exact path="/" component={Lobby}/>
          <Route path="/profile" component={Profile}/>
          <Route path="/edit" component={EditProfile}/>
          <Route path="/game" component={GameDisplay}/>
          <Route path="/chat" component={Chat}/>
        </Switch>
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
