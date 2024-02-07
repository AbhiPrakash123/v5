"use client"
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { Tenxerlab } from '@/components/logo';
import { getTheme, toggleTheme } from '@/lib/features/theme/themeSlice'
import Avatar from '@mui/material/Avatar';
import Paper from '@mui/material/Paper';

import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { Button } from '@mui/material'

const Header: React.FC = () => {
    const theme = useAppSelector(getTheme)
    const dispatch = useAppDispatch()
    return (
        <Paper variant="outlined" square className='tw-h-full'>
            <header className=" tw-h-full tw-flex tw-flex-row tw-justify-between tw-items-center tw-px-2">
                <div className='tw-box-border tw-w-24'>Board titile</div>
                <div className='tw-flex tw-flex-row tw-justify-between tw-items-center tw-gap-4'>
                    <div className=' tw-cursor-pointer' id="test-id-toggle-theme" onClick={() => dispatch(toggleTheme())}>
                        {
                            theme === 'dark' ? <DarkModeIcon id="test-id-light-mode" /> : <LightModeIcon id="test-id-dark-mode" />
                        }
                    </div>
                    <Avatar>G</Avatar>
                </div>

            </header>
        </Paper>
    )
}

export default Header;