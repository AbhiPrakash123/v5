import { Box, Paper, Divider } from "@mui/material"
import inputs from '@/livebench/inputs';
import SettingsIcon from '@mui/icons-material/Settings';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
import { InputRowPropsType } from "./input";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { open as editorOpen } from "@/components/editorSidebar/editorSidebarSlice"
import { useState } from "react";
import { getAllElements } from "../lab/labSlice";
import LabContainer from "@/livebench/inputs/container";
const Invalid = () => {
    return (
        <span>invalid</span>
    )
}
const InputRow = (props: any) => {
    console.log(props)
    const { builder } = props
    const [ isDraggable, setIsDraggable ] = useState(false)

    const elements = useAppSelector(getAllElements)

    const item = elements[props.id]
    const inputElement: any = inputs.filter(ele => ele.uname === item.uname)[0]
    const Element = inputElement ? inputElement.element : Invalid

    const defaultFlex = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyItems: "center",
        justifyContent: "center"
    }

    const dispatch = useAppDispatch()

    const openEditMode = () => {
        dispatch(editorOpen(props.id))
    }

    let rowElement;
    if (builder) {
        rowElement = (
            <Paper
                variant="outlined"
                className=" tw-flex tw-p-2 tw-h-auto tw-w-full"
                id={props.id}
                draggable={isDraggable}

            >
                <Box
                    className=" tw-w-full tw-relative"
                    sx={defaultFlex}
                >
                    {
                        props.subelements === undefined?
                        <Element uuid={props.id} configuration={item.configuration}/>:
                        <LabContainer uuid={props.id} configuration={item.configuration} items={props.subelements} />

                        }
                </Box>
                <Divider orientation="vertical" flexItem sx={{ mx: 1 }} />
                <Box className="tw-flex tw-flex-col tw-justify-center tw-items-center tw-gap-2">
                    <MoreVertIcon className=" tw-cursor-pointer" onClick={() => openEditMode()} />
                    {/* <DragIndicatorIcon className=" tw-cursor-grab" /> */}
                </Box>
            </Paper>

        )
    } else {
        rowElement = (
            <Box
                className=" tw-w-full tw-px-2 tw-my-2 tw-min-h-[50px] tw-relative"
                sx={defaultFlex}
            >
                {<Element uuid={item.uuid} configuration={item.configuration}/>}
            </Box>
        )
    }
    return rowElement
}
export default InputRow