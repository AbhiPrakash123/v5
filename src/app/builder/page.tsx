"use client"
import Header from "@/components/header"
import ThemeProvider from "@/lib/features/theme"
import CssBaseline from '@mui/material/CssBaseline';
import { Box } from "@mui/material"
import Sidebar from "@/components/sidebar";
import Lab from "@/components/lab";
import BuilderSidebar from "@/components/builderSidebar";

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
                        {
                            // @ts-ignore 
                            <Header builder />
                        }
                    </Box>
                    <Box className="tw-flex-grow">
                        {
                            // @ts-ignore 
                            <Lab builder />
                        }
                    </Box>
                </Box>
                <Box >
                    <BuilderSidebar />
                </Box>

            </Box>
        </ThemeProvider>

    )
}