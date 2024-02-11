"use client"
import { LightMode,DarkMode } from '@mui/icons-material';
import { getTheme, toggleTheme } from '@/lib/features/theme/themeSlice'
import { Avatar, Paper,Button } from '@mui/material';
import { HeaderProps } from './header';
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import EditableText from '@/components/editableText';

const Header: React.FC = (props: HeaderProps) => {

    const { builder } = props
    const theme = useAppSelector(getTheme)
    const dispatch = useAppDispatch()

    return (
        <Paper variant="outlined" square className='tw-h-full tw-border-t-0 tw-border-l-0 tw-border-r-0'>
            <header className=" tw-h-full tw-flex tw-flex-row tw-justify-between tw-items-center tw-px-3">
                <div className='tw-box-border tw-h-full tw-flex tw-items-center'>
                    <EditableText defaultText='Board name' builder={builder}/>
                </div>
                <div className='tw-flex tw-flex-row tw-justify-between tw-items-center tw-gap-4'>
                    {builder?<Button variant='outlined'>save</Button>:""}
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