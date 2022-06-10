import {THEME_TOGGLE, TOGGLE_BURGER} from "./types";

export const toggleBurger = () => {
    return {
        type: TOGGLE_BURGER
    }
}

export const toggleTheme = () => {
    return {
        type: THEME_TOGGLE
    }
}