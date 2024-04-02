"use client"
import { getTheme, toggleTheme } from '@/lib/features/theme/themeSlice';
import { Avatar, Paper, Button, Tooltip } from '@mui/material';
import { HeaderProps } from './header';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { toggle } from '../builderSidebar/buidlerSidebarSlice';
import { getOutputs, setBreakpoint, getBreakpoint } from '../output/outputBuilderSlice';
import { Tab as MUITab, Tabs as MUITabs, Box, MenuItem } from '@mui/material';
import { deepOrange, deepPurple, grey } from '@mui/material/colors';
import { LivebenchWhite } from '../logo';
import MultiLanguage from './multiLang';
import { LightMode, DarkMode, Power, Tv, PhoneAndroid, Tablet, PowerSettingsNew } from '@mui/icons-material';
import { getLab } from '../lab/labSlice';
import { styled } from "@mui/material/styles";

const Tabs = styled(MUITabs)({
});

const Tab = styled(MUITab)({
    "&.MuiTab-root": {
        color: "white",
    },

});
const DeviceTab = () => {
    // const [value, setValue] = useState('lg');
    const breakpoint = useAppSelector(getBreakpoint)
    const dispatch = useAppDispatch()

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        // setValue(newValue);
        dispatch(setBreakpoint(newValue))
    };

    return (
        <Tabs
        TabIndicatorProps={{
            sx: {
              bgcolor: "white"
            }
          }}   
        value={breakpoint} onChange={handleChange} aria-label="disabled tabs example">
            <Tab icon={<PhoneAndroid />} value="sm" />
            <Tab icon={<Tablet />} value="md" />
            <Tab icon={<Tv />} value="lg" />
        </Tabs>
    );
}

const PlatformHeader: React.FC = (props: HeaderProps) => {

    const { builder } = props
    const labs = useAppSelector(getLab)

    const theme = useAppSelector(getTheme)
    const dispatch = useAppDispatch()
    const save = () => {
        console.log(labs)
    }

    return (
        <Paper variant="outlined" square className='tw-h-full tw-border-t-0 tw-border-l-0 tw-border-r-0 tw-bg-[#1D1059]'>
            <header className=" tw-h-full tw-flex tw-flex-row tw-justify-between tw-items-center tw-px-3">
                <Box className=" tw-h-full tw-max-w-[200px]">
                    <LivebenchWhite />
                </Box>
                {builder ? <DeviceTab /> : ""}

                <div className='tw-flex tw-flex-row tw-justify-between tw-items-center tw-gap-4'>
                    {builder ? <Button variant='contained' className='tw-text-white' onClick={save}>save</Button> : ""}
                    {builder ? <Button variant='contained' className='tw-text-white' onClick={() => dispatch(toggle())}>add element</Button> : ""}
                    <MultiLanguage />
                    <div className='tw-flex tw-cursor-pointer ' onClick={() => dispatch(toggleTheme())}>
                        {
                            theme === 'dark' ? <DarkMode className=' tw-cursor-pointer tw-text-white ' /> : <LightMode className=' tw-cursor-pointer tw-text-white' />
                        }
                    </div>
                    <Avatar sx={{ color: grey[900] }}>G</Avatar>
                </div>

            </header>
        </Paper>
    )
}

export default PlatformHeader;