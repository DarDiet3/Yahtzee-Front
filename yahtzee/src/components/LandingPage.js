import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { setCurrentUser } from "../features/gameMetaDataSlice";

import * as L from "../styles/LandingPageStyles";

const LandingPage = () => {
    const history = useHistory();
    const dispatch = useDispatch();

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
                    <L.Button onClick={() => history.push("/signup")}>
                        Sign Up
                    </L.Button>
                    <L.Button onClick={() => history.push("/login")}>
                        Log In
                    </L.Button>
                    <L.Button onClick={() => signInGuest()}>
                        Continue as Guest
                    </L.Button>

                </L.Modal>
            </L.Div>
    )
}

export default LandingPage;