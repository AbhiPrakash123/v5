"use client"
import React, { useState, DragEvent } from 'react';

import { Box } from "@mui/material"

const LabInput = () => {
    const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.target.style.border = '1px solid red'
    };
    const handleDragLeave = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.target.style.border = 'none'
    }

    const handleDrop = (e: DragEvent<HTMLDivElement>) => {
        console.log(e.target)
        e.preventDefault();
        e.target.style.border = 'none'

        // if (draggedItem) {
        //     // Add the dragged item to the dropped items
        //     setDroppedItems((prevItems) => [...prevItems, draggedItem]);
        //     setDraggedItem(null);
        // }
    };

    return (
        <Box
            onDragOver={(e) => handleDragOver(e)}
            onDragLeave={(e) => handleDragLeave(e)}
            onDrop={(e) => handleDrop(e)}
            className=" tw-h-full tw-w-full"
        >
            inputs
        </Box>
    )
}
export default LabInput;