import { Box, Paper, Typography, Divider } from "@mui/material";
import AppsIcon from '@mui/icons-material/Apps';
import EditNoteIcon from '@mui/icons-material/EditNote';
import CloseIcon from '@mui/icons-material/Close';
import inputs from '@/livebench/inputs';
import ListComponents from './listComponents';
import { useState } from 'react';
import Slide from '@mui/material/Slide';
import { open, toggle, isOpen } from "./buidlerSidebarSlice";
import { useAppDispatch, useAppSelector } from "@/store/hooks";


const BuilderSidebar = () => {
    const dispatch = useAppDispatch()
    // const [open, setOpen] = useState(true)
    const open = useAppSelector(isOpen)

    return (
        <Slide direction="left" in={open} mountOnEnter unmountOnExit>
            <Paper
                className={`tw-w-dvw sm:tw-w-[350px] tw-fixed tw-h-dvh tw-right-0 tw-m-0 tw-px-2 tw-flex tw-flex-col tw-z-20 `}
            >
                <Box className=" tw-w-full tw-h-[64px] tw-flex tw-flex-col tw-justify-between tw-flex-shrink-0">
                    <Box className=" tw-h-full tw-flex tw-justify-between tw-items-center ">
                        <Typography component="span">
                            Elements
                        </Typography>
                        <CloseIcon className='tw-cursor-pointer' onClick={() => dispatch(toggle())} />
                    </Box>
                    <Divider flexItem />
                </Box>

                <Box className=" tw-w-full tw-flex-grow tw-overflow-y-auto">
                    <ListComponents />
                </Box>
            </Paper >
        </Slide>

    )
}

export default BuilderSidebar;
