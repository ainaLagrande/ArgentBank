import {createSlice} from "@reduxjs/tooklit"

const initialState = {
    token: localStorage.getitem("token"),
    name: "",
    email: "",
    _id: "",
    registerStatus: "",
    registerError: "",
    loginStatus: "",
    loginError: "",
    userLoaded: false,
}
const authSlice = createSlice({
    name: "auth",
    initialState: 

})