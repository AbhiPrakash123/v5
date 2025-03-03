import { Box, Paper, Button, Typography, Divider } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { isOpen, close as editorClose, editingElementID, editingElementType, editingItem } from "./editorSidebarSlice"
import inputs from "@/livebench/inputs";
import outputs from "@/livebench/outputs";
import { getAllElements } from "../lab/labSlice";

const EditorSidebar = () => {
    const dispatch = useAppDispatch()
    const open = useAppSelector(isOpen)
    const elementID = useAppSelector(editingElementID)
    const allElements = useAppSelector(getAllElements)

    const editingInputElement = allElements[elementID];
    var Setting: any = null;
    if (editingInputElement?.component === "input") {
        Setting = inputs.filter((item: any) => item.uname === editingInputElement.uname)[0]?.settings
    } else if (editingInputElement?.component === "output") {
        Setting = outputs.filter((item: any) => item.uname === editingInputElement.uname)[0]?.settings
    }
    console.log(editingInputElement)


    const deleteInput = () => {
        // if (elementType === "input") {
        //     dispatch(deleteInputElement(elementID))
        // } else if (elementType === "output") {
        //     dispatch(deleteOutputElement(elementID))
        // }
        dispatch(editorClose())
    }

    return (
        <Slide direction="left" in={open} mountOnEnter unmountOnExit>
            <Paper
                className={`tw-fixed tw-h-dvh tw-right-0 tw-m-0 tw-px-2 tw-flex tw-flex-col tw-w-dvw sm:tw-w-[350px] tw-z-20`}
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

                <Box className=" tw-flex-grow tw-overflow-y-auto tw-p-3">
                    {Setting ? <Setting uuid={elementID} configuration={editingInputElement.configuration} /> : ""}
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
