import React from "react"
import { Box, Paper, Divider } from "@mui/material";
// import FeatureBar from "../featurebar";
import { LabProps } from "./lab";
import LabInput from "../input";
import OutputBuilder from "../output";
const Lab: React.FC = (props: LabProps) => {
    const { builder } = props
    return (
        <Box className=" tw-h-full tw-w-full tw-flex tw-flex-col tw-p-0 tw-m-0 ">
            {
            /* 
            <Box className="tw-h-[5%]">
                <FeatureBar builder={builder} />
            </Box> 
            */
            }
            <Box className="tw-h-[100%] tw-flex tw-flex-shrink-0 tw-w-full tw-border-0 tw-p-0">
                <Box
                    className="tw-h-full tw-w-64"
                >
                    <LabInput builder={builder}/>
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
                <Box
                    className="tw-h-full tw-w-64"
                >
                    Co-Pilot
                </Box>
            </Box>
        </Box>
    )
}

export default Lab;