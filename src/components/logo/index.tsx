import Image from 'next/image'
import { Box } from "@mui/material"
const Logo = ({ image }: any) => {
    return (
        <Box className="tw-h-full tw-flex tw-flex-col tw-justify-center">
            <Image
                src={`${image}`}
                width={0}
                height={0}
                layout='responsive'
                objectFit='contain'
                alt="Picture of the author"
                priority={false}
            />
        </Box>
    )

}
export function LivebenchBlue(props: any) {
    return <Logo image='/livebench_blue.png' />
}


export function LivebenchWhite() {
    return <Logo image="/livebench_white.png" />
}


export function Organization(props: any) {
    return <Logo image={`/${props.organization}.png`} />
}
