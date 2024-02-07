"use client"
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { Tenxerlab } from '@/components/logo';
import { getTheme, enableDarkTheme, enableLightTheme } from '@/lib/features/theme/themeSlice'

import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { Button } from '@mui/material'

const Header: React.FC = () => {
    const theme = useAppSelector(getTheme)
    const dispatch = useAppDispatch()
    return (
        <header className="tw-h-full tw-border-b-[1px] tw-p-3 tw-shadow-md tw-flex tw-flex-row tw-justify-between">
            <div className='tw-box-border tw-w-24'><Tenxerlab /></div>
            <Button variant="contained" color="primary" >Contained</Button>
            {
                theme === 'dark' ?
                    <LightModeIcon onClick={() => dispatch(enableLightTheme())} className='tw-cursor-pointer' /> :
                    <DarkModeIcon onClick={() => dispatch(enableDarkTheme())} className='tw-cursor-pointer' />
            }
        </header>
    )
}

export default Header;