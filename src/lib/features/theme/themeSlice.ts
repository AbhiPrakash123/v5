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

        },
        enableLightTheme: (state) => {
            state.mode = 'light'

        },
        toggleTheme: (state) => {
            state.mode = state.mode === 'light' ? 'dark' : 'light';
        },
    }

})

export const { enableDarkTheme, enableLightTheme,toggleTheme } = themeSlice.actions
export const getTheme = (state: { theme: ThemeState }) => state.theme.mode
export default themeSlice.reducer