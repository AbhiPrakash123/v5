"use client"
import Header from "@/components/header"
import ThemeProvider from "@/lib/features/theme"
import CssBaseline from '@mui/material/CssBaseline';
import { Box } from "@mui/material"
import Sidebar from "@/components/sidebar";
import Lab from "@/components/lab";
import { useAppDispatch } from "@/store/hooks";

export default function Livebench() {
    
    return (
        <ThemeProvider>
            <CssBaseline />
            <Box className="tw-h-dvh tw-w-dvw tw-flex tw-flex-row tw-flex-shrink-0" >
                <Box >
                    <Sidebar />
                </Box>
                <Box className="tw-flex-grow tw-flex tw-flex-col">
                    <Box className="tw-h-[7%]">
                        <Header />
                    </Box>
                    <Box className="tw-h-[93%]">
                        <Lab />
                    </Box>
                </Box>

            </Box>
        </ThemeProvider>

    )
}