import { combineReducers } from "redux";
import ordersReducer from "./ordersReducer";
import loginReducer from "./loginReducer";
import usersReducer from "./usersReducer";

const rootReducers = combineReducers({
    orders: ordersReducer,
    login: loginReducer,
    users: usersReducer
})

export default rootReducers;