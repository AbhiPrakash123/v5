"use client"

import React, { useEffect, useState } from 'react';
import { Responsive, WidthProvider, Layout } from 'react-grid-layout';
import { generateUUID } from '@/utils';
import { Box, ListItem, Paper, Divider } from "@mui/material"
import Delete from '@mui/icons-material/Delete';
import { FilterList } from '@mui/icons-material';
import OpenWithIcon from '@mui/icons-material/OpenWith';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
import { getDraggedOutputElement, addElement } from './outputBuilderSlice';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import OutputContainer from './outputContainer';
type layoutType = {
    id: string,
    i: string,
    x: number,
    y: number,
    w: number,
    h: number
}

const initialLayout: Array<layoutType> = [];
const breakpoint = { lg: 1200, md: 996, sm: 400 };
const cols = { lg: 12, md: 8, sm: 6 };
const ResponsiveReactGridLayout = WidthProvider(Responsive);

const data = [
    {
        id: "dasd",
        uanme: "asd",
        configurations: {},
        layout: {
            lg: [],
            md: [],
            sm: []
        }
    }
]

export default function OutputBuilder() {
    const [layout, setLayout] = useState(initialLayout)
    const [allLayOut, setAllLayOut] = useState([])
    const [droppable, setDroppable] = useState(false)
    const dispatch = useAppDispatch()
    const outputElement = useAppSelector(getDraggedOutputElement)
    useEffect(() => {
        if (outputElement === null) {
            setDroppable(false)
        } else {
            setDroppable(true)
        }
    }, [outputElement])

    const handleDrop = (layout: any, layoutItem: any, _event: any) => {
        // console.log(layout)
        // console.log(layoutItem)
        if (outputElement === null) return

        const { x, y, w, h } = layoutItem
        // console.log(_event)
        const uuid = generateUUID()
        const data = { id: uuid, i: uuid, x, y, w: 6, h: 6 }
        dispatch(addElement({ uname: outputElement, uuid }))
        setLayout((prev) => [...prev, data])
    }

    const onLayoutChange = (currentLayout: any, allLayouts: any) => {
        const droppedElement = currentLayout.filter((item: any) => item.i === "__dropping-elem__") // check for valid elemnts
        console.log(droppedElement)
        if (droppedElement.length >= 1) return
        console.table(currentLayout)
        const newLayout = currentLayout.map((item: any) => { return { id: item.i, i: item.i, x: item.x, y: item.y, w: item.w, h: item.h } })
        setLayout(() => newLayout)
    }

    const onBreakpointChange = (newBreakpoint: string, newCols: number) => {
        console.log(newBreakpoint)
    }

    const deleteConatiner = (event: any, id: string) => {
        event.stopPropagation()
        setLayout((prev) => prev.filter((item => item.id !== id)))
    }
    // const onResize = (item:any,item2:any) => {
    //     console.log("resize->",item2)
    // }
    // 
    const resizeH = <div className=' tw-absolute tw-right-0 tw-bottom-0 tw-cursor-se-resize -tw-rotate-45 tw-z-50' >
        <FilterList />
    </div>
    return (
        <Box className="tw-h-full tw-overflow-y-auto">
            <Box className="tw-h-full tw-py-auto tw-relative ">
                <div className="tw-h-full tw-relative tw-w-full">
                    <ResponsiveReactGridLayout
                        className="layout tw-h-full"
                        breakpoint='lg'
                        breakpoints={breakpoint}
                        cols={cols}
                        rowHeight={30}
                        isBounded={false}
                        preventCollision={false}
                        useCSSTransforms={false}
                        resizeHandle={resizeH}
                        draggableHandle='.dragDivElement'
                        resizeHandles={['se']}
                        onLayoutChange={onLayoutChange}
                        onBreakpointChange={onBreakpointChange}
                        onDrop={handleDrop}
                        isDroppable={droppable}


                    >
                        {layout.map((item, i) => (
                            <Paper
                                key={item.id}
                                data-grid={item}
                                variant='outlined'
                                className=' tw-flex tw-flex-col tw-flex-shrink-0'
                                
                            >
                                <Box>
                                    <Box className=" tw-flex tw-gap-2 tw-p-2">
                                        <Box className=' tw-flex tw-gap-2'>
                                            <Box className='dragDivElement tw-cursor-move'><DragIndicatorIcon /></Box>
                                            <Box className='tw-cursor-pointer' onClick={(event) => deleteConatiner(event, item.id)}><Delete /></Box>
                                        </Box>
                                        <span> Table</span>
                                    </Box>
                                    <Divider />
                                </Box>
                                <Box 
                                
                                className=" tw-flex-grow tw-overflow-auto">
                                    <OutputContainer item={item} />
                                </Box>
                            </Paper>
                        ))}
                    </ResponsiveReactGridLayout>
                </div>
            </Box>

        </Box>
    )
}