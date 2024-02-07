import Image from 'next/image'

export function LivebenchBlue() {
    return <Image
        src="/livebench_blue.png"
        width={0}
        height={0}
        layout='responsive'
        // objectFit='contain'
        alt="Picture of the author"
        priority={false}
    />
}

export function LivebenchWhite() {
    return <Image
        src="/livebench_white.png"
        width={0}
        height={0}
        layout='responsive'
        // objectFit='contain'
        alt="Picture of the author"
        priority={false}
    />
}