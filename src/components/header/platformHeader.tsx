"use client"
import { LightMode, DarkMode, Translate } from '@mui/icons-material';
import { getTheme, toggleTheme } from '@/lib/features/theme/themeSlice';
import { Avatar, Paper, Button, Tooltip } from '@mui/material';
import { HeaderProps } from './header';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { toggle } from '../builderSidebar/buidlerSidebarSlice';
import { getOutputs, setBreakpoint, getBreakpoint } from '../output/outputBuilderSlice';
import { getInputs } from '../input/inputBuilderSlice';
import { getTitle, setTitle } from './headerSlice';
import Tabs from '@mui/material/Tabs';
import { Tab, Box } from '@mui/material';
import { deepOrange, deepPurple, grey } from '@mui/material/colors';
import { LivebenchBlue } from '../logo';
import MultiLanguage from './multiLang';
const PlatformHeader: React.FC = (props: HeaderProps) => {

    const { builder } = props
    const theme = useAppSelector(getTheme)
    const title = useAppSelector(getTitle)
    const inputs = useAppSelector(getInputs)
    const outputs = useAppSelector(getOutputs)
    const dispatch = useAppDispatch()
    const save = () => {
        console.log({ inputs, outputs, title })
    }
    
    return (
        <Paper variant="outlined" square className='tw-h-full tw-border-t-0 tw-border-l-0 tw-border-r-0'>
            <header className=" tw-h-full tw-flex tw-flex-row tw-justify-between tw-items-center tw-px-3">
                <Box className=" tw-h-full tw-max-w-[200px]">
                    <LivebenchBlue />
                </Box>
                <div className='tw-flex tw-flex-row tw-justify-between tw-items-center tw-gap-4'>
                    {builder ? <Button variant='outlined' onClick={save}>save</Button> : ""}
                    {builder ? <Button variant='outlined' onClick={() => dispatch(toggle())}>add element</Button> : ""}
                    <MultiLanguage />
                    <div className='tw-flex tw-cursor-pointer ' onClick={() => dispatch(toggleTheme())}>
                        {
                            theme === 'dark' ? <DarkMode className=' tw-cursor-pointer ' /> : <LightMode className=' tw-cursor-pointer ' />
                        }
                    </div>
                    <Avatar sx={{ color: grey[900] }}>G</Avatar>
                </div>

            </header>
        </Paper>
    )
}

export default PlatformHeader;