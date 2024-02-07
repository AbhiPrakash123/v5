import { createSlice } from "@reduxjs/toolkit";

export interface ThemeState {
    mode: 'light' | 'dark';
}

const initialState: ThemeState = {
    mode: 'light',
};

export const themeSlice = createSlice({
    name: "theme",
    initialState: {
        mode: 'light',
    } as ThemeState,
    reducers: {
        enableDarkTheme: (state) => {
            state.mode = 'dark'
            // document.body.classList.add("dark");
            console.log(state.mode)

        },
        enableLightTheme: (state) => {
            state.mode = 'light'
            // document.body.classList.remove("dark");
            console.log(state.mode)

        },
        toggleTheme: (state) => {
            state.mode = state.mode === 'light' ? 'dark' : 'light';
        },
    }

})

export const { enableDarkTheme, enableLightTheme } = themeSlice.actions
export const getTheme = (state: { theme: ThemeState }) => state.theme.mode
export default themeSlice.reducer