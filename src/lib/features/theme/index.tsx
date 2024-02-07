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
            default: '#F0F2F5', // Light background color
        },
    },
});

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        background: {
            default: '#212121', // Dark background color
        },
    },
});


const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {

    const themeType = useAppSelector(getTheme)
    const theme: Theme = themeType === 'dark'? darkTheme: lightTheme
    // console.log("create new theme")

    return <TM theme={theme}>{children}</TM>;
};

export default ThemeProvider;
