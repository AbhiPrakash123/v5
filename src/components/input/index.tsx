"use client"
import React, { useState, DragEvent } from 'react';
import { getDraggedElement, addElement, deleteElement, getInputs } from './inputBuilderSlice';
import { useAppSelector, useAppDispatch } from '@/store/hooks';
import { Box } from "@mui/material"
import InputRow from './inputRow';

const LabInput = () => {
    const draggedElement = useAppSelector(getDraggedElement)
    const allInputs = useAppSelector(getInputs)
    const dispatch = useAppDispatch()

    const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.target.style.border = '1px solid red'
    };
    const handleDragLeave = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.target.style.border = 'none'
    }

    const handleDrop = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.target.style.border = 'none'
        dispatch(addElement(draggedElement))
    };
    console.log(allInputs)
    return (
        <Box
            onDragOver={(e) => handleDragOver(e)}
            onDragLeave={(e) => handleDragLeave(e)}
            onDrop={(e) => handleDrop(e)}
            className=" tw-h-full tw-w-full tw-overflow-y-auto tw-p-2"
        >
            {
                allInputs.map((item:any, _id:number) => {
                    return <InputRow key={_id} item={item} />
                })
            }
        </Box>
    )
}
export default LabInput;