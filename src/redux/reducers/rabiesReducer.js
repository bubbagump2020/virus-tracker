import { rabiesActions } from '../actionTypes/index'

const initialState = {
    data: []
}

export function rabiesReducer (state = initialState, action){
    switch(action.type){
        case rabiesActions.ALL_RABIES_DATA:
            return{
                ...state,
                data: action.payload
            }
        default:
            return state;
    }
}