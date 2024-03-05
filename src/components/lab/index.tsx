import React from "react"
import { Box, Paper, Divider } from "@mui/material";
import FeatureBar from "../featurebar";
import { LabProps } from "./lab";
import LabInput from "../input";
import LabTable from "@/livebench/outputs/table";
import OutputBuilder from "../output";
const Lab: React.FC = (props: LabProps) => {
    const { builder } = props
    return (
        <Box className=" tw-h-full tw-w-full tw-flex tw-flex-col tw-p-0 tw-m-0 ">
            {/* <Box className="tw-h-[5%]">
                <FeatureBar builder={builder} />
            </Box> */}
            <Box className="tw-h-[100%] tw-flex tw-flex-shrink-0 tw-w-full tw-border-0 tw-p-0">
                <Box
                    className="tw-h-full tw-w-64 tw-border-t-0"
                >
                    <LabInput />
                </Box>
                <Divider
                    className="tw-h-full"
                    orientation="vertical"
                />
                <Box
                    className="tw-h-ful tw-flex-grow tw-border-t-0"
                >
                    <OutputBuilder />
                </Box>
                <Divider
                    className="tw-h-full"
                    orientation="vertical"
                />
                <Box
                    className="tw-h-full tw-w-56 tw-border-t-0"

                >
                    Co-Pilot
                </Box>
            </Box>

        </Box>
    )
}

export default Lab;