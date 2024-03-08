import { Box, Button, TextField, Typography } from "@mui/material"
import { useAppDispatch } from "@/store/hooks"
import { updateElementConfiguration, deleteElement } from "@/components/input/inputBuilderSlice"
import { close as editorClose } from "@/components/editorSidebar/editorSidebarSlice"
import { EditorTextbox } from "@/components/editorSidebar/editorRow"

const Settings = ({ uuid, configuration }: any) => {

    const dispatch = useAppDispatch()

    console.table(configuration)
    const updateValue = (event: any) => {
        const config = { ...configuration, [event.target.name]: event.target.value }
        dispatch(updateElementConfiguration({ uuid, configuration: config }))
    }

    

    return (
        <Box>
            <EditorTextbox name={"value"} value={configuration.value} callback={updateValue} />
            <EditorTextbox name={"event"} value={configuration.event} callback={updateValue} />
            <EditorTextbox value={uuid} disable/>
        </Box>
    )
}

export { Settings }