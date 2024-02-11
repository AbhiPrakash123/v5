"use client"
import Header from "@/components/header"
import ThemeProvider from "@/lib/features/theme"
import CssBaseline from '@mui/material/CssBaseline';
import { Box } from "@mui/material"
import Sidebar from "@/components/sidebar";
import Lab from "@/components/lab";

export default function LabBuilder() {
    return (
        <ThemeProvider>
            <CssBaseline />
            <Box className="tw-h-dvh tw-w-dvw tw-flex tw-flex-row tw-flex-shrink-0" >
                <Box >
                    <Sidebar />
                </Box>
                <Box className="tw-flex-grow tw-flex tw-flex-col tw-flex-shrink-0">
                    <Box className="tw-h-[64px]">
                        <Header builder/>
                    </Box>
                    <Box className="tw-flex-grow">
                        <Lab builder/>
                    </Box>
                </Box>

            </Box>
        </ThemeProvider>

    )
}