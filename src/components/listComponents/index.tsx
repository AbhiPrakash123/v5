import inputs from "@/livebench"
import { Box, Paper } from "@mui/material"
import React, { useState, DragEvent } from 'react';
import "./style.css"
const ListComponents = () => {

    console.log(inputs)
    const handleDragStart = (e: DragEvent<HTMLLIElement>, item: any) => {
        // e.dataTransfer.effectAllowed = "copyMove";
        // e.target.style.cursor = "grapping";
        console.log(e.target)
    };

    return (
        <Box>
            <Paper variant="outlined" className=" tw-p-2 tw-m-0 tw-border-t-0 tw-border-l-0 tw-border-r-0" square>
                Inputs
            </Paper>
            <Box className=" tw-flex tw-gap-2 tw-p-3" >
                {
                    inputs.map((item, i) =>
                        <Paper
                            variant="outlined"
                            key={i}
                            className="tw-p-4 tw-cursor-grab"
                            draggable
                            onDragStart={(e) => handleDragStart(e, item)}
                        >
                            {item.name}
                        </Paper>
                    )
                }
            </Box>

        </Box>
    )
}

export default ListComponents;