"use client"

import React, { useEffect, useState } from 'react';
import { Responsive, WidthProvider, Layout } from 'react-grid-layout';
import { generateUUID } from '@/utils';
import { Box, ListItem, Paper, Divider } from "@mui/material"
import Delete from '@mui/icons-material/Delete';
import { FilterList } from '@mui/icons-material';
import OpenWithIcon from '@mui/icons-material/OpenWith';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
type layoutType = {
    id: string,
    i: string,
    x: number,
    y: number,
    w: number,
    h: number
}

const initialLayout: Array<layoutType> = [];
const breakpoint = { lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 };
const cols = { lg: 24, md: 12, sm: 6, xs: 4, xxs: 2 };
const ResponsiveReactGridLayout = WidthProvider(Responsive);


export default function OutputBuilder() {
    const [layout, setLayout] = useState(initialLayout)

    const handleDrop = (layout: any, layoutItem: any, _event: any) => {
        // console.log(layout)
        // console.log(layoutItem)
        const {x, y, w, h} = layoutItem
        // console.log(_event)
        const uuid = generateUUID()
        setLayout((prev) => [...prev, { id: uuid, i: uuid, x, y, w: 10, h: 2 }])

    }

    const onLayoutChange = (currentLayout: any, allLayouts: any) => {
        console.log(currentLayout)
        const droppedElement = currentLayout.filter((item:any) => item.id === undefined)
        if(droppedElement) return
        const newLayout = currentLayout.map((item: any) => { return { id: item.i, i: item.i, x: item.x, y: item.y, w: item.w, h: item.h } })
        console.log(newLayout)
        setLayout(prev => newLayout)
    }

    // const addConatiner = () => {
    //     const uuid = generateUUID()
    //     setLayout((prev) => [...prev, { id: uuid, i: uuid, x: 0, y: 0, w: 10, h: 2 }])
    // }

    const deleteConatiner = (event: any, id: string) => {
        event.stopPropagation()
        setLayout((prev) => prev.filter((item => item.id !== id)))
    }
    // 
    const resizeH = <div className=' tw-absolute tw-right-0 tw-bottom-0 tw-cursor-se-resize -tw-rotate-45' >
        <FilterList />
    </div>
    return (
        <Box className="tw-h-full tw-overflow-y-auto">
            {/* <Box className="tw-h-[6%] tw-border tw-border-b-2 tw-py-auto tw-px-1">
                Output Builder
                <button className='tw-p-2 tw-bg-slate-500 tw-rounded-md' onClick={() => addConatiner()}>Add conatiner</button>
            </Box> */}
            <Box className="tw-h-full tw-border tw-border-b-2 tw-py-auto tw-px-1 tw-relative ">
                <div className="tw-h-full tw-relative tw-w-full">
                    <ResponsiveReactGridLayout
                        className="layout tw-h-full"
                        // breakpoints={breakpoint}
                        cols={cols}
                        //   layout={layout}
                        rowHeight={30}
                        isBounded={false}
                        preventCollision={false}
                        useCSSTransforms={false}
                        // measureBeforeMount={false}
                        // maxRows={30}
                        resizeHandle={resizeH}
                        draggableHandle='.dragDivElement'
                        resizeHandles={['se']}
                        onLayoutChange={onLayoutChange}
                        // onDragOver={(e) => handleDragOver(e)}
                        // onDragLeave={(e) => handleDragLeave(e)}
                        onDrop={handleDrop}
                        isDroppable={true}


                    >
                        {layout.map((item, i) => (
                            <Paper
                                key={item.id} 
                                data-grid={item}
                                variant='outlined'
                            >
                                <Box className=" tw-flex tw-gap-2 tw-p-2">
                                    <Box className=' tw-flex tw-gap-2'>
                                        <Box className='dragDivElement tw-cursor-move'><DragIndicatorIcon /></Box>
                                        <Box className='tw-cursor-pointer' onClick={(event) => deleteConatiner(event, item.id)}><Delete /></Box>
                                    </Box>
                                    <span> Table</span>
                                </Box>
                                <Divider />
                                <span className="tw-text">{i}</span>
                            </Paper>
                        ))}
                    </ResponsiveReactGridLayout>
                </div>
            </Box>

        </Box>
    )
}