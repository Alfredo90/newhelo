// import axios from 'axios';


const initialState = {
   username: '',
   id: 0,
   profile_pic: ''
}

const LOGIN_USER = 'LOGIN_USER'
const LOGOUT_USER = "LOGIN_USER";

export function builder(id, username, profilePic) {
    console.log(id, username, profilePic)
    return {
        type: LOGIN_USER,
        payload: {id, username, profilePic}
    }
}

export function logoutUser(){
    return {
        type: LOGOUT_USER,
        payload: initialState
    }
}





export default function reducer(state = initialState, action){
    switch(action.type){
        case LOGIN_USER:
            return {...state, id: action.payload.id , username: action.payload.username, profile_pic: action.payload.profilePic}
        default:
            return state
    }
}    