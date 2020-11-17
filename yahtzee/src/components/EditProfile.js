import React, { useReducer } from "react";
import { loginUser } from "../services/api_helper";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { setCurrentUser } from "../features/gameMetaDataSlice";
import { currentUser } from "../features/gameMetaDataSlice";


import * as L from "../styles/LandingPageStyles";
import * as P from "../styles/ProfileStyles";
import Header from "./Header"

const EditProfile = () => {
    const activeUser = useSelector(currentUser);
    const dispatch = useDispatch();
    const history = useHistory();

    function loginReducer(state, action) {
        switch (action.type) {
            case "USERNAME_CHANGED":
                return { ...state, username: action.payload };
            case "PASSWORD_CHANGED":
                return { ...state, password: action.payload };
            default:
                return "ERROR"
        }
    }

    const HandleLogin = async (e, loginData) => {
        e.preventDefault();
        const currentUser = await loginUser(loginData);
        dispatch(setCurrentUser(currentUser));
        history.push("/")
    }

    const [enterUser, setEnterUser] = useReducer(loginReducer, {
        username: "",
        password: "",
    })

    const[view, setView] = useState("")

    return (
        <P.BodyContainer>
            <Header />
            <P.Div>
                <P.BioBox>
                    <P.ProfPic src={activeUser.profileImg} />
                    <h1>{activeUser.username}</h1>
                </P.BioBox>
                <P.SubBox>
                    <L.Modal>
                        <div>
                            <h1>Edit Account</h1>
                            <nav>
                                <div onClick={() => setView("username")}>Username</div>
                                <div onClick={() => setView("password")}>Password</div>
                                <div onClick={() => setView("profilePic")}>Profile Picture</div>
                                <div onClick={() => setView("delete")}>Delete Account</div>
                            </nav>
                        </div>
                        
                        <form onSubmit={(e) => HandleLogin(e, enterUser)}>
                            <input
                                type="text"
                                name="username"
                                value={enterUser.username}
                                onChange={e => setEnterUser({ type: "USERNAME_CHANGED", payload: e.target.value })}
                                placeholder="Username"
                            />
                            <input
                                type="password"
                                name="passowrd"
                                value={enterUser.password}
                                onChange={e => setEnterUser({ type: "PASSWORD_CHANGED", payload: e.target.value })}
                                placeholder="Password"
                            />
                            <input type="submit" value="Login" />
                        </form>
                    </L.Modal>
                </P.SubBox>
            </P.Div>
        </P.BodyContainer>
    )
}

export default EditProfile;