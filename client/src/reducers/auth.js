import {AUTH_USER, AUTH_ERROR} from '../actions/types'
const initialSate = {
    authenticated: '',
    errorMessage: ''
}

export default function(state = initialSate, action){

    switch (action.type) {
        case AUTH_USER:
            return {
                ...state,
                authenticated: action.payload
            }
        case AUTH_ERROR:
            return{
                ...state,
                authenticated: '',
                errorMessage: action.payload
            }
        default:
            return state;
    }
}