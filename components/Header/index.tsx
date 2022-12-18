'use client'
import {FC} from 'react'
import {Logo} from '../../lib/icons'
import Link from "next/link";
import ThemeSwitch from "../ThemeSwitch";
import {usePathname} from "next/navigation";

const routes = [
    {
        id: 'home',
        route: '/'
    },
    {
        id: 'posts',
        route: 'posts'
    }
]
const Header: FC = () => {
    const pathname = usePathname()

    return (
        <header className="inline-flex items-center justify-between w-full layout pt-12">
            <Link href="/" className="inline-flex items-center gap-x-2">
                <Logo className="w-8 h-8 text-main dark:text-mainDark"/>
                <p className="hidden md:block font-extrabold md-text text-main dark:text-mainDark">Samuele Sciatore</p>
            </Link>
            <div className="inline-flex items-center gap-x-4">
                {
                    routes.map((item, index) => {
                        return <Link key={index} href={item.route} className={`${pathname === item.route && 'underline underline-offset-2'} sm-text capitalize`}>{item.id}</Link>
                    })
                }
                <ThemeSwitch />
            </div>
        </header>
    )
}

export default Header
