import React, { useState } from "react";
import { Link } from "react-router-dom";

import {getScore} from "../services/api_helper";

import * as B from "../styles/LobbyStyles";
import * as H from "../styles/GeneralStyles";
import Header from "../components/Header";
import Game from "../components/Game";
import Profile from "../components/Profile";
import Chat from "./Chat";
import Leaderboard from "../components/Leaderboard";
import Footer from "../components/Footer";

const Lobby = () => {
    const [mainView, setMainView] = useState("");

    return(
        <div>
            <Header/>
            <B.BodyContainer>
                <B.MainHolder>
                    <B.NavBar>
                        <B.NavButton 
                            onClick={() => setMainView("game")}
                            className={mainView === "game" ? "selected": null}
                        >
                            Game Board
                        </B.NavButton>
                        <B.NavButton 
                            onClick={() => setMainView("leaderboard")}
                            className={mainView === "leaderboard" ? "selected": null}
                        >
                            Leaderboard
                        </B.NavButton>
                        <B.NavButton 
                            onClick={() => setMainView("profile")}
                            className={mainView === "profile" ? "selected": null}
                        >
                            Profile
                        </B.NavButton>
                        <B.NavButton>
                            <a href="/ref/catan_dg_rules_012508.pdf" target="_blank" className={"pdf"}>How to Play</a>
                        </B.NavButton>
                    </B.NavBar>
                        <B.MainContent>
                        {mainView === "game" ? 
                            <Game />
                            :
                            mainView === "leaderboard" ?
                            <Leaderboard />
                            :
                            mainView === "profile" ?
                            <Profile />
                            :
                            <B.Waiting>
                                <button onClick={() => setMainView("game")}>New Game</button>
                            </B.Waiting>
                        }
                        </B.MainContent>
                    
                </B.MainHolder>
                <B.ChatContainer>
                    <H.H1>Water Cooler</H.H1>
                    <B.MainContent>
                        <Chat />
                    </B.MainContent>
                </B.ChatContainer>
            </B.BodyContainer>
            <Footer/>
        </div>
       
    )
}

export default Lobby;