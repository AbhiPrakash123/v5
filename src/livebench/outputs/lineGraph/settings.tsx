import { Editor } from "@/components/editorSidebar/editor"
import { EditorTextbox } from '@/components/editorSidebar/editorTextbox';
import { useAppDispatch, useAppSelector } from "@/store/hooks"
// import { updateElementConfiguration } from "@/components/output/outputBuilderSlice";
import { Box, Divider } from "@mui/material"
import { Add } from "@mui/icons-material";
import { updateConfiguration,getAllElements } from "@/components/lab/labSlice";

const Settings = ({ uuid }: any) => {

    const dispatch = useAppDispatch()
    const elements = useAppSelector(getAllElements)
    const configuration = elements[uuid].configuration

    const updateValue = (event: any) => {
        const config = { ...configuration, axis_label: { ...configuration.axis_label, [event.target.name]: event.target.value } }
        dispatch(updateConfiguration({ uuid, configuration: config }))
    }

    const addLine = (event:any) => {
        const config = { ...configuration, lines: [ ...configuration.lines, {label:`line ${configuration.lines.length + 1}`}] }
        dispatch(updateConfiguration({ uuid, configuration: config }))
    }

    const updateLine = (event:any,index:number) => {
        const update = [...configuration.lines]
        update[index] = {label: event.target.value}
        const config = { ...configuration, lines:update }
        dispatch(updateConfiguration({ uuid, configuration: config }))
    }

    return (
        <>
            <Editor uuid={uuid} configuration={configuration} />
            <EditorTextbox name="x" value={configuration.axis_label.x} callback={updateValue} />
            <EditorTextbox name="y" value={configuration.axis_label.y} callback={updateValue} />
            <Box className=" tw-w-full tw-flex" style={{padding:"10px 0"}}>
                <Box sx={{ flex: "1 1 0" }}>Lines</Box>
                <Add className=" tw-cursor-pointer" onClick={addLine}/>
            </Box>
            
            <Divider />

            <Box className=" tw-w-full tw-flex tw-flex-col tw-gap-3 ">
                {configuration.lines.map((item: any,index:number) => {
                    return (
                        <EditorTextbox key={index} value={item.label} callback={(event:any)=>updateLine(event,index)} />
                    )
                })}
            </Box>
        </>
    )
}

export { Settings }