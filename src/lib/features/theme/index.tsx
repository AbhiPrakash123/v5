import React, { ReactNode } from 'react';
import { createTheme, Theme } from '@mui/material';
import { ThemeProvider as TM } from "@mui/material/styles";
import { getTheme } from '@/lib/features/theme/themeSlice'
import { useAppSelector } from '@/store/hooks'

interface ThemeProviderProps {
    children: ReactNode;
}

const lightTheme = createTheme({
    palette: {
        mode: 'light',
        background: {
            default: '#ececec',
            paper: "#FFF"
        },
        primary: {
            main: '#2f4ee4',
        },
    },
});

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        background: {
            default: '#2E2F32', // Dark background color
            paper: "#0003"
        },
    },
});


const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {

    const themeType = useAppSelector(getTheme)
    const theme: Theme = themeType === 'dark' ? darkTheme : lightTheme
    // console.log("create new theme")

    return <TM theme={theme}>{children}</TM>;
};

export default ThemeProvider;
