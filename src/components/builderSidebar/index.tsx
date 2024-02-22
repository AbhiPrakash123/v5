import { motion, useAnimation } from 'framer-motion';
import { Box, Paper,Button} from "@mui/material";
import AppsIcon from '@mui/icons-material/Apps';
import EditNoteIcon from '@mui/icons-material/EditNote';
import inputs from '@/livebench';
import ListComponents from '../listComponents';
const BuilderSidebar = () => {
    console.log(inputs)
    const tabs = [
        {name:'components',icon:<AppsIcon />},
        {name:'edit',icon:<EditNoteIcon />},
    ]

    return (
        <Paper
            className={`tw-h-full tw-m-0 tw-border-t-0 tw-border-l-0 tw-border-b-0 tw-px-2`}
            variant="outlined"
            square
        >
            <ul 
            className="tw-p-0 tw-m-0 tw-list-none tw-h-16 tw-flex tw-items-center"
            >
                {
                    tabs.map((item,i) => {
                        return <li key={i} className=' tw-flex tw-items-center tw-justify-center tw-gap-2 tw-min-w-32 tw-p-2 tw-cursor-pointer'>{item.icon}{item.name}</li>
                    })
                }
            </ul>
            <Box>
                <ListComponents />
            </Box>
        </Paper >
    )
}

export default BuilderSidebar;
