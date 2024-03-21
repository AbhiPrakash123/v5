import { Box } from "@mui/material"
import { useAppDispatch } from "@/store/hooks"
import { updateElementConfiguration as updateInput } from "@/components/input/inputBuilderSlice"
import { updateElementConfiguration as updateOutput } from "../output/outputBuilderSlice"
import { EditorTextbox } from "@/components/editorSidebar/editorTextbox"

const InputEditor = ({ uuid, configuration }: any) => {

    const dispatch = useAppDispatch()

    const updateValue = (event: any) => {
        const config = { ...configuration, [event.target.name]: event.target.value }
        dispatch(updateInput({ uuid, configuration: config }))
    }
    return (
        <Box className=" tw-flex tw-flex-col">
            <EditorTextbox name={"value"} value={configuration.value} callback={updateValue} />
            <EditorTextbox name={"event"} value={configuration.event} callback={updateValue} />
            <EditorTextbox value={uuid} disable/>
        </Box>
    )
}
const OutputEditor = ({ uuid, configuration }: any) => {

    const dispatch = useAppDispatch()

    const updateValue = (event: any) => {
        const config = { ...configuration, [event.target.name]: event.target.value }
        dispatch(updateOutput({ uuid, configuration: config }))
    }
    return (
        <Box className=" tw-flex tw-flex-col">
            <EditorTextbox name={"title"} value={configuration.title} callback={updateValue} />
            <EditorTextbox name={"event"} value={configuration.event} callback={updateValue} />
            <EditorTextbox value={uuid} disable/>
        </Box>
    )
}

export {InputEditor,OutputEditor}