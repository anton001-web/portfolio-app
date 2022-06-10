import {THEME_TOGGLE} from "../types";
const initialState = {
    theme: 'light'
}

export const themeReducer = (state = initialState, action) => {
    switch (action.type) {
        case THEME_TOGGLE:
            return {...state, theme: state.theme === 'light' ? 'dark' : 'light'}
        default:
            return state
    }
}