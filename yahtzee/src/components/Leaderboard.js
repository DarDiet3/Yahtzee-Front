import React, { useEffect, useState } from "react";

import { getScore } from "../services/api_helper";

import * as D from "../styles/DataDisplayStyles";
import * as H from "../styles/GeneralStyles";

const Leaderboard = () => {

    useEffect(() => {
        async function fetchData() {
            const scoreData = await getScore(10);
            setLeaderBoard(scoreData.board);
        }
        fetchData();
    }, [])
    const [Leaderboard, setLeaderBoard] = useState([{
        User: { profileImg: "/images/profile/red_dice.jpeg" },
        createdAt: "2020-11-17T16:09:23.202Z",
        id: 10,
        score: 0,
        updatedAt: "2020-11-17T16:09:23.202Z",
        userId: 1,
        username: "guest",
    }]);

    console.log(Leaderboard)
    return (
        <D.Div>
            <D.ModDiv>
                <D.Board>
                    <H.H1>Global Leaderboard</H.H1>
                    <D.MainHolder>
                        <D.NavBar>
                            <D.NavButton
                                className={"selected"}
                            >
                                Top 10
                            </D.NavButton>
                            <D.NavButton
                                className={""}
                            >
                                All
                            </D.NavButton>
                        </D.NavBar>
                        <D.TableRow className={"head"}>
                                <D.TableName></D.TableName>
                                <D.TableName>Username</D.TableName>
                                <D.TableScore>Score</D.TableScore>
                            </D.TableRow>
                        <D.LeaderBoard>
                            {Leaderboard.map((row, index) => {
                                return (
                                    <D.TableRow key={index} id="ScoreRow">
                                        <D.TableImage src={row.User.profileImg} alt={row.username} />
                                        <D.TableName>{row.username}</D.TableName>
                                        <D.TableScore>{row.score} </D.TableScore>
                                    </D.TableRow>
                                )
                            })}
                        </D.LeaderBoard>

                    </D.MainHolder>
                </D.Board>
            </D.ModDiv>
        </D.Div>
    )
}

export default Leaderboard;