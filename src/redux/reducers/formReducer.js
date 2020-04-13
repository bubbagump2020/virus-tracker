import { formActions } from '../actionTypes/index'

const initialState = {
    state: null,
    week: null,
}

export function formReducer (state = initialState, action){
    switch(action.type){
        case formActions.stateSelect:
            return{
                ...state,
                state: action.payload
            }
        default:
            return state
    }
}