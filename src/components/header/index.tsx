"use client"
import { LightMode, DarkMode, Power, Tv, PhoneAndroid, Tablet } from '@mui/icons-material';
import { getTheme, toggleTheme } from '@/lib/features/theme/themeSlice';
import { Avatar, Paper, Button, TextField, Typography } from '@mui/material';
import { HeaderProps } from './header';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { toggle } from '../builderSidebar/buidlerSidebarSlice';
import { getOutputs, setBreakpoint, getBreakpoint } from '../output/outputBuilderSlice';
import { getInputs } from '../input/inputBuilderSlice';
import { getTitle, setTitle } from './headerSlice';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

const DeviceTab = () => {
    // const [value, setValue] = useState('lg');
    const breakpoint = useAppSelector(getBreakpoint)
    const dispatch = useAppDispatch()

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        // setValue(newValue);
        console.log(newValue)
        dispatch(setBreakpoint(newValue))
    };

    return (
        <Tabs value={breakpoint} onChange={handleChange} aria-label="disabled tabs example">
            <Tab icon={<PhoneAndroid />} value="sm" />
            <Tab icon={<Tablet />} value="md" />
            <Tab icon={<Tv />} value="lg" />
        </Tabs>
    );
}
const Header: React.FC = (props: HeaderProps) => {

    const { builder } = props
    const theme = useAppSelector(getTheme)
    const title = useAppSelector(getTitle)
    const inputs = useAppSelector(getInputs)
    const outputs = useAppSelector(getOutputs)
    const dispatch = useAppDispatch()
    const save = () => {
        console.log({ inputs, outputs,title })
    }

    return (
        <Paper variant="outlined" square className='tw-h-full tw-border-t-0 tw-border-l-0 tw-border-r-0'>
            <header className=" tw-h-full tw-flex tw-flex-row tw-justify-between tw-items-center tw-px-3">
                <div className='tw-box-border tw-h-full tw-flex tw-items-center'>
                    {/* <EditableText defaultText='Board name' builder={builder} /> */}
                    {builder ?
                        <TextField
                            value={title}
                            onChange={(event: any) => dispatch(setTitle(event.target.value))}
                            className=' tw-w-full tw-h-full'
                        /> :
                        <Typography>{title}</Typography>
                    }
                </div>
                {builder ? <DeviceTab /> : "" }
                <div className='tw-flex tw-flex-row tw-justify-between tw-items-center tw-gap-4'>
                    {builder ? <Button variant='outlined' onClick={save}>save</Button> : ""}
                    {builder ? <Button variant='outlined' onClick={() => dispatch(toggle())}>add element</Button> : ""}
                    <Button variant="contained" color="error">Disconnect<Power /></Button>
                    <div className=' tw-cursor-pointer' onClick={() => dispatch(toggleTheme())}>
                        {
                            theme === 'dark' ? <DarkMode /> : <LightMode />
                        }
                    </div>
                    <Avatar>B</Avatar>
                </div>

            </header>
        </Paper>
    )
}

export default Header;