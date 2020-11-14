import React from "react";
import { Link } from "react-router-dom";

import * as L from "../styles/LobbyStyles";
import Header from "../components/Header";

const Lobby = () => {

    return(
        <div>
            <Header/>
            <L.BodyContainer>
                <L.OptionHolder>
                    <Link to="/game">New Game</Link>
                    <Link to="/profile">My Stats</Link>
                    <Link to="/stats">All Stats</Link>
                </L.OptionHolder>
            </L.BodyContainer>
        </div>
       
    )
}

export default Lobby;