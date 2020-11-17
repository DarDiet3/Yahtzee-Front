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
            <H.TitleHolder>
                <H.H1><Link to="/">Settlers of Deere</Link></H.H1>
            </H.TitleHolder>
            <H.NavBar>
                <Link to="/"><H.NavButton>Lobby</H.NavButton></Link>
                <Link to="/profile"><H.NavButton>Profile</H.NavButton></Link> 
                <H.NavButton onClick={() => HandleLogout()}>
                    Log Out
                </H.NavButton>
            </H.NavBar>
            
        </H.Header>
    )
}

export default Header;