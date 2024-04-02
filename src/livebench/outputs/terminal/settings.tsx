import { Editor } from "@/components/editorSidebar/editor"
import { EditorTextbox } from '@/components/editorSidebar/editorTextbox';
import { useAppDispatch } from "@/store/hooks"
import { updateConfiguration } from "@/components/lab/labSlice";

const Settings = ({ uuid, configuration }: any) => {
    const dispatch = useAppDispatch()
    
    const updateValue = (event: any) => {
        const config = { ...configuration, [event.target.name]: event.target.value}
        dispatch(updateConfiguration({ uuid, configuration: config }))
    }

    return (
        <>
            <Editor uuid={uuid} configuration={configuration} />
            <EditorTextbox name="prompt" value={configuration.prompt} callback={updateValue} />

        </>
    )
}

export { Settings }