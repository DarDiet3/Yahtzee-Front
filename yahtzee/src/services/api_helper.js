import axios from "axios";

const api = axios.create({
    // baseURL:  "https://settlers-of-deere.herokuapp.com",
    baseURL: "http://localhost:3001"
})
// **** DONT FORGET TO CHANGE CHAT URL ******

// ===== AUTH ======

export const signupUser = async (signupData) => {
    const resp = await api.post("/auth/signup", signupData);
    console.log(resp.data)
    localStorage.setItem('authToken', resp.data.token);
    localStorage.setItem("currentUserId", JSON.stringify(resp.data.user));
    api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`;
    return resp.data.user;
}

export const loginUser = async (loginData) => {
    const resp = await api.post("/auth/login", loginData);
    localStorage.setItem("authToken", resp.data.token);
    localStorage.setItem("currentUserId", JSON.stringify(resp.data.user));
    api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`;
    return resp.data.user;
}

export const verifyUser = async () => {
    const token = localStorage.getItem("authToken");

    if(token) {
        api.defaults.headers.common.authorization = `Bearer ${token}`;
        const resp = await api.get("/auth/verify");
        return resp.data;
    }
    return false;
}

//======= GAME DATA ========
export const addData = async (gameData) => {
    const resp = await api.post("/data/addData", gameData)
    const resp2 = await api.post("/leaderboard/new", gameData)
    console.log(resp.data);
    console.log(resp2.data);
}

//======== SCORE BOARD =======
export const getScore = async(number) => {
    const resp = await api.get(`/leaderboard/${number}`)
    console.log(resp.data);
    return resp.data;
}

//===== USER DATA ======
export const getUserData = async(userId) => {
    const resp = await api.get(`/user/${userId}`);
    return resp.data
}

export const editProfile = async(userData) => {
    const resp = await api.put("/user/edit", userData);
    return resp.data
}