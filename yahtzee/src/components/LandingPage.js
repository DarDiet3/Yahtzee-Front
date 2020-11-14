import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";

import { setCurrentUser, currentUser } from "../features/gameMetaDataSlice";

import * as L from "../styles/LandingPageStyles";

const LandingPage = () => {
    const history = useHistory();
    const dispatch = useDispatch();

    const activeUser = useSelector(currentUser);

    const signInGuest = () => {
        const currentUser = {
            username: "guest",
            name: "guest",
            id: 1
        };
        console.log(currentUser)
        dispatch(setCurrentUser(currentUser));
        localStorage.setItem("currentUserId", JSON.stringify(currentUser));
        history.push("/")
    }

    return(
            <L.Div>
                <L.Modal>
                    <h1>Welcome to Yahtzee!</h1>
                    <Link to="/signup">Sign Up</Link>
                    <Link to="/login">Log In</Link>
                    <L.Button onClick={() => signInGuest()}>
                        Continue as Guest
                    </L.Button>

                </L.Modal>
            </L.Div>
    )
}

export default LandingPage;