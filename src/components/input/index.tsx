"use client"
import React, { useState, DragEvent, useRef } from 'react';
import { getDraggedElement, addElement, deleteElement, getInputs } from './inputBuilderSlice';
import { useAppSelector, useAppDispatch } from '@/store/hooks';
import { Box, Paper } from "@mui/material"
import InputRow from './inputRow';
import { InputPropsType } from './input';

const LabInput = (props: InputPropsType) => {
    const { builder } = props
    const inputBoxRef = useRef(null)
    const draggedElement = useAppSelector(getDraggedElement)
    const allInputs = useAppSelector(getInputs)
    console.log(allInputs)
    const dispatch = useAppDispatch()

    const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        if (draggedElement === null) return

        // @ts-ignore
        // inputBoxRef.current.style.transform = 'scale(1.03)'
        inputBoxRef.current.style["boxShadow"] = 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;'
    };
    const handleDragLeave = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        if (draggedElement === null) return

        // @ts-ignore
        inputBoxRef.current.style.transform = 'scale(1)'
    }

    const handleDrop = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        if (draggedElement === null) return

        // @ts-ignore
        inputBoxRef.current.style.transform = 'scale(1)'

        dispatch(addElement(draggedElement))
    };
    return (
        <Paper
        variant='outlined'
        square
            ref={inputBoxRef}
            onDragOver={(e) => handleDragOver(e)}
            onDragLeave={(e) => handleDragLeave(e)}
            onDrop={(e) => handleDrop(e)}
            className=" tw-border-0 tw-h-full tw-w-full tw-overflow-y-auto tw-relative tw-flex tw-flex-col tw-gap-2"
        >
            {
                allInputs.map((item: any, _id: number) => {
                    return <InputRow key={_id} item={item} builder={builder} />
                })
            }

        </Paper>
    )
}
export default LabInput;