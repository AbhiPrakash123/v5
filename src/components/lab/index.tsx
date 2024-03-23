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
                className=" tw-h-full tw-w-full tw-flex tw-flex-col tw-flex-shrink-0 tw-p-0 tw-m-0"
            >
                <Box className=" tw-h-[52px]">
                    <Header />
                </Box>
                <Box className=" tw-flex-grow tw-flex tw-flex-shrink-0 tw-w-full tw-border-0 tw-p-0">
                    <Box
                        className="tw-h-full tw-w-64"
                    >
                        <LabInput builder={builder} />
                    </Box>
                    <Divider
                        className="tw-h-full"
                        orientation="vertical"
                    />
                    <Box
                        className="tw-h-ful tw-flex-grow"
                    >
                        <OutputBuilder />
                    </Box>
                    <Divider
                        className="tw-h-full"
                        orientation="vertical"
                    />
                    {/* <Box
                        className="tw-h-full tw-w-64"
                    >
                        Co-Pilot
                    </Box> */}
                </Box>
            </Paper >
        </Box >
    )
}

export default Lab;