import { Box } from "@mui/material"
import { useAppDispatch } from "@/store/hooks"
import { EditorTextbox } from "@/components/editorSidebar/editorTextbox"
import { updateConfiguration } from "../lab/labSlice"

const Editor = ({ uuid, configuration }: any) => {

    const dispatch = useAppDispatch()

    const updateValue = (event: any) => {
        const config = { ...configuration, [event.target.name]: event.target.value }
        dispatch(updateConfiguration({ uuid, configuration: config }))
    }
    return (
        <Box className=" tw-flex tw-flex-col">
            {configuration.title !== undefined ? <EditorTextbox name={"title"} value={configuration.title} callback={updateValue} />:""}
            {configuration.value !== undefined ? <EditorTextbox name={"value"} value={configuration.value} callback={updateValue} />:""}
            <EditorTextbox name={"event"} value={configuration.event} callback={updateValue} />
            <EditorTextbox value={uuid} disable/>
        </Box>
    )
}

export {Editor}