"use client"

import React, { useEffect, useState } from 'react';
import { Responsive, WidthProvider, Layout } from 'react-grid-layout';
import { generateUUID } from '@/utils';
import { Box, ListItem, Paper, Divider } from "@mui/material"
import Delete from '@mui/icons-material/Delete';
import { FilterList, Settings } from '@mui/icons-material';
import OpenWithIcon from '@mui/icons-material/OpenWith';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
import { getDraggedOutputElement, getBreakpoint } from './outputBuilderSlice';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import OutputContainer from './outputContainer';
import { open as editorOpen } from "@/components/editorSidebar/editorSidebarSlice"
import { addOutput, getOutputs,updateLayout,getAllElements } from '../lab/labSlice';

const breakpoint = { lg: 1200, md: 996, sm: 400 };
const cols = { lg: 12, md: 8, sm: 6 };
const ResponsiveReactGridLayout = WidthProvider(Responsive);

export default function OutputBuilder() {
    const [allLayOut, setAllLayOut] = useState([])
    const [droppable, setDroppable] = useState(false)
    const dispatch = useAppDispatch()
    const outputElement: any = useAppSelector(getDraggedOutputElement)
    const currentBreakpoint = useAppSelector(getBreakpoint)
    const outputs = useAppSelector(getOutputs)
    const allElements = useAppSelector(getAllElements)

    useEffect(() => {  
        if (outputElement === null) {
            setDroppable(false)
        } else {
            setDroppable(true)
        }
    }, [outputElement])

    const handleDrop = (layout: any, layoutItem: any, _event: any) => {

        if (outputElement === null) return

        dispatch(
            addOutput(
                { ...outputElement, layoutItem }
            )
        )
    }

    const onLayoutChange = (currentLayout: any, allLayouts: any) => {
        const droppedElement = currentLayout.filter((item: any) => item.i === "__dropping-elem__") // check for valid elemnts
        if (droppedElement.length >= 1) return
        currentLayout.map((item: any) => {
            dispatch(updateLayout({ uuid: item.i, breakpoint: currentBreakpoint, layout: item }))
        })
    }

    const onBreakpointChange = (newBreakpoint: string, newCols: number) => {
        console.log(newBreakpoint)
    }

    const deleteConatiner = (event: any, id: string) => {
        event.stopPropagation()
    }
    // const onResize = (item:any,item2:any) => {
    //     console.log("resize->",item2)
    // }
    // 
    const openSetting = (item: any) => {
        dispatch(editorOpen(item.uuid))
    }
    const resizeH = <div className=' tw-absolute tw-right-0 tw-bottom-0 tw-cursor-se-resize -tw-rotate-45 tw-z-10' >
        <FilterList />
    </div>
    return (
        <Box className="tw-h-full tw-overflow-y-auto">
            <Box className="tw-h-full tw-py-auto tw-relative ">
                <div className="tw-h-full tw-relative tw-w-full">
                    <ResponsiveReactGridLayout
                        className="layout tw-h-full"
                        breakpoint={currentBreakpoint}
                        breakpoints={breakpoint}
                        cols={cols}
                        // maxRows={30}
                        rowHeight={10}
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
                        containerPadding={[3, 3]}
                        isDraggable={true}
                    >
                        {outputs.map((item: any) => (
                            <Paper
                                key={item.uuid}
                                data-grid={allElements[item.uuid].layout[currentBreakpoint]}
                                variant='outlined'
                                className=' tw-flex tw-flex-col tw-flex-shrink-0'

                            >
                                <Box>
                                    <Box className=" tw-flex tw-gap-2 tw-p-2 tw-justify-between">
                                        <Box className=' tw-flex tw-gap-2 tw-items-center'>
                                            <DragIndicatorIcon className='dragDivElement tw-cursor-move' />
                                            <span>{allElements[item.uuid].configuration.title}</span>
                                        </Box>
                                        <Box className=' tw-flex tw-gap-2 tw-items-center'>
                                            <Settings className=" tw-cursor-pointer" onClick={() => openSetting(item)} />
                                        </Box>
                                    </Box>
                                    <Divider />
                                </Box>
                                <Box

                                    className=" tw-flex-grow tw-overflow-auto">
                                    <OutputContainer item={allElements[item.uuid]} />
                                </Box>
                            </Paper>
                        ))}
                    </ResponsiveReactGridLayout>
                </div>
            </Box>

        </Box>
    )
}