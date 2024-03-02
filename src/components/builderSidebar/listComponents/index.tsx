import inputs from "@/livebench/inputs"
import outputs from "@/livebench/outputs";
import { Box, Paper,Divider } from "@mui/material"
import React, { useState, DragEvent } from 'react';
import { setDraggedInputElement } from "../../input/inputBuilderSlice";
import { setDraggedOutputElement } from "@/components/output/outputBuilderSlice";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import "./style.css"

const ListComponents = () => {
    const dispatch = useAppDispatch()
    const handleInputDragStart = (item: any) => {
        dispatch(setDraggedInputElement(item.uname))
    };
    const handleInputDragEnd = () => {
        dispatch(setDraggedInputElement(null))
    }

    return (
        <Box className=" tw-h-full tw-overflow-y-scroll">
            <Box className=" tw-flex tw-flex-col tw-gap-2 tw-p-3" >
                {
                    inputs.map((item, i) =>
                        <Paper
                            variant="outlined"
                            key={i}
                            className="tw-p-4 tw-cursor-grab"
                            draggable
                            onDragStart={() => handleInputDragStart(item)}
                            onDragEnd={() => handleInputDragEnd()}
                        >
                            <span>{item.type}</span>
                            <Box className=" tw-pointer-events-none">{item.element()}</Box>
                        </Paper>
                    )
                }
            </Box>
            <Divider />
            <Box className=" tw-flex tw-flex-col tw-gap-2 tw-p-3" >
                {
                    outputs.map((item, i) =>
                        <Paper
                            variant="outlined"
                            key={i}
                            className="tw-p-4 tw-cursor-grab"
                            draggable
                            unselectable="on"
                            // data-grid={{ i: 0, x: 0, y: 0, w: 10, h: 2 }}
                            // onDragStart={e => e.dataTransfer.setData("text/plain", "")}
                            // onDragStart={(e) => handleInputDragStart(e, item)}
                        >
                            <span>{item.type}</span>
                            <Box className=" tw-pointer-events-none">{item.element()}</Box>
                        </Paper>
                    )
                }
            </Box>
        </Box>
    )
}

export default ListComponents;