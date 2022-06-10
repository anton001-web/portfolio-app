import {burgerReducer} from "./burgerReducer";
import {themeReducer} from "./themeReducer";
import {combineReducers} from "redux";


export const rootReducer = combineReducers({
    burger: burgerReducer,
    theme: themeReducer
})