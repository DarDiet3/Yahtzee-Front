import React, { useReducer, useState } from "react";
import { loginUser } from "../services/api_helper";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { setCurrentUser } from "../features/gameMetaDataSlice";
import { currentUser } from "../features/gameMetaDataSlice";
import { deleteUser, editProfile } from "../services/api_helper";


import * as L from "../styles/LandingPageStyles";
import * as P from "../styles/ProfileStyles";
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
        history.push("/profile")      
        //UPDATE SWITCH STAMENT FOR THE TYPE
    }

    const HandleDeleteUser = async (e, user) => {
        await deleteUser(user);
        // localStorage.removeItem('authToken');
        // localStorage.removeItem("currentUserId");
        // dispatch(setCurrentUser(""));
        // setTimeout(() => {
        //     history.push("/")
        // }, 500)

        // history.push("/")
    }

    const [enterUser, setEnterUser] = useReducer(updateReducer, {...activeUser})

    const [view, setView] = useState("")

    return (
        <P.BodyContainer>
            <Header />
            <P.Div>
                <P.BioBox>
                    <P.ProfPic src={activeUser.profileImg} />
                    <h1>{activeUser.username}</h1>
                </P.BioBox>
                <P.SubBox>

                    <div>
                        <h1>Edit Account</h1>
                        <nav>
                            <button onClick={() => setView("username")}>Username</button>
                            <button onClick={() => setView("password")}>Password</button>
                            <button onClick={() => setView("profilePic")}>Profile Picture</button>
                            <button onClick={() => setView("delete")}>Delete Account</button>
                        </nav>
                    </div>
                    <L.Modal>
                        {view === "username" ?
                            <form onSubmit={(e) => HandleUpdate(e, enterUser, "username")}>
                                <input
                                    type="text"
                                    name="username"
                                    value={enterUser.username}
                                    onChange={e => setEnterUser({ type: "USERNAME_CHANGED", payload: e.target.value })}
                                    placeholder="New Username"
                                />
                                <input type="submit" value="Update Username" />
                            </form>
                        :
                        view === "password" ?
                                <form onSubmit={(e) => HandleUpdate(e, enterUser, "password")}>
                                    <input
                                        type="password"
                                        name="password"
                                        value={enterUser.password}
                                        onChange={e => setEnterUser({ type: "PASSWORD_CHANGED", payload: e.target.value })}
                                        placeholder="New Password"
                                    />
                                    <input type="submit" value="Update Password" />
                                </form>
                        :
                        view === "profilePic" ?
                            <form onSubmit={(e) => HandleUpdate(e, enterUser, "profilePic")}>
                                    <h2>Select your new Profile Picture</h2>
                                    <h3>COMING SOON....DON'T FORGET TO CHANGE</h3>
                                    <input type="submit" value="Update Picture" />
                                </form>
                        :
                        view === "delete" ?
                            <div>
                                <h2>Are you sure you want to delete your account?</h2>
                                <button onClick={(e) => HandleDeleteUser(e, activeUser)}>Delete Account</button>
                            </div>
                        :
                            <div></div>
                        }
                    </L.Modal>
                </P.SubBox>
            </P.Div>
        </P.BodyContainer>
    )
}

export default EditProfile;