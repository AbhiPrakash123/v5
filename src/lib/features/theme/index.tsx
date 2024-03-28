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
            default: "rgba(59, 130, 246, 0.03)",
            paper:  '#FFF' //"#ececec"
        },
        primary: {
            main: '#1C1F94',
        },
        secondary: {
            main: '#1D1059',
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
            // main: '#1C1F94',
        },
        secondary: {
            main: '#003A75',
        },
    },
});


const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {

    const themeType = useAppSelector(getTheme)
    const theme: Theme = themeType === 'dark' ? darkTheme : lightTheme

    return <TM theme={theme}>
        <CssBaseline />
        {children}
    </TM>;
};

export default ThemeProvider;
