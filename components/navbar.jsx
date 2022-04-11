// built in link for SSR optimization and SEO from next
import Link from 'next/link'

export default function Navbar() {
    return (
        <nav className='navbar fixed-top'>

            <li>
                <Link href='#About'>
                    About
                </Link>
            </li>

            <li>
                <Link href='#Project'>
                    Projects
                </Link>
            </li>

            <li>
                <Link href='#Contact'>
                    Contact
                </Link>
            </li>
        </nav>
    )
}