// import axios from 'axios';


const initialState = {
   username: '',
   id: '',
   profile_pic: ''
}

const LOGIN_USER = 'LOGIN_USER'

export function builder(id, username, profilePic) {
    return {
        type: LOGIN_USER,
        payload: {id, username, profilePic}
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