
// import combine reducers
import {combineReducers} from 'redux'

import userReducer  from './userReducer'
<<<<<<< HEAD
import transportReducer  from './transportReducer'
import commentReducer  from './commentReducer'


const rootReducer = combineReducers ({userReducer, transportReducer,commentReducer })
=======

const rootReducer = combineReducers ({userReducer})
>>>>>>> 0e2a531d39ae815637780e2befef972ed99cfec9

export default rootReducer