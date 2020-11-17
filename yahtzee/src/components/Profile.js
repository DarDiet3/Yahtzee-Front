import React, { useEffect, useState } from "react";
import { Switch, Link, Route } from "react-router-dom";
import { useSelector } from "react-redux";

import Header from "./Header";
import EditProfile from "./EditProfile";
import * as L from "../styles/LandingPageStyles";
import * as P from "../styles/ProfileStyles";

import { currentUser } from "../features/gameMetaDataSlice";
import { getUserData } from "../services/api_helper";

const Profile = () => {
    const activeUser = useSelector(currentUser);
    console.log(activeUser)
    const[userData, setUserData] = useState([])
    console.log(userData)
    
    useEffect(() => {
        let data = getUserData(activeUser.id);
        setUserData(data)
    }, [])

    return (
        activeUser.username === "guest" ?
            <L.Div>
                <L.Modal>
                    <h1>Sorry, you must be signed in to save your stats!</h1>
                    <Link to="/signup">Sign Up</Link>
                    <Link to="/login">Log In</Link>
                    <Link to="/">Return to Lobby</Link>
                </L.Modal>
            </L.Div>
            :
            <P.BodyContainer>
                <Header />
                <P.Div>
                    <P.BioBox>
                        <P.ProfPic src={activeUser.profileImg}/>
                        <h1>{activeUser.username}</h1>
                        <Link to="/edit">Edit Profile</Link>
                    </P.BioBox>
                    <P.SubBox>
                        <P.StatsBox>
                            <P.StatLine>

                            </P.StatLine>
                            <P.StatLine>

                            </P.StatLine>
                            <P.StatLine>

                            </P.StatLine>
                            <P.StatLine>

                            </P.StatLine>
                            <P.StatLine>

                            </P.StatLine>
                        </P.StatsBox>
                    </P.SubBox>
                </P.Div>
            </P.BodyContainer>

    )
}

export default Profile;