"use client"
import Header from "@/components/header"
import ThemeProvider from "@/lib/features/theme"
import CssBaseline from '@mui/material/CssBaseline';
import { Box } from "@mui/material"

/*
    const counter = useAppSelector((counterData))
    const dispatch = useAppDispatch()

                {counter}
            <button onClick={() => dispatch(increase())}>increase</button>
            <button onClick={() => dispatch(decrease())}>decrease</button>
*/
export default function Builder() {

    return (
        <ThemeProvider>
            <CssBaseline />
            <Box className="tw-h-dvh tw-w-dvw tw-flex tw-flex-col tw-flex-shrink-0" >
                <Box className="tw-h-[64px]">
                    <Header />
                </Box>
                <Box className="tw-flex-grow">
                    <h1>sdfsdf</h1>
                </Box>
                {/* <div className="row-span-11 col-span-3 border shadow-sm">
                <InputBuilder />
            </div>
            <div className="row-span-11 col-span-9">
                <OutputBuilder />
            </div> */}
            </Box>
        </ThemeProvider>

    )
}