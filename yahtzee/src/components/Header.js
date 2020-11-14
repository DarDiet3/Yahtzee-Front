import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import * as H from "../styles/GeneralStyles";
import { Link } from "react-router-dom";
import { currentUser, setCurrentUser } from "../features/gameMetaDataSlice";



const Header = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const activeUser = useSelector(currentUser);

    const HandleLogout = () => {
        localStorage.removeItem('authToken');
        localStorage.removeItem("currentUserId");
        dispatch(setCurrentUser(""));
        setTimeout(() => {
          history.push("/")
      }, 500)
    }

    return (
        <H.Header>
            <H.H1>Yahtzee</H.H1>
            <H.NavBar>
                <H.NavButton>
                    <Link to="/">
                    {/* Link to the lobby page eventually */}
                    Lobby
                    </Link>
                </H.NavButton>
                <H.NavButton>
                    <Link to="/profile">Profile</Link>
                </H.NavButton>
                <H.NavButton onClick={() => HandleLogout()}>
                    Log Out
                </H.NavButton>
            </H.NavBar>
            
        </H.Header>
    )
}

export default Header;