import { combineReducers } from "redux"
import { connectRouter } from "connected-react-router"
import Home from "./Home/Home"

const createRootReducer = (history) => combineReducers({
    router      : connectRouter(history),
    home        : Home
})

export default createRootReducer