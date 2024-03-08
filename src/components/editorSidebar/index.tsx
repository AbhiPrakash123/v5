import { Box, Paper,Button, Typography, Divider } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { isOpen,close as editorClose, editingElement, editingElementUUID } from "./editorSidebarSlice"
import { getInputs,deleteElement } from "../input/inputBuilderSlice";
import inputs from "@/livebench/inputs";
const EditorSidebar = () => {
    const dispatch = useAppDispatch()
    // const [open, setOpen] = useState(true)
    const open = useAppSelector(isOpen)
    const elementUname = useAppSelector(editingElement)
    const elementUUID = useAppSelector(editingElementUUID)
    const allInputs = useAppSelector(getInputs)

    const Setting: any = inputs.filter((item: any) => item.uname === elementUname)[0]?.settings
    const editingInputElement = allInputs.filter((item: any) => item.uuid === elementUUID)[0]

    const deleteInput = () => {
        dispatch(deleteElement(elementUUID))
        dispatch(editorClose())
    }

    return (
        <Slide direction="left" in={open} mountOnEnter unmountOnExit>
            <Paper
                className={`tw-fixed tw-h-dvh tw-right-0 tw-m-0 tw-px-2 tw-flex tw-flex-col tw-w-dvw sm:tw-w-[350px]`}
            >
                <Box className="tw-h-[64px] tw-flex tw-flex-col tw-justify-between tw-flex-shrink-0">
                    <Box className=" tw-h-full tw-flex tw-justify-between tw-items-center ">
                        <Typography component="span">
                            Editor
                        </Typography>
                        <CloseIcon className='tw-cursor-pointer' onClick={() => dispatch(editorClose())} />
                    </Box>
                    <Divider flexItem />
                </Box>

                <Box className=" tw-flex-grow tw-overflow-y-auto">
                    {editingInputElement ? <Setting uuid={elementUUID} configuration={editingInputElement.configuration} /> : ""}
                    <Button
                        color="error"
                        variant="contained"
                        className=" tw-w-full"
                        onClick={deleteInput}
                    >
                        Delete element
                    </Button>
                </Box>
            </Paper >
        </Slide>

    )
}

export default EditorSidebar;
