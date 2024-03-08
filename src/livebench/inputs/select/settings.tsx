import Editor from "@/components/editorSidebar/editor"
import { Box, Divider, TextField } from "@mui/material"
import { Delete, Add } from "@mui/icons-material"
import { useAppDispatch } from "@/store/hooks"
import { updateElementConfiguration } from "@/components/input/inputBuilderSlice"
import { useState } from "react"
const Settings = ({ uuid, configuration }: any) => {
    const [ name, setName ] = useState("")
    const [ value, setValue ] = useState("")
    const dispatch = useAppDispatch()

    console.table(configuration)

    const addOption = (event: any) => {
        if(name === "" && value === "") return
        const config = { ...configuration, ['options']: [...configuration.options,{name,value}]}
        dispatch(updateElementConfiguration({ uuid, configuration: config }))
        setName("")
        setValue("")
    }
    const deleteOption = (indexID: any) => {

        const config = { ...configuration, ['options']: configuration.options.filter((item:any,index: number) => index !== indexID)}
        dispatch(updateElementConfiguration({ uuid, configuration: config }))
    }


    return (
        <>
            <Editor uuid={uuid} configuration={configuration} >

            </Editor>
            <Box className=" tw-w-full tw-flex tw-flex-col tw-gap-3 tw-py-3">
                <Box className=" tw-w-full tw-flex ">
                    <Box sx={{ flex: "1 1 0" }}>Options</Box>
                </Box>
                <Divider />
                {configuration.options.map((item: any,index: number) => (
                    <Box className=" tw-w-full tw-flex ">
                        <Box sx={{ flex: "1 1 0" }}>{item.name}</Box>
                        <Box sx={{ flex: "1 1 0" }}>{item.value}</Box>
                        <Delete className=" tw-cursor-pointer" onClick={() => deleteOption(index)} />
                    </Box>
                ))}
                <Box className=" tw-w-full tw-flex tw-items-center ">
                    <TextField
                        sx={{ flex: "1 1 0" }}
                        name="name"
                        size="small"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="name"
                        required
                    />
                    <TextField
                        sx={{ flex: "1 1 0" }}
                        name="value"
                        size="small"
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                        placeholder="value"
                        required
                    />
                    <Add className=" tw-cursor-pointer" onClick={addOption}/>
                </Box>


            </Box>

        </>
    )
}

export { Settings }