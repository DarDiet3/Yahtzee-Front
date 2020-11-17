import React, { useState } from "react";
import { Link } from "react-router-dom";

import {getScore} from "../services/api_helper";

import * as L from "../styles/LobbyStyles";
import Header from "../components/Header";
import Game from "../components/Game";
import Profile from "../components/Profile";
import Chat from "./Chat";

const Lobby = () => {
    const [mainView, setMainView] = useState("");
    return(
        <div>
            <Header/>
            <L.BodyContainer>
                <L.OptionHolder>
                    <Link to="/game">New Game</Link>
                    <Link to="/profile">My Stats</Link>
                    <Link to="/stats">All Stats</Link>
                    <button onClick={() => getScore(5)}>Top 5</button>
                    <Link to="/chat">Chat</Link>
                </L.OptionHolder>
            </L.BodyContainer>
        </div>
       
    )
}

export default Lobby;