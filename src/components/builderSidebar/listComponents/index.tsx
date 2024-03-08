import inputs from "@/livebench/inputs"
import outputs from "@/livebench/outputs";
import { Box, Paper, Divider, Typography } from "@mui/material"
import React, { useState, DragEvent } from 'react';
import { setDraggedInputElement } from "../../input/inputBuilderSlice";
import { setDraggedOutputElement } from "@/components/output/outputBuilderSlice";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import "./style.css"

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function CustomTabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            className=" tw-h-full tw-overflow-y-auto"
            {...other}
        >
            {value === index && (
                <Box>
                    {children}
                </Box>
            )}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

interface renderElmentType {
    data: Array<any>,
    dragStart: Function,
    dragEnd: Function
}
const RenderElements = (props: renderElmentType) => {
    const { data, dragStart, dragEnd } = props

    return (
        <Box className=" tw-flex tw-flex-col tw-gap-2" >
            {
                data.map((item, i) =>
                    <Paper
                        variant="outlined"
                        key={i}
                        className="tw-p-3 tw-cursor-grab tw-flex tw-flex-col tw-flex-shrink-0 tw-gap-2"
                        draggable
                        onDragStart={() => dragStart(item)}
                        onDragEnd={() => dragEnd()}
                    >
                        <Box>
                            <Typography component="div">
                                <Box sx={{ textTransform: 'uppercase', fontWeight: 'medium' }}>{item.type}</Box>
                            </Typography>
                            <Divider />
                        </Box>
                        <Box className=" tw-flex-grow tw-flex tw-flex-col tw-justify-center tw-pointer-events-none tw-w-full tw-h-[150px]">
                            {item.element()}
                        </Box>
                    </Paper>
                )
            }
        </Box>
    )
}

const ListComponents = () => {

    const [value, setValue] = useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };
    const dispatch = useAppDispatch()

    const handleInputDragStart = (item: any) => {
        const { uname, configuration } = item
        dispatch(setDraggedInputElement({ uname, configuration }))
    };
    const handleInputDragEnd = () => {
        dispatch(setDraggedInputElement(null))
    }

    const handleOutputDragStart = (item: any) => {
        dispatch(setDraggedOutputElement(item.uname))
    };
    const handleOutputDragEnd = () => {
        dispatch(setDraggedOutputElement(null))
    }


    return (
        <Box className=" tw-h-full tw-w-full">
            <Box sx={{ width: '100%' }} className="tw-flex tw-flex-col tw-flex-shrink-0 tw-h-full tw-gap-2">
                <Box sx={{ borderBottom: 1, borderColor: 'divider'}}>
                    <Tabs value={value} onChange={handleChange} aria-label="tabs for elements">
                        <Tab label="inputs" {...a11yProps(0)} />
                        <Tab label="outputs" {...a11yProps(1)} />
                    </Tabs>
                </Box>
                <CustomTabPanel value={value} index={0} >
                    <RenderElements data={inputs} dragStart={handleInputDragStart} dragEnd={handleInputDragEnd} />
                </CustomTabPanel>
                <CustomTabPanel value={value} index={1}>
                    <RenderElements data={outputs} dragStart={handleOutputDragStart} dragEnd={handleOutputDragEnd} />
                </CustomTabPanel>
            </Box>
        </Box>
    )
}

export default ListComponents;