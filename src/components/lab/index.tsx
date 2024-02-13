import React from "react"
import { Box, Paper } from "@mui/material";
import FeatureBar from "../featurebar";
import { LabProps } from "./lab";
import LabInput from "../input";

const Lab: React.FC = (props: LabProps) => {
    const { builder } = props
    return (
        <Box className=" tw-h-full tw-w-full tw-flex tw-flex-col tw-flex-shrink-0 tw-p-0 tw-m-0 ">
            <FeatureBar builder={builder} />
            <Box className="tw-flex-grow tw-flex tw-flex-shrink-0 tw-w-full tw-border-0 tw-p-0">
                <Paper
                    square
                    className="tw-h-full tw-w-64 tw-border-t-0"
                    sx={{ backgroundColor: "background.default" }}
                >
                    <LabInput />
                </Paper>
                <Paper
                    square
                    className="tw-h-ful tw-flex-grow tw-border-t-0"
                    sx={{ backgroundColor: "background.default" }}
                >
                    outputs
                </Paper>
                <Paper
                    square
                    className="tw-h-full tw-w-56 tw-border-t-0"
                    sx={{ backgroundColor: "background.default" }}

                >
                    CoPilate
                </Paper>
            </Box>

        </Box>
    )
}

export default Lab;