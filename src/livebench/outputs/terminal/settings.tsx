import { OutputEditor, } from "@/components/editorSidebar/editor"
import { EditorTextbox } from '@/components/editorSidebar/editorTextbox';
import { useAppDispatch } from "@/store/hooks"
import { updateElementConfiguration } from "@/components/output/outputBuilderSlice";
import { Box, Divider } from "@mui/material"
import { Add } from "@mui/icons-material";

const Settings = ({ uuid, configuration }: any) => {
    console.log({ uuid, configuration })
    const dispatch = useAppDispatch()
    const updateValue = (event: any) => {
        const config = { ...configuration, [event.target.name]: event.target.value}
        dispatch(updateElementConfiguration({ uuid, configuration: config }))
    }

    return (
        <>
            <OutputEditor uuid={uuid} configuration={configuration} />
            <EditorTextbox name="prompt" value={configuration.prompt} callback={updateValue} />

        </>
    )
}

export { Settings }