import React, { useReducer, useState } from "react";
import { loginUser } from "../services/api_helper";
import { useDispatch } from "react-redux";
import { useHistory, Link } from "react-router-dom";

import { setCurrentUser } from "../features/gameMetaDataSlice";

import * as L from "../styles/LandingPageStyles";
import * as H from "../styles/GeneralStyles";


const LoginForm = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const [error, setError] = useState(false);
    function loginReducer(state, action) {
        switch (action.type) {
            case "USERNAME_CHANGED":
                return {...state, username: action.payload};
            case "PASSWORD_CHANGED":
                return {...state, password: action.payload};
            default:
                return "ERROR"
        }
    }
    
    const HandleLogin = async (e, loginData) => {
        e.preventDefault();
        const currentUser = await loginUser(loginData);
        if(currentUser === "ERROR: Incorrect Username/Password") {
            setError(true)
        } else {
            dispatch(setCurrentUser(currentUser));
            history.push("/") 
        }
        
    }
    
    const [enterUser, setEnterUser] = useReducer(loginReducer, {
        username: "",
        password: "",
    })

    return(
        <L.Div>
            <L.Modal>
                <H.H1>Welcome back!</H.H1>
                <L.Form onSubmit={(e) => HandleLogin(e, enterUser)}>
                    <input
                        type="text"
                        name="username"
                        value={enterUser.username}
                        onChange={e => setEnterUser({type: "USERNAME_CHANGED", payload: e.target.value})}
                        placeholder="Username"
                    />
                    <input 
                        type="password"
                        name="passowrd"
                        value={enterUser.password}
                        onChange={e => setEnterUser({type: "PASSWORD_CHANGED", payload: e.target.value})}
                        placeholder="Password"
                    />
                    {error ? <p className={"error"}>Incorrect Username/Password</p> : <p></p> }
                    <L.SButton type="submit">Login</L.SButton>
                    <p>Not playing yet? <Link to="/signup">Sign Up</Link></p>
                </L.Form>
            </L.Modal>
        </L.Div>
    )
}

export default LoginForm;