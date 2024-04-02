import React from "react"
import { Box, Paper, Divider } from "@mui/material";
// import FeatureBar from "../featurebar";
import { LabProps } from "./lab";
import LabInput from "../input";
import OutputBuilder from "../output";
import Header from "../header";

const Lab: React.FC = (props: LabProps) => {
    const { builder } = props
    return (
        <Box

            className=" tw-h-full tw-w-full tw-p-1 tw-m-0 "
        >
            <Paper
                variant="outlined"
                square
                sx={{ backgroundColor: "transparent", borderSize: 4 }}
                className=" tw-h-full tw-w-full tw-p-0 tw-m-0"
            >
                <Box className=" tw-h-[3.5rem]">
                    <Header />
                </Box>
                <Box className=" tw-h-[calc(100%-3.5rem)] tw-flex  tw-w-full tw-border-0 tw-p-0 ">
                    <Box
                        className="tw-h-full tw-w-[300px] tw-flex-shrink-0"
                    >
                        <LabInput builder={builder} />
                    </Box>
                    <Box
                        className="tw-h-full tw-flex-grow"
                    >
                        <OutputBuilder />
                    </Box>

                </Box>
            </Paper >
        </Box >
    )
}

export default Lab;