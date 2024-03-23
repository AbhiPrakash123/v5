"use client"
import Header from "@/components/header"
import ThemeProvider from "@/lib/features/theme"
import CssBaseline from '@mui/material/CssBaseline';
import { Box, Divider } from "@mui/material"
import Sidebar from "@/components/sidebar";
import Lab from "@/components/lab";
import BuilderSidebar from "@/components/builderSidebar";
import EditorSidebar from "@/components/editorSidebar"; 
import {PlatformHeader} from "@/components/header";
// export default function LabBuilder() {
//     return (
//         <ThemeProvider>
//             <CssBaseline />
//             <Box className="tw-h-dvh tw-w-dvw tw-flex tw-flex-row tw-flex-shrink-0" >
//                 <Box className=" tw-h-full tw-flex">
//                     <Sidebar />
//                     <Divider
//                         className="tw-h-full"
//                         orientation="vertical"
//                     />
//                 </Box>


//                 <Box className="tw-flex-grow tw-flex tw-flex-col">
//                     <Box className="tw-h-[7%]">
//                         {
//                             // @ts-ignore 
//                             <Header builder />
//                         }
//                     </Box>
//                     <Box className="tw-h-[93%]">
//                         {
//                             // @ts-ignore 
//                             <Lab builder />
//                         }
//                     </Box>
//                 </Box>
//                 <BuilderSidebar />
//                 <EditorSidebar />
//             </Box>

//         </ThemeProvider>

//     )
// }
export default function LabBuilder() {
    return (
        <ThemeProvider>
            <CssBaseline />
            <Box className="tw-h-dvh tw-w-dvw tw-flex-grow tw-flex tw-flex-col tw-flex-shrink-0">
                <Box className="tw-h-[64px]">
                    <PlatformHeader builder/>
                </Box>

                <Box className="tw-flex-grow">
                    <Lab builder/>
                </Box>
                <BuilderSidebar />
                <EditorSidebar />
            </Box>
        </ThemeProvider>
    )
}