import React, { useReducer } from "react";
import { useDispatch} from "react-redux";
import { useHistory, Link } from "react-router-dom";


import { signupUser } from "../services/api_helper";
import { setCurrentUser } from "../features/gameMetaDataSlice";

import * as L from "../styles/LandingPageStyles";
import * as H from "../styles/GeneralStyles";

const SignupForm = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    function loginReducer(state, action) {
        switch (action.type) {
            case "NAME_CHANGED":
                return {...state, name: action.payload};
            case "EMAIL_CHANGED":
                return {...state, email: action.payload};
            case "USERNAME_CHANGED":
                return {...state, username: action.payload};
            case "PASSWORD_CHANGED":
                return {...state, password: action.payload};
            default:
                return "ERROR"
        }
    }
    
    
    const [enterUser, setEnterUser] = useReducer(loginReducer, {
        name: "",
        email: "",
        username: "",
        password: "",
    })


    const HandleSignup = async(e, signupData) => {
        e.preventDefault();
        const currentUser = await signupUser(signupData);
        dispatch(setCurrentUser(currentUser));
        history.push("/") //TODO: Redirect to profile
    }
    


    return(
        <L.Div>
            <L.Modal>
                <H.H1>Welcome to the team!</H.H1>
                <L.Form onSubmit={(e) => HandleSignup(e, enterUser)}>
                    <input
                        type="text"
                        name="name"
                        value={enterUser.name}
                        onChange={e => setEnterUser({type: "NAME_CHANGED", payload: e.target.value})}
                        placeholder="Name"
                    />
                    <input
                        type="text"
                        name="email"
                        value={enterUser.email}
                        onChange={e => setEnterUser({type: "EMAIL_CHANGED", payload: e.target.value})}
                        placeholder="Email"
                    />
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
                    <L.SButton type="submit">Sign Up</L.SButton>
                </L.Form>
                <p>Already playing? <Link to="/login">Log In</Link></p>
            </L.Modal>
        </L.Div>
        
    )
}

export default SignupForm;