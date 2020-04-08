import { measlesActions } from '../actionTypes/index'

const initialState = {
    data: []
}

export function measlesReducer (state = initialState, action){
    switch(action.type){
        case measlesActions.ALL_MEASLES_DATA:
            return{
                ...state,
                data: action.payload
            }
        default:
            return state
    }
}