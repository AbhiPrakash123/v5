"use client"
import { LightMode, DarkMode, Power, Tv, PhoneAndroid, Tablet, PowerSettingsNew } from '@mui/icons-material';
import { getTheme, toggleTheme } from '@/lib/features/theme/themeSlice';
import { Avatar, Paper, Button, TextField, Typography } from '@mui/material';
import { HeaderProps } from './header';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { getOutputs, setBreakpoint, getBreakpoint } from '../output/outputBuilderSlice';
import { getInputs } from '../input/inputBuilderSlice';
import { getTitle, setTitle } from './headerSlice';
import PlatformHeader from './platformHeader';
import { Organization } from '../logo';
import "./style.css"

const Header: React.FC = (props: HeaderProps) => {

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
                <div className='tw-box-border tw-h-full tw-flex tw-gap-3 tw-items-center'>
                    {/* <EditableText defaultText='Board name' builder={builder} /> */}
                    <Organization organization="infineon" />
                    <Typography sx={{ fontWeight: 800, fontSize: "18px",textTransform: "uppercase" }} >AS234</Typography>

                    {builder ?
                        <TextField
                            value={title}
                            onChange={(event: any) => dispatch(setTitle(event.target.value))}
                            className=' tw-w-full tw-h-full'
                        /> :
                        <Typography
                            sx={{ 
                                fontWeight: 500, 
                                fontSize: "18px",
                                textTransform: "capitalize"
                            }}
                        >
                            {title}
                        </Typography>
                    }
                </div>
                <div className='tw-flex tw-flex-row tw-justify-between tw-items-center tw-gap-4'>
                    <Button variant="contained" color="error"><PowerSettingsNew /></Button>
                </div>

            </header>
        </Paper>
    )
}

export default Header;
export { PlatformHeader }