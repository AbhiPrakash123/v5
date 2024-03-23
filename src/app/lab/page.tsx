"use client"
import Header from "@/components/header"
import ThemeProvider from "@/lib/features/theme"
import CssBaseline from '@mui/material/CssBaseline';
import { Box } from "@mui/material"
import Sidebar from "@/components/sidebar";
import Lab from "@/components/lab";
import { useAppDispatch } from "@/store/hooks";
import { setInput } from "@/components/input/inputBuilderSlice";
import { setOutput } from "@/components/output/outputBuilderSlice";
import { setTitle } from "@/components/header/headerSlice";
import { useEffect } from "react";
import { PlatformHeader } from "@/components/header";

export default function Livebench() {
    const dispatch = useAppDispatch()
    useEffect(() => {
        fetch('/api/boards')
            .then((res) => res.json())
            .then((data: any) => {
                console.log(data)
                dispatch(setInput(data.data.inputs))
                dispatch(setOutput(data.data.outputs))
                dispatch(setTitle(data.data.title))
            })
    }, [])
    return (
        <ThemeProvider>
            <CssBaseline />
            <Box className="tw-h-dvh tw-w-dvw tw-flex-grow tw-flex tw-flex-col tw-flex-shrink-0">
                <Box className="tw-h-[64px]">
                    <PlatformHeader />
                </Box>

                <Box className="tw-flex-grow">
                    <Lab />
                </Box>
            </Box>
        </ThemeProvider>

    )
}