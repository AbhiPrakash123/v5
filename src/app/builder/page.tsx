"use client"
import Header from "@/components/header"
import ThemeProvider from "@/lib/features/theme"
import CssBaseline from '@mui/material/CssBaseline';
import { Box, Divider } from "@mui/material"
import Sidebar from "@/components/sidebar";
import Lab from "@/components/lab";
import BuilderSidebar from "@/components/builderSidebar";
import EditorSidebar from "@/components/editorSidebar";
import { PlatformHeader } from "@/components/header";
import { useAppDispatch } from "@/store/hooks";

export default function LabBuilder() {
    const dispatch = useAppDispatch()
    // useEffect(() => {
    //     fetch('/api/boards')
    //         .then((res) => res.json())
    //         .then((data: any) => {
    //             dispatch(setInput(data.data.inputs))
    //             dispatch(setOutput(data.data.outputs))
    //             dispatch(setTitle(data.data.title))
    //         })
    // }, [])
    return (
        <ThemeProvider>
            <CssBaseline />

            <Box className=" tw-h-screen tw-w-screen tw-flex tw-flex-col ">
                <Box className="tw-h-[4rem]">
                    {
                        // @ts-ignore
                        <PlatformHeader builder />
                    }

                </Box>

                <Box className=" tw-h-[calc(100%-4rem)]">
                    {
                        // @ts-ignore
                        <Lab builder />
                    }

                </Box>
                <BuilderSidebar />
                <EditorSidebar />
            </Box>
        </ThemeProvider>
    )
}