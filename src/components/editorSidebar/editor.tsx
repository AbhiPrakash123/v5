import { Box } from "@mui/material"
import { useAppDispatch } from "@/store/hooks"
import { updateElementConfiguration, deleteElement } from "@/components/input/inputBuilderSlice"
import { EditorTextbox } from "@/components/editorSidebar/editorTextbox"

const Editor = ({ uuid, configuration }: any) => {

    const dispatch = useAppDispatch()

    console.table(configuration)
    const updateValue = (event: any) => {
        const config = { ...configuration, [event.target.name]: event.target.value }
        dispatch(updateElementConfiguration({ uuid, configuration: config }))
    }
    return (
        <Box className=" tw-flex tw-flex-col">
            <EditorTextbox name={"value"} value={configuration.value} callback={updateValue} />
            <EditorTextbox name={"event"} value={configuration.event} callback={updateValue} />
            <EditorTextbox value={uuid} disable/>
        </Box>
    )
}

export default Editor