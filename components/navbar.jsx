// built in link for SSR optimization and SEO from next
import Link from 'next/link'

export default function Navbar() {
    return (
        <nav>
            <Link href='/'>
                {/* <a>Home</a> */}
                Home
            </Link>

            <Link href='/about'>
                About me
            </Link>
        </nav>
    )
}