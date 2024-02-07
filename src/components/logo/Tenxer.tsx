import Image from 'next/image'

export function TenxerIconBlue() {
    return <Image
        src="/tenxer_icon_blue.png"
        width={0}
        height={0}
        layout='responsive'
        // objectFit='contain'
        alt="Picture of the author"
        priority={false}
    />
}
