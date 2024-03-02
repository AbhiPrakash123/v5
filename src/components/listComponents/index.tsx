import inputs from "@/livebench/inputs"
import outputs from "@/livebench/outputs";
import { Box, Paper,Divider } from "@mui/material"
import React, { useState, DragEvent } from 'react';
import { setDraggedInputElement } from "../input/inputBuilderSlice";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import "./style.css"

const ListComponents = () => {
    const dispatch = useAppDispatch()
    const handleInputDragStart = (e: DragEvent<HTMLLIElement>, item: any) => {
        dispatch(setDraggedInputElement(item.uname))
    };

    return (
        <Box>
            <Box className=" tw-flex tw-flex-col tw-gap-2 tw-p-3" >
                {
                    inputs.map((item, i) =>
                        <Paper
                            variant="outlined"
                            key={i}
                            className="tw-p-4 tw-cursor-grab"
                            draggable
                            onDragStart={(e) => handleInputDragStart(e, item)}
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
                            onDragStart={(e) => handleInputDragStart(e, item)}
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