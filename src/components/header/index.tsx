"use client"
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { Tenxerlab } from '@/components/logo';
import { getTheme, toggleTheme } from '@/lib/features/theme/themeSlice'

import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { Button } from '@mui/material'

const Header: React.FC = () => {
    const theme = useAppSelector(getTheme)
    const dispatch = useAppDispatch()
    return (
        <header className="tw-h-full tw-border-b-[1px] tw-p-3 tw-shadow-md tw-flex tw-flex-row tw-justify-between">
            <div className='tw-box-border tw-w-24'><Tenxerlab /></div>
            <Button variant="contained" color="primary" >Contained</Button>
            <div className=' tw-cursor-pointer' id="test-id-toggle-theme" onClick={() => dispatch(toggleTheme())}>
                {
                    theme === 'dark' ? <DarkModeIcon id="test-id-light-mode" />: <LightModeIcon id="test-id-dark-mode"/>
                }
            </div>
        </header>
    )
}

export default Header;