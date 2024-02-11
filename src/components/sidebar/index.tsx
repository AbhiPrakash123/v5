import React, { useEffect, useState } from "react"
import { motion, useAnimation } from 'framer-motion';
import { Link, Paper } from "@mui/material";
import { LivebenchWhite, LivebenchBlue, TenxerIconBlue } from "../logo";
import { getTheme } from '@/lib/features/theme/themeSlice'
import { useAppSelector } from '@/store/hooks'

import AddchartIcon from '@mui/icons-material/Addchart';
import PermMediaIcon from '@mui/icons-material/PermMedia';
import ArticleIcon from '@mui/icons-material/Article';
import CommentIcon from '@mui/icons-material/Comment';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const AnimateSidebar = motion(Paper)
const sidebarVariants = {
    open: { width: "200px" },
    closed: { width: "70px" },
    hide: {
        display: "block"
    }
};

const Sidebar: React.FC = () => {

    const [active, setActive] = useState("lab")
    const [open, setOpen] = useState(false)
    const controls = useAnimation();

    const handleToggleSidebar = () => {
        setOpen(!open);
        controls.start(open ? "closed" : "open");
    };


    const sidebarData = [
        {
            name: "lab",
            icon: <AddchartIcon />,
            link: "/*"
        },
        {
            name: "user guide",
            icon: <ArticleIcon />,
            link: "/*"
        },
        {
            name: "library",
            icon: <PermMediaIcon />,
            link: "/*"
        },
        {
            name: "comments",
            icon: <CommentIcon />,
            link: "/*"
        },
        {
            name: "shop",
            icon: <ShoppingCartIcon />,
            link: "/*"
        }
    ]
    const linkVar = {
        fadeIn: { opacity: 1 },
        fadeOut: { opacity: 0.5, transition: { duration: 0.5 } },
    }

    const theme = useAppSelector(getTheme)

    const handleMouseEnter = () => {
        setOpen(true);
        controls.start("open");
    }

    const handleMouseLeave = () => {
        setOpen(false);
        controls.start("closed");
    }

    const livebenchLogo = (
        <div className='tw-box-border tw-m-auto'>
            {theme === 'dark' ? <LivebenchWhite /> : <LivebenchBlue />}
        </div>
    )
    return (
        <AnimateSidebar
            className={`tw-h-full tw-m-0 tw-border-t-0 tw-border-l-0 tw-border-b-0`}
            variant="outlined"
            square
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            variants={sidebarVariants}
            animate={controls}
            initial="closed"
        >
            <Paper variant="outlined" square className=" tw-border-r-0 tw-border-l-0 tw-border-t-0 tw-w-full tw-h-[64px] tw-m-0 tw-flex tw-flex-row tw-justify-between tw-items-center">
                {open ? livebenchLogo : <TenxerIconBlue />}
            </Paper>

            <ul className="tw-flex tw-flex-col tw-p-0 tw-m-0">
                {sidebarData.map((item, i) => {
                    return <motion.li
                        className={`tw-p-2 tw-cursor-pointer ${active === item.name ? "tw-bg-blue-500  tw-text-white" : ""}  tw-h-[64px] tw-flex tw-flex-row tw-justify-start tw-items-center tw-rounded hover:tw-border hover:tw-border-blue-500 `}
                        onClick={() => setActive(item.name)}
                        variants={linkVar}
                        // animate={active === item.name ? "fadeIn" : "fadeOut"}
                        whileHover={{ scale: 0.9 }}
                        key={i}
                    >
                        <div className=" tw-px-3">{item.icon}</div>
                        <div>
                            {open ? item.name : ""}

                        </div>
                    </motion.li>
                })}
            </ul>
        </AnimateSidebar >
    )
}

export default Sidebar