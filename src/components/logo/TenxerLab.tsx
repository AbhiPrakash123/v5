import Image from 'next/image'

export default function Tenxerlab() {
    return <Image
        src="/tenxerlabs.png"
        width={0}
        height={0}
        layout='responsive'
        // objectFit='contain'
        alt="Picture of the author"
        priority={false}
    />
}
