'use client'
import {FC} from 'react'
import {Logo} from '../../lib/icons'
import Link from "next/link";
import ThemeSwitch from "../ThemeSwitch";
import {usePathname} from "next/navigation";

const routes = [
    {
        id: 'home',
        route: '/',
        match: /\/$/
    },
    {
        id: 'posts',
        route: 'posts',
        match: /\/posts\/?(.*)/
    }
]
const Header: FC = () => {
    const pathname = usePathname()

    return (
        <header className="inline-flex items-center justify-between w-full layout pt-12">
            <Link href="/" className="inline-flex items-center gap-x-2">
                <Logo className="hidden md:block w-12 h-12 text-main dark:text-mainDark"/>
                <p className="font-extrabold lg-text text-main dark:text-mainDark">FreeBounds</p>
            </Link>
            <div className="inline-flex items-center gap-x-4">
                {
                    routes.map((item, index) => {
                        return <Link key={index} href={item.route} className={`${item.match.test(pathname || '') && 'underline underline-offset-2'} sm-text capitalize`}>{item.id}</Link>
                    })
                }
                <ThemeSwitch />
            </div>
        </header>
    )
}

export default Header
