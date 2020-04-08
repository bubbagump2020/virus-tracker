import { mumpsAndFluActions } from '../actionTypes/index'

const initialState = {
    data: [],
    name1: "Mumps",
    name2: "Type A Influenza"
}

export function mumpsAndFluReducer (state = initialState, action){
    switch(action.type){
        case mumpsAndFluActions.ALL_MAF_DATA:
            return{
                ...state,
                data: action.payload
            }
        default:
            return state
    }
}
