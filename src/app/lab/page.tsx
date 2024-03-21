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

export default function Livebench() {
    const dispatch = useAppDispatch()
    useEffect(()=>{
        fetch('/api/boards')
      .then((res) => res.json())
      .then((data:any) => {
        console.log(data)
        dispatch(setInput(data.data.inputs))
        dispatch(setOutput(data.data.outputs))
        dispatch(setTitle(data.data.title))
      })
    },[])
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