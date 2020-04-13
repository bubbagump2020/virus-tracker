import { combineReducers } from 'redux'
import { mumpsAndFluReducer } from './mumpsAndFluReducer'
import { rabiesReducer } from './rabiesReducer'
import { measlesReducer } from './measlesReducer'
import { formReducer } from './formReducer'

const rootReducer = combineReducers({
    mumpsAndFluReducer,
    rabiesReducer,
    measlesReducer,
    formReducer
})

export default rootReducer;