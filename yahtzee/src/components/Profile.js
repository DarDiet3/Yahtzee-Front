import React, { useEffect, useState } from "react";
import { Switch, Link, Route } from "react-router-dom";
import { useSelector } from "react-redux";

import Header from "./Header";
import EditProfile from "./EditProfile";
import * as L from "../styles/LandingPageStyles";
import * as P from "../styles/ProfileStyles";
import * as H from "../styles/GeneralStyles";
import * as D from "../styles/DataDisplayStyles";

import { currentUser, setGameComplete } from "../features/gameMetaDataSlice";
import { getUserData } from "../services/api_helper";

const Profile = () => {
    const activeUser = useSelector(currentUser);
    const [profileData, setProfileData] = useState([])
    const [gameStats, setGameStats] = useState({
        completionPCT: 0,
        gamesFinished: 0,
        gamesStarted: 0,
        maxPoints: 0,
        ppg: 0,
        totalPoints: 0,
        totals: {
            brick: 0,
            cities: 0,
            gold: 0,
            knights: 0,
            roads: 0,
            rock: 0,
            settlements: 0,
            sheep: 0,
            tradedbrick: 0,
            tradedrock: 0,
            tradedsheep: 0,
            tradedwheat: 0,
            tradedwood: 0,
            trades: 0,
            wheat: 0,
            wood: 0
        }
    });
    console.log(profileData)

    useEffect(() => {
        async function fetchData() {
            let data = await getUserData(activeUser.id);
            setProfileData(data.userData)
            calculateGameStats(data.userData)
        }

        fetchData();
    }, [])

    const calculateGameStats = async (userData) => {
        const gamesStarted = userData.Gamedata.length;
        const gamesFinished = userData.Gamedata.reduce((num, game) => {
            if (game.gamecomplete === "true") {
                num++
            }
            return num
        }, 0);
        const totalPoints = userData.Gamedata.reduce((total, game) => {
            return total += game.victorypoints
        }, 0);
        const totals = userData.Gamedata.reduce((total, game) => {
            total.sheep += game.sheep;
            total.wheat += game.wheat;
            total.rock += game.rock;
            total.brick += game.brick;
            total.wood += game.wood;
            total.gold += game.gold;
            total.trades += game.trades;
            total.tradedsheep += game.tradedsheep;
            total.tradedwheat += game.tradedwheat;
            total.tradedrock += game.tradedrock;
            total.tradedbrick += game.tradedbrick;
            total.tradedwood += game.tradedwood;
            total.knights += game.knights;
            total.roads += game.roads;
            total.settlements += game.settlements;
            total.cities += game.cities;
            return total
        }, {
            sheep: 0,
            wheat: 0,
            rock: 0,
            brick: 0,
            wood: 0,
            gold: 0,
            trades: 0,
            tradedsheep: 0,
            tradedwheat: 0,
            tradedrock: 0,
            tradedbrick: 0,
            tradedwood: 0,
            knights: 0,
            roads: 0,
            settlements: 0,
            cities: 0
        })
        const gamePoints = [];
        userData.Gamedata.map(game => { gamePoints.push(game.victorypoints) });
        const maxPoints = gamePoints.reduce(function (a, b) {
            return Math.max(a, b);
        })
        let completionPCT;
        let ppg;
        if (gamesFinished === 0) {
            completionPCT = 0;
            ppg = 0;
        } else {
            completionPCT = (parseFloat(gamesFinished) / parseFloat(gamesStarted)) * 100;
            ppg = (parseFloat(totalPoints) / parseFloat(gamesFinished));
        }

        let gameStats = {
            gamesStarted,
            completionPCT,
            gamesFinished,
            totalPoints,
            ppg,
            totals,
            maxPoints
        }

        setGameStats(gameStats);
    }
    console.log(gameStats)
    return (
        activeUser.username === "guest" ?
            <L.Div>
                <L.Modal>
                    <H.H1>Sorry, you must be signed in to save your stats!</H.H1>
                    <Link to="/signup" className={"landing"}>Sign Up</Link>
                    <Link to="/login" className={"landing"}>Log In</Link>
                    <Link to="/" className={"landing"}>Return to Lobby</Link>
                </L.Modal>
            </L.Div>
            :
            <P.Div>
                <P.BioBox>
                    <P.ProfPic src={activeUser.profileImg} />
                    <H.H1>{activeUser.username}</H.H1>
                    <Link to="/edit">Edit Profile</Link>
                </P.BioBox>
                <P.SubBox>
                    <P.StatsBox>
                        <H.H1>User Statistics</H.H1>
                        <P.StatsBox className={"inner"}>
                            <P.StatLine>
                                Games Started: {gameStats.gamesStarted}
                            </P.StatLine>
                            <P.StatLine>
                                Games Finished: {gameStats.gamesFinished}
                            </P.StatLine>
                            <P.StatLine>
                                Completion PCT: {gameStats.completionPCT}%
                            </P.StatLine>
                            <P.StatLine>
                                Total Points: {gameStats.totalPoints}
                            </P.StatLine>
                            <P.StatLine>
                                High Score: {gameStats.maxPoints}
                            </P.StatLine>
                            <P.StatLine>
                                Points Per Game: {gameStats.ppg}
                            </P.StatLine>
                            <P.StatLine className={"list"}>
                                Trades Made: {gameStats.totals.trades}
                            </P.StatLine>
                            <P.StatLine className={"list"}>
                                Builds:
                                <ul>
                                    <li>Roads: {gameStats.totals.roads}</li>
                                    <li>Settlements: {gameStats.totals.settlements}</li>
                                    <li>Cities: {gameStats.totals.cities}</li>
                                    <li>Knights: {gameStats.totals.knights}</li>
                                </ul>
                            </P.StatLine>
                        </P.StatsBox>

                    </P.StatsBox>
                </P.SubBox>
            </P.Div>

    )
}

export default Profile;