import inputs from "@/livebench/inputs"
import { Box, Paper } from "@mui/material"
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
            <Paper variant="outlined" className=" tw-p-2 tw-m-0 tw-border-t-0 tw-border-l-0 tw-border-r-0" square>
                Inputs
            </Paper>
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
                            <Box className=" tw-pointer-events-none">{item.element()}</Box>
                        </Paper>
                    )
                }
            </Box>
        </Box>
    )
}

export default ListComponents;