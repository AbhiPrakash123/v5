"use client"
import React, { useState, DragEvent, useRef } from 'react';
import { getDraggedElement, addElement, deleteElement, setInput } from './inputBuilderSlice';
import { useAppSelector, useAppDispatch } from '@/store/hooks';
import { Box, Paper, Divider, Button, Typography } from "@mui/material"
import InputRow from './inputRow';
import { InputPropsType } from './input';
import { getInputs } from '../lab/labSlice';
import { addInput, getAllElements } from '../lab/labSlice';
import LabContainer from '@/livebench/inputs/container';
const DropHere = ({ ref }: any) => {
    const dropeHereRef = useRef(null)
    const draggedElement = useAppSelector(getDraggedElement)
    const dispatch = useAppDispatch()

    const handleDragOver = (e: any) => {
        e.preventDefault();

        if (draggedElement === null) return

        // @ts-ignore
        dropeHereRef.current.style.transform = 'scale(1.2)'
    };

    const handleDragLeave = (e: any) => {
        e.preventDefault();

        if (draggedElement === null) return

        // @ts-ignore
        dropeHereRef.current.style.transform = 'scale(1)'
    }

    const handleDrop = (e: any) => {
        e.preventDefault();

        if (draggedElement === null) return
        console.log(draggedElement)

        // @ts-ignore
        dropeHereRef.current.style.transform = 'scale(1)'
        dispatch(addInput(draggedElement))
    };


    return (
        <Box
            component="section"
            sx={{ p: 2, border: '1px dashed grey' }}
            onDragOver={(e) => handleDragOver(e)}
            onDragLeave={(e) => handleDragLeave(e)}
            onDrop={(e) => handleDrop(e)}
            ref={dropeHereRef}
            className=" tw-flex tw-items-center tw-justify-center tw-h-[64px] tw-m-2 tw-rounded-md tw-bg-blue-300"
        >
            <Typography> Drop Input </Typography>
        </Box>
    )
}
const InputLists = (props: any) => {

    const elements = useAppSelector(getAllElements)
    const { builder, callback, items } = props
    const [draggedPos, setDraggedPos] = useState(-1)
    const [dragedElement, setDragedElement] = useState(-1)

    console.log("=================================")
    console.log(items)
    console.log("=================================")

    const dragStart = (e:any, index:any) => {

        e.stopPropagation()
        setDragedElement(index)

    }

    const dragEnter = (e:any, index:any) => {
        e.stopPropagation()

        if (dragedElement === -1) return
        setDraggedPos(index)
    }

    const dragEnd = (e:any, index:any) => {

        e.stopPropagation()
        const arr = [...items]
        const end = arr[index]

        arr.splice(index, 1)
        arr.splice(draggedPos, 0, end)
        callback ? callback(arr) : ""

        setDraggedPos(-1)
        setDragedElement(-1)
    }

    return (
        <>
            {
                items.map((item: any, _id: number) => {
                    console.table(item)
                    return <div
                        key={_id}
                        draggable
                        onDragStart={e => dragStart(e, _id)}
                        onDragEnter={e => dragEnter(e, _id)}
                        onDragEnd={e => dragEnd(e, _id)}
                    >
                        {draggedPos === _id ? <Box className="tw-h-[64px] tw-m-2 tw-rounded-md tw-bg-blue-300"> </Box> : ""}

                        <InputRow
                            index={_id}
                            id={item.uuid}
                            item={elements[item.uuid]}
                            subelements={item.elements}
                            builder={builder} />


                    </div>
                })
            }
        </>
    )
}
const LabInput = (props: InputPropsType) => {
    const { builder } = props
    const items = useAppSelector(getInputs)

    const dispatch = useAppDispatch()
    const updateInputs = (newInputs: any) => {
        dispatch(setInput(newInputs))
    }

    return (
        <Box className=" tw-h-full tw-flex tw-flex-col tw-flex-shrink-0">
            <Paper
                variant='outlined'
                square
                className=" tw-overflow-y-auto tw-flex-grow tw-border-0 tw-w-full tw-relative tw-flex tw-flex-col tw-gap-2"
            >
                <InputLists
                    items={items}
                    builder={builder}
                    callback={updateInputs}
                />
                {builder ? <DropHere /> : ""}
            </Paper>
        </Box>

    )

}
export default LabInput;
export { InputLists }