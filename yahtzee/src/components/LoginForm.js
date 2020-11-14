import React, { useReducer } from "react";
import { loginUser } from "../services/api_helper";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { setCurrentUser } from "../features/gameMetaDataSlice";

import * as L from "../styles/LandingPageStyles";


const LoginForm = () => {
    const dispatch = useDispatch();
    const history = useHistory();

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
        dispatch(setCurrentUser(currentUser));
        history.push("/") 
    }
    
    const [enterUser, setEnterUser] = useReducer(loginReducer, {
        username: "",
        password: "",
    })

    return(
        <L.Div>
            <L.Modal>
                <h1>Welcome back!</h1>
                <form onSubmit={(e) => HandleLogin(e, enterUser)}>
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
                    <input type="submit" value="Login" />
                </form>
            </L.Modal>
        </L.Div>
    )
}

export default LoginForm;