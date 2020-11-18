import React, { useReducer, useState } from "react";
import { loginUser } from "../services/api_helper";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { setCurrentUser } from "../features/gameMetaDataSlice";
import { currentUser } from "../features/gameMetaDataSlice";
import { deleteUser, editProfile } from "../services/api_helper";


import * as L from "../styles/LandingPageStyles";
import * as E from "../styles/EditStyles";
import * as H from "../styles/GeneralStyles";
import Header from "./Header"

const EditProfile = () => {
    const activeUser = useSelector(currentUser);
    const dispatch = useDispatch();
    const history = useHistory();

    function updateReducer(state, action) {
        switch (action.type) {
            case "USERNAME_CHANGED":
                return { ...state, username: action.payload };
            case "PASSWORD_CHANGED":
                return { ...state, password: action.payload };
            case "CURRENT_PASSWORD_CHANGED":
                return { ...state, password: action.payload };
            default:
                return "ERROR"
        }
    }

    const HandleUpdate = async (e, userData, type) => {
        e.preventDefault();
        const currentUser = await editProfile(userData);
        console.log(currentUser)
        dispatch(setCurrentUser(currentUser.userData));
        history.push("/")      
        //UPDATE SWITCH STAMENT FOR THE TYPE
    }

    const HandleDeleteUser = async (e, user) => {
        await deleteUser(user);
        localStorage.removeItem('authToken');
        localStorage.removeItem("currentUserId");
        dispatch(setCurrentUser(""));
        setTimeout(() => {
            history.push("/")
        }, 500)
    }

    const [enterUser, setEnterUser] = useReducer(updateReducer, {...activeUser})

    const [view, setView] = useState("")

    return (
        <E.BodyContainer>
            <Header />
            <E.Div>
                <E.BioBox>
                    <E.ProfPic src={activeUser.profileImg} />
                    <h1>{activeUser.username}</h1>
                </E.BioBox>
                <E.SubBox>
                    <E.StatsBox>
                        <H.H1>Edit Account</H.H1>
                        <E.NavBar>
                            <E.NavButton onClick={() => setView("username")}>Username</E.NavButton>
                            <E.NavButton onClick={() => setView("password")}>Password</E.NavButton>
                            <E.NavButton onClick={() => setView("profilePic")}>Profile Picture</E.NavButton>
                            <E.NavButton onClick={() => setView("delete")}>Delete Account</E.NavButton>
                        </E.NavBar>
                    <L.Modal>
                        {view === "username" ?
                            <E.Form onSubmit={(e) => HandleUpdate(e, enterUser, "username")}>
                                <input
                                    type="text"
                                    name="username"
                                    value={enterUser.username}
                                    onChange={e => setEnterUser({ type: "USERNAME_CHANGED", payload: e.target.value })}
                                    placeholder="New Username"
                                />
                                <E.FormEnter type="submit" value="Update Username" />
                            </E.Form>
                        :
                        view === "password" ?
                                <E.Form onSubmit={(e) => HandleUpdate(e, enterUser, "password")}>
                                    <input
                                        type="password"
                                        name="password"
                                        value={enterUser.password}
                                        onChange={e => setEnterUser({ type: "PASSWORD_CHANGED", payload: e.target.value })}
                                        placeholder="New Password"
                                    />
                                    <E.FormEnter type="submit" value="Update Password" />
                                </E.Form>
                        :
                        view === "profilePic" ?
                            <E.Form onSubmit={(e) => HandleUpdate(e, enterUser, "profilePic")}>
                                    <h2>Select your new Profile Picture</h2>
                                    <h3>COMING SOON</h3>
                                    <E.FormEnter type="submit" value="Update Picture" />
                                </E.Form>
                        :
                        view === "delete" ?
                            <div>
                                <h2>Are you sure you want to delete your account?</h2>
                                <E.FormDelete onClick={(e) => HandleDeleteUser(e, activeUser)}>Delete Account</E.FormDelete>
                            </div>
                        :
                            <div></div>
                        }
                    </L.Modal>
                    </E.StatsBox>
                </E.SubBox>
            </E.Div>
        </E.BodyContainer>
    )
}

export default EditProfile;