import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import carsRedux from "./carsRedux/carsRedux";

const rootReducer = combineReducers({
    cars: carsRedux
})

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store