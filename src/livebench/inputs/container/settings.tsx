import { Box, Divider, TextField } from "@mui/material"
import { Delete, Add } from "@mui/icons-material"
import { useAppDispatch } from "@/store/hooks"
import { updateElementConfiguration } from "@/components/input/inputBuilderSlice"
import { useState } from "react"
import { EditorTextbox } from '@/components/editorSidebar/editorTextbox';
import { updateElementConfiguration as updateInput } from "@/components/input/inputBuilderSlice"
import { updateConfiguration } from "@/components/lab/labSlice"
const Settings = ({ uuid, configuration }: any) => {

    const dispatch = useAppDispatch()

    console.table(configuration)

    const updateValue = (event: any) => {
        const config = { ...configuration, [event.target.name]: event.target.value }
        dispatch(updateConfiguration({ uuid, configuration: config }))
    }
    return (
        <Box className=" tw-flex tw-flex-col">
            <EditorTextbox name={"label"} value={configuration.label} callback={updateValue} />
            <EditorTextbox value={uuid} disable />
        </Box>
    )
}

export { Settings }