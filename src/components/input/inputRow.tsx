import { Box, Paper, Divider } from "@mui/material"
import inputs from '@/livebench/inputs';
import SettingsIcon from '@mui/icons-material/Settings';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
import { InputRowPropsType } from "./input";
import { useAppDispatch } from "@/store/hooks";
import { open as editorOpen } from "@/components/editorSidebar/editorSidebarSlice"
const Invalid = () => {
    return (
        <span>invalid</span>
    )
}
const InputRow = (props: InputRowPropsType) => {
    const { item, builder } = props

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
        const data:any = {type:"input",uuid:item.uuid}
        dispatch(editorOpen(data))
    }
    let rowElement;
    if (builder) {
        rowElement = (
            <Paper
                variant="outlined"
                className=" tw-flex tw-p-2 tw-h-auto tw-w-full"
                id={item.uuid}
            >
                <Box
                    className=" tw-w-full tw-relative"
                    sx={defaultFlex}
                >
                    {<Element configuration={item.configuration}/>}
                </Box>
                <Divider orientation="vertical" flexItem sx={{ mx: 1 }} />
                <Box className="tw-flex tw-flex-col tw-justify-center tw-items-center tw-gap-2">
                    <SettingsIcon className=" tw-cursor-pointer" onClick={() => openEditMode()} />
                    <DragIndicatorIcon className=" tw-cursor-grab" />
                </Box>
            </Paper>

        )
    } else {
        rowElement = (
            <Box
                className=" tw-w-full tw-px-2 tw-my-2 tw-min-h-[50px] tw-relative"
                sx={defaultFlex}
            >
                {<Element configuration={item.configuration}/>}
            </Box>
        )
    }
    return rowElement
}
export default InputRow