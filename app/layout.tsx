import {Poppins} from '@next/font/google'
import Script from "next/script";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {ReactNode} from "react";
import '../styles/global.css'

const poppins = Poppins({ weight: ["300", "400", "600", "700"] });

export default function RootLayout({
                                       children,
                                   }: {
    children: ReactNode
}) {

    return (
        <html lang='en' className={poppins.className}>
        <head>
            <Script id="switch-theme">
                {`if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark')
} else {
    document.documentElement.classList.remove('dark')
}`}
            </Script>
            <link rel="shortcut icon" href="/favicon.svg"/>
            <title>Blog</title>
        </head>
        <body>
        <Header/>
        <div className="layout mt-24">
            {children}
        </div>
        <Footer/>
        </body>
        </html>
    )
}
