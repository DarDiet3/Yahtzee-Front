import React from "react";
import * as L from "../styles/LandingPageStyles";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

const LandingPage = () => {
    const history = useHistory();

    return(
            <L.Div>
                <L.Modal>
                    <h1>Welcome to Yahtzee!</h1>
                    <L.Button onClick={() => history.push("/signup")}>
                        Sign Up
                    </L.Button>
                    <L.Button>
                        Log In
                    </L.Button>
                    <L.Button>
                        Continue as Guest
                    </L.Button>

                </L.Modal>
            </L.Div>
    )
}

export default LandingPage;