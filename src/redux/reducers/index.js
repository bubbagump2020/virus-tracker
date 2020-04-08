import { combineReducers } from 'redux'
import { mumpsAndFluReducer } from './mumpsAndFluReducer'
import { rabiesReducer } from './rabiesReducer'
import { measlesReducer } from './measlesReducer'

const rootReducer = combineReducers({
    mumpsAndFluReducer,
    rabiesReducer,
    measlesReducer
})

export default rootReducer;