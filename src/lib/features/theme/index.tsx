import React, { ReactNode } from 'react';
import { createTheme, Theme } from '@mui/material';
import { ThemeProvider as TM } from "@mui/material/styles";
import CssBaseline from '@mui/material/CssBaseline';
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
            main: '#3b82f6',
        },
        secondary: {
            main: '#003A75',
        },
    },
});

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        background: {
            default: '#000', // Dark background color
            paper: "#131313"
        },
        primary: {
            main: '#3b82f6',
        },
        secondary: {
            main: '#003A75',
        },
    },
});


const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {

    const themeType = useAppSelector(getTheme)
    const theme: Theme = themeType === 'dark' ? darkTheme : lightTheme
    // console.log("create new theme")

    return <TM theme={theme}>
        <CssBaseline />
        {children}
    </TM>;
};

export default ThemeProvider;
